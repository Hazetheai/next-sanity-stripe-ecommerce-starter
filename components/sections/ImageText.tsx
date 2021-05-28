import MyImage from "components/elements/Image";
import useInView from "hooks/useInView";
import React from "react";
import { PortableText } from "utils/sanity";
import { nextSanityImage } from "utils/sanity/nextSanityImage";
import { ImageText } from "utils/sanity/types";

interface TextWithImageProps extends ImageText {
  fadeIn?: boolean;
}

const TextImage: React.FC<TextWithImageProps> = ({
  body,
  image,
  slug,
  title,
  fadeIn = true,
}) => {
  const orientationClassNames = {
    right: {
      image: "lg:w-3/5 md:w-1/2  md:mt-0 mt-12 min-h-30rem",
      text: "lg:w-2/5 md:w-1/2 md:pr-10 md:py-6 ",
    },
    left: {
      image: "lg:w-3/5 md:w-1/2 md:pr-10 md:py-6 min-h-30rem",
      text: "lg:w-2/5 md:w-1/2  md:mt-0 mt-12 pl-12 order-1 items-center",
    },
  };

  const [ref, isVisible] = useInView({
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
    freezeOnceVisible: true,
    deactivate: !fadeIn,
  });

  const fadeInClassNames = isVisible
    ? "transform-gpu translate-y-0 opacity-1 scale-100"
    : "transform-gpu translate-y-10 opacity-0 scale-90";

  return (
    <section className="text-gray-400  body-font ">
      <div className="w-full items-center container max-w-7xl px-5 py-24 mx-auto flex flex-wrap">
        <div className={orientationClassNames[image.imageOrientation].text}>
          {body && <PortableText blocks={body} />}
        </div>
        <div
          ref={ref}
          className={`${
            orientationClassNames[image.imageOrientation].image
          } relative motion-reduce:transition-none transition duration-300 ease-in-out ${fadeInClassNames}`}
        >
          <MyImage
            containerClassName={`static `}
            nextImageProps={{
              ...nextSanityImage(image),
              alt: image.alt || title,
              layout: "fill",
              width: undefined,
              height: undefined,
              objectFit: image.imageFit,
              objectPosition: image.imagePosition,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default TextImage;
