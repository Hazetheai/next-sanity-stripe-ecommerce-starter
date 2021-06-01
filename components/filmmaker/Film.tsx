import { Carousel } from "react-responsive-carousel";

import MyImage from "components/elements/Image";
import Button from "components/elements/Button";
import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import { handleCurrencySymbol } from "utils/handleCurrencySymbol";
import { PortableText } from "utils/sanity";
import { FilmProduct } from "utils/sanity/manualTypes";
import { nextSanityImage } from "utils/sanity/nextSanityImage";
import { slugify } from "utils/stringUtils";
import { sanityProductToStripe } from "utils/stripe-helpers";
import Video from "components/elements/Video";
import { handleFilmRelease } from "components/sections/FilmSection/FilmSectionItem";

export function handleCredits(
  mainWriter: string,
  mainProducer: string,
  coWriters: string[] | undefined,
  coProducers: string[] | undefined
) {
  if (slugify(mainWriter) === slugify(mainProducer)) {
    return [`Written and produced by ${mainProducer}`];
  }

  return [
    `Written by ${mainWriter} ${
      coWriters ? " | Co-writers: " + coWriters.join(", ") : ""
    }`,
    `Produced by ${mainProducer} ${
      coProducers ? " | Co-writers: " + coProducers.join(", ") : ""
    }`,
  ];
}

// interface FilmProps {
//   albumProperties: FilmProperties
//   product?: Product
// }

const Film: React.FC<FilmProduct> = ({
  featuringActors,
  story,
  status,
  blurb,
  director,
  mainImage,
  platforms,
  coWriters,
  coProducers,
  gallery,
  slug,
  title,
  // actors,
  producer,
  writer,
  genres,
  recognition,
  tags,
  product,
  trailer,
}) => {
  if (!mainImage) {
    console.log(`NO film mainImage in COMPONENT`, mainImage);
    return <div>No Props</div>;
  }
  const credits = handleCredits(writer, producer, coWriters, coProducers);
  const { addItem } = useShoppingCart();
  return (
    <div className="bg-black text-gray-300 min-h-screen p-10 pb-24">
      {/* header */}
      <div className="flex flex-wrap items-center justify-center">
        {trailer?.url && (
          <div className="">
            <Video url={trailer.url} />{" "}
          </div>
        )}
      </div>
      {/* action buttons */}
      <div className="mt-6 flex justify-between"></div>

      <div className="mt-10"></div>
      <div className="mt-10">
        <div className="flex flex-col justify-center md:mr-12">
          <h2 className="mt-0 mb-2 text-white text-xl">Director: {director}</h2>
          <p className="text-gray-600 mb-2 text-sm">
            {featuringActors ? "Starring: " + featuringActors.join(", ") : ""}
          </p>
          {credits.map((credit) => (
            <p key={credit} className="text-gray-600 mb-2 text-sm">
              {credit}
            </p>
          ))}
        </div>
        <PortableText blocks={story} className="PortableText-container" />
      </div>
      {gallery?.length && (
        <div className="mt-10">
          <Carousel>
            {gallery.map((image) => (
              <MyImage
                containerClassName="inset-0 h-64 z-negative "
                className="opacity-75"
                nextImageProps={{
                  ...nextSanityImage(image),
                  width: undefined,
                  height: undefined,
                  layout: "fill",
                  objectFit: "contain",
                }}
              />
            ))}
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default Film;
