import { useShoppingCart } from "use-shopping-cart";
import React, { useState } from "react";
import { Product } from "utils/sanity/types";
import { BRAND_NAME } from "config/general";
import ProductList from "./ProductList";
import { PortableText, urlFor } from "utils/sanity";
import { sanityProductToStripe } from "utils/stripe-helpers";
import Button from "components/elements/Button";
import { nextSanityImage } from "utils/sanity/nextSanityImage";
import MyImage from "components/elements/Image";

const ProductPage: React.FC<Product> = (product) => {
  const {
    title,
    defaultProductVariant,
    mainImage,
    body,
    _id,
    variants,
  } = product;
  const [count, setCount] = useState(1);

  const [currentVariant, setCurrentVariant] = useState(defaultProductVariant);
  const [currentView, setCurrentView] = useState<
    "description" | "reviews" | "details"
  >("description");
  const { addItem, redirectToCheckout } = useShoppingCart();
  const handleCount = (value) =>
    !(count === 0 && value === -1) ? setCount(count + value) : count;
  // const image = urlFor(mainImage).url();

  const unSelectedVariants = variants
    ? [defaultProductVariant]
        .concat(variants)
        .filter((el) => el.sku !== currentVariant.sku)
    : [];
  return (
    <section id={_id} className="text-gray-400  body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {BRAND_NAME}
            </h2>
            <h1 className="text-white text-3xl title-font font-medium mb-4">
              {title} - {currentVariant.title}
            </h1>
            {/* Tabs */}
            <div className="flex mb-4">
              <Button
                btnStyle="clear"
                func={() => setCurrentView("description")}
                text="Description"
                className={`flex-grow border-b-2  py-2 text-lg px-1 ${
                  currentView === "description"
                    ? "text-indigo-400 border-indigo-500"
                    : ""
                }`}
              />
              {/* <Button
                btnStyle="clear"
                func={() => setCurrentView("reviews")}
                text="Reviews"
                className={`flex-grow border-b-2  py-2 text-lg px-1 justify-center ${
                  currentView === "reviews"
                    ? "text-indigo-400 border-indigo-500"
                    : ""
                }`}
              />
              <Button
                btnStyle="clear"
                func={() => setCurrentView("details")}
                text="Details"
                className={`flex-grow border-b-2  py-2 text-lg px-1 justify-center ${
                  currentView === "details"
                    ? "text-indigo-400 border-indigo-500"
                    : ""
                }`}
              /> */}
            </div>

            {body && currentView === "description" ? (
              <PortableText
                blocks={body?.en || body}
                className="leading-relaxed mb-4"
              />
            ) : currentView === "reviews" ? (
              <div>
                <p>Ratings</p>
              </div>
            ) : (
              <div> Details </div>
            )}
            {/* options */}

            {unSelectedVariants.map((variant) => {
              return (
                <div
                  key={variant.sku}
                  className="flex border-t border-gray-800 py-2"
                >
                  <span className="text-gray-500">{variant.title}</span>
                  <Button
                    className="ml-auto text-white"
                    text="Select"
                    func={() => setCurrentVariant(variant)}
                  />
                </div>
              );
            })}

            {/* <div className="flex border-t border-gray-800 py-2">
              <span className="text-gray-500">Size</span>
              <span className="ml-auto text-white">Medium</span>
            </div> */}
            <div className="flex border-t border-b mb-6 border-gray-800 py-2">
              <span className="text-gray-500">Quantity</span>

              <div className="flex ml-auto text-white items-center mt-1">
                <button
                  onClick={() => handleCount(-1)}
                  className="text-gray-500 focus:outline-none focus:text-gray-600"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
                <span className="text-gray-700 text-lg mx-2">{count}</span>
                <button
                  onClick={() => handleCount(1)}
                  className="text-gray-500 focus:outline-none focus:text-gray-600"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-white">
                €{currentVariant.price}
              </span>
              <button
                onClick={() =>
                  addItem(sanityProductToStripe(product, currentVariant), count)
                }
                className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 "
              >
                Add to Cart
              </button>
              <button className="-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </button>
            </div>
          </div>

          <MyImage
            nextImageProps={{
              ...nextSanityImage(mainImage),
              alt: title,
              layout: "fill",
              width: undefined,
              height: undefined,
              objectFit: "cover",
            }}
            containerClassName="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center "
          />
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
