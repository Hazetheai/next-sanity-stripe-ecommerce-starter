import { BaseForm } from "components/common/BaseForm";
import Button from "components/elements/Button";
import MyImage from "components/elements/Image";
import Link from "components/elements/Link";
import Testimonial from "components/elements/Testimonial";
import dayjs from "dayjs";
import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import { handleCurrencySymbol } from "utils/handleCurrencySymbol";
import { removeObjectProperty } from "utils/objectFunctions";
import { FilmProduct } from "utils/sanity/manualTypes";
import { nextSanityImage } from "utils/sanity/nextSanityImage";
import { Film } from "utils/sanity/types";
import { sanityProductToStripe } from "utils/stripe-helpers";

interface FilmSectionItemProps {
  filmProduct: FilmProduct;
  isFeatured?: boolean;
  idx?: number;
}

export function handleFilmRelease(
  film: Film,
  platform?: "mubi" | "store" | "netflix" | "youtube"
) {
  const { status } = film;
  // Get platform selected release date or fallback to the main release date
  const hasReleaseDate =
    film?.platforms?.find((el) =>
      platform ? el.title === platform && el.releaseDate : el.releaseDate
    )?.releaseDate || film.releaseDate;

  const releaseMonth = dayjs(hasReleaseDate).format("M");
  const releaseDate = !hasReleaseDate
    ? `In ${status}`
    : status === "development"
    ? parseInt(releaseMonth, 10) < 5
      ? `Arriving ${dayjs(hasReleaseDate).format("YYYY")}`
      : parseInt(releaseMonth, 10) < 8
      ? `Arriving ${dayjs(hasReleaseDate).format("YYYY")}`
      : parseInt(releaseMonth, 10) < 11
      ? `Arriving ${dayjs(hasReleaseDate).format("YYYY")}`
      : `Arriving ${dayjs(hasReleaseDate).format("YYYY")}`
    : status === "production"
    ? parseInt(releaseMonth, 10) < 5
      ? `Arriving Spring ${dayjs(hasReleaseDate).format("YYYY")}`
      : parseInt(releaseMonth, 10) < 8
      ? `Arriving Summer ${dayjs(hasReleaseDate).format("YYYY")}`
      : parseInt(releaseMonth, 10) < 11
      ? `Arriving Autumn ${dayjs(hasReleaseDate).format("YYYY")}`
      : `Arriving Winter ${dayjs(hasReleaseDate).format("YYYY")}`
    : ""; // `Released ${dayjs(hasReleaseDate).format("DD/MM/YYYY")}`;

  const isReleased =
    status === "completed" && dayjs(hasReleaseDate).isBefore(dayjs());

  return { releaseDate, isReleased };
}

const FilmSectionItem: React.FC<FilmSectionItemProps> = ({
  filmProduct,
  isFeatured,
  idx,
}) => {
  const textOrientation = "center";
  const { addItem } = useShoppingCart();
  const { product } = filmProduct;
  const film = removeObjectProperty(filmProduct, "product");

  const { releaseDate, isReleased } = handleFilmRelease(film);
  return (
    <div
      key={film._id}
      className={`container max-w-7xl mx-auto my-12 group flex text-gray-300 px-10 py-20 min-h-30rem relative justify-center items-center md:center ${
        isFeatured ? "py-48" : ""
      }`}
    >
      <p
        className={`text-left text-gray-100 text-sm tracking-widest max-w-md z-20 absolute bottom-4 left-4  
      transition transform translate-y-16 opacity-0 
      group-hover:opacity-100 group-hover:translate-y-0 `}
      >
        {film.blurb}
      </p>
      {film.status === "completed" &&
        film.recognition?.map((recog, idx) =>
          idx === 0 ? (
            <div className="absolute top-0 right-0 mr-4 z-10 hidden md:block pointer-events-none">
              <Testimonial {...recog} />{" "}
            </div>
          ) : null
        )}
      {film.mainImage.asset && (
        <MyImage
          overlay={!isFeatured}
          overlayClassName="opacity-0 group-hover:opacity-25 z-10 bg-gray-700 transition "
          // className="bg-white"
          containerClassName="inset-0 h-full z-negative static "
          // link={`/films/${film.slug.current}`}
          nextImageProps={{
            ...nextSanityImage(film.mainImage),
            width: undefined,
            height: undefined,
            layout: "fill",
            objectFit: "cover",
          }}
        />
      )}
      {/* header */}
      <div
        className={`flex flex-col justify-center items-center z-20 relative`}
      >
        {/* song list   */}
        {isFeatured ? (
          // Featured Film
          <div className="mr-6 flex flex-col justify-center items-center ">
            <h1 className="mt-0 mb-2 text-white text-center text-6xl ">
              {film.title}
            </h1>

            {/* {film?.story ? (
              <PortableText className="max-w-lg PortableText-container" blocks={film?.story} />
            ) : ( */}
            {/* <p className="text-white text-sm tracking-widest   max-w-lg">
              {film.blurb}
            </p> */}
            {/* )} */}
            {film.status === "completed" && product && (
              <div className="flex flex-col sm:flex-row justify-center pt-12">
                <Button
                  text={`Buy ${
                    product.defaultProductVariant.title
                  } ${handleCurrencySymbol(
                    product.defaultProductVariant.currency
                  )}${product.defaultProductVariant.price} `}
                  btnStyle="primary"
                  className="mr-2 lg:mr-0 text-center"
                  func={() =>
                    addItem(
                      sanityProductToStripe(
                        product,
                        product.defaultProductVariant
                      )
                    )
                  }
                />
                {product?.variants?.map((variant) => (
                  <Button
                    key={variant.sku}
                    text={`Buy ${variant.title} ${handleCurrencySymbol(
                      variant.currency
                    )}${variant.price}`}
                    btnStyle="primary"
                    func={() =>
                      addItem(sanityProductToStripe(product, variant))
                    }
                    className="mr-2 mt-2 sm:mt-0 text-center"
                  />
                ))}
              </div>
            )}
            <Link
              btnStyle="secondary"
              hrefProp={`films/${film.slug.current}`}
              text="View"
              className="mt-2"
            />
          </div>
        ) : (
          // Non Featured Film
          <div className="flex flex-col items-center justify-center relative ">
            <h1 className="mt-0 mb-2 text-white text-center text-6xl ">
              {film.title}
            </h1>

            {isReleased ? (
              //  Released Non Featured Film
              <>
                <span className="text-gray-400   mt-2">{releaseDate}</span>
                <div className="flex flex-wrap mt-2 justify-center lg:justify-between">
                  {product?.defaultProductVariant &&
                    film.status === "completed" && (
                      <Button
                        text={`Buy ${
                          product.defaultProductVariant.title
                        } ${handleCurrencySymbol(
                          product.defaultProductVariant.currency
                        )}${product.defaultProductVariant.price} `}
                        btnStyle="primary"
                        className="mr-2 mt-2 lg:mr-0 text-center"
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
                </div>
              </>
            ) : (
              //  Uneleased Non Featured Film
              <div>
                <p className="  mt-2">
                  {isReleased ? "Available now" : "Catch The Release!"} -{" "}
                  <span className="text-gray-400">{releaseDate}</span>
                </p>
                <BaseForm
                  endpoint="newsletter"
                  className="mx-auto flex flex-wrap justify-center"
                  fields={[
                    // { fieldType: "text", label: "Full Name", register: "fullName" },
                    {
                      fieldType: "text",
                      label: "Email",
                      register: "email",
                      inputType: "email",
                      inputClassName: "-none",
                    },
                  ]}
                  submitClassName="justify-end sm:mt-0"
                />
              </div>
            )}

            <Link
              btnStyle="secondary"
              hrefProp={`films/${film.slug.current}`}
              text="View"
              className="mt-2  inline-flex"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export { FilmSectionItem };
