import imageUrlBuilder from "@sanity/image-url";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import {
  SanityAsset,
  SanityImageObject,
  SanityImageSource,
  SanityReference,
} from "@sanity/image-url/lib/types/types";
import { ImageLoader } from "next/image";
import { sanityClient } from "utils/sanity";

export const DEFAULT_FALLBACK_IMAGE_WIDTH = 1200;
export type UseNextSanityImageDimensions = {
  width: number;
  height: number;
  aspectRatio: number;
};

export type UseNextSanityImageBuilderOptions = {
  width: number | null;
  originalImageDimensions: UseNextSanityImageDimensions;
};

export type UseNextSanityImageBuilder = (
  imageUrlBuilder: ImageUrlBuilder,
  options: UseNextSanityImageBuilderOptions
) => ImageUrlBuilder;

export type UseNextSanityImageOptions = {
  imageBuilder?: UseNextSanityImageBuilder;
};

export type NextSanityImageProps = {
  loader: ImageLoader;
  src: string;
  width: number;
  height: number;
  layout: "responsive" | "intrinsic" | "fixed";
};

export const DEFAULT_IMAGE_BUILDER = (
  imageUrlBuilder: ImageUrlBuilder,
  options: UseNextSanityImageBuilderOptions
) => {
  return imageUrlBuilder
    .width(
      options.width ||
        Math.min(
          options.originalImageDimensions.width,
          DEFAULT_FALLBACK_IMAGE_WIDTH
        )
    )
    .fit("clip");
};

export function getSanityRefId(image: SanityImageSource): string {
  if (typeof image === "string") {
    return image;
  }

  const obj = image as SanityImageObject;
  const ref = image as SanityReference;
  const img = image as SanityAsset;

  if (typeof image === "string") {
    return image;
  }

  if (obj.asset) {
    return obj.asset._ref || (obj.asset as SanityAsset)._id;
  }

  return ref._ref || img._id || "";
}

export function getImageDimensions(
  image: SanityImageSource
): UseNextSanityImageDimensions {
  const id = getSanityRefId(image);
  const dimensions = id.split("-")[2];

  const [width, height] = dimensions
    .split("x")
    .map((num: string) => parseInt(num, 10));
  const aspectRatio = width / height;

  return { width, height, aspectRatio };
}

export function nextSanityImage(
  image: SanityImageSource,
  options: UseNextSanityImageOptions = {}
): NextSanityImageProps {
  const imageBuilder = options.imageBuilder || DEFAULT_IMAGE_BUILDER;
  const originalImageDimensions = getImageDimensions(image);

  const loader: ImageLoader = ({ width }) => {
    return (
      imageBuilder(imageUrlBuilder(sanityClient).image(image), {
        width,
        originalImageDimensions,
      }).url() || ""
    );
  };

  const baseImgBuilder = imageBuilder(
    imageUrlBuilder(sanityClient).image(image),
    {
      width: null,
      originalImageDimensions,
    }
  );

  const width =
    baseImgBuilder.options.width ||
    (baseImgBuilder.options.maxWidth
      ? Math.min(baseImgBuilder.options.maxWidth, originalImageDimensions.width)
      : originalImageDimensions.width);

  const height =
    baseImgBuilder.options.height ||
    (baseImgBuilder.options.maxHeight
      ? Math.min(
          baseImgBuilder.options.maxHeight,
          originalImageDimensions.height
        )
      : Math.round(width / originalImageDimensions.aspectRatio));

  return {
    loader,
    src: baseImgBuilder.url() || "",
    width,
    height,
    layout: "intrinsic",
  };
}
