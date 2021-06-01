import { handleCredits } from "components/composer/Album";
import Button from "components/elements/Button";
import MyImage from "components/elements/Image";
import { handleFilmRelease } from "components/sections/FilmSection/FilmSectionItem";
import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import { handleCurrencySymbol } from "utils/handleCurrencySymbol";
import { FilmProduct } from "utils/sanity/manualTypes";
import { nextSanityImage } from "utils/sanity/nextSanityImage";
import { sanityProductToStripe } from "utils/stripe-helpers";

const VideoHeader: React.FC<FilmProduct> = (film) => {
  const {
    featuringActors,
    story,
    status,
    blurb,
    director,
    mainImage,
    platforms,
    coWriters,
    coProducers,
    movieBackgroundURL,
    slug,
    title,
    // actors,
    producer,
    writer,
    genres,
    recognition,
    tags,
    product,
  } = film;
  const credits = handleCredits(writer, producer, coWriters, coProducers);
  const release = handleFilmRelease(film, "store");

  const { addItem } = useShoppingCart();
  return (
    <header className="header relative lg:overflow-hidden">
      {/* <div className="absolute inset-0 z-negative lg:opacity-100 opacity-50">
        <video
          src={movieBackgroundURL}
          autoPlay
          muted
          loop
          className="object-cover w-full h-full"
        />
      </div> */}

      {movieBackgroundURL ? (
        <div className="absolute inset-0 z-negative lg:opacity-100 opacity-50">
          <video
            // ref={videoRef}
            src={movieBackgroundURL}
            autoPlay
            muted
            loop
            className="object-cover w-full h-full"
          />
        </div>
      ) : (
        <>
          {mainImage.asset ? (
            <MyImage
              containerClassName="inset-0 w-full h-full z-negative static py-12"
              className="opacity-75"
              nextImageProps={{
                ...nextSanityImage(mainImage),
                width: undefined,
                height: undefined,
                layout: "fill",
                objectFit: "cover",
              }}
            />
          ) : null}
        </>
      )}
      <div className="container px-5 sm:px-6 lg:px-8  max-w-7xl relative mx-auto lg:mt-56 lg:px-16 md:pb-24 px-4 py-4">
        <div className="md:pl-8 md:border-l border-white">
          <p className="text-white tracking-wide text-base font-light leading-none">
            {release.releaseDate || "Out Now"}
          </p>
          <h1 className="text-white md:text-6xl text-2xl font-bold font-sans m-0 md:leading-none">
            {title}
          </h1>
          <p className="text-white text-lg md:max-w-lg w-full md:my-4">
            {blurb}
          </p>
          <div className="flex flex-wrap">
            {/* <button className="mr-2 bg-green-500 text-green-100 block py-2 px-8 -full">
            Buy
          </button> */}
            {product?.defaultProductVariant && (
              <Button
                text={`Buy ${
                  product.defaultProductVariant.title
                } ${handleCurrencySymbol(
                  product.defaultProductVariant.currency
                )}${product.defaultProductVariant.price} `}
                btnStyle="primary"
                className="mr-2 mb-2 sm:mb-0"
                func={() =>
                  addItem(
                    sanityProductToStripe(
                      product,
                      product.defaultProductVariant
                    )
                  )
                }
              />
            )}
            {product?.variants?.map((variant) => (
              <Button
                key={variant.sku}
                text={`Buy ${variant.title} ${handleCurrencySymbol(
                  variant.currency
                )}${variant.price}`}
                btnStyle="primary"
                func={() => addItem(sanityProductToStripe(product, variant))}
                className="mb-2 sm:mb-0"
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default VideoHeader;
