import MyImage from "components/common/Image";
import Link from "next/link";
import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import { nextSanityImage } from "utils/sanity/nextSanityImage";
import { Product } from "utils/sanity/types";
import { sanityProductToStripe } from "utils/stripe-helpers";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useShoppingCart();
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link href={`products/${product.slug.current}`} passHref>
        <a className="block relative h-48 rounded overflow-hidden" href="0#">
          <MyImage
            nextImageProps={{
              ...nextSanityImage(product.mainImage),
              layout: "fill",
              width: undefined,
              height: undefined,
              objectFit: "cover",
            }}
            containerClassName="w-full h-full block"
          />
        </a>
      </Link>
      <div className="mt-4">
        {typeof product.tags === "string" ? (
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            {product.tags}
          </h3>
        ) : (
          product.tags?.map((tag) => (
            <h3
              key={tag}
              className="text-gray-500 text-xs tracking-widest title-font mb-1"
            >
              {tag}
            </h3>
          ))
        )}
        <h2 className="text-white title-font text-lg font-medium">
          {product.title}
        </h2>
        <div className="flex justify-between">
          <p className="mt-1">€{product.defaultProductVariant.price}</p>
          <button
            onClick={() =>
              addItem(sanityProductToStripe(product.defaultProductVariant))
            }
            className="mx-2 text-gray-600 border rounded-md p-2 hover:bg-gray-200 focus:outline-none"
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
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
