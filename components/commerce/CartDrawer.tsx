import MyImage from "components/elements/Image";
import React from "react";
import { CartDetails, Product } from "use-shopping-cart";
import { nextSanityImage } from "utils/sanity/nextSanityImage";
import CartSummary from "./CartSummary";

interface FloatingCartProps {
  cartItems: Product[];
  cartDetails: CartDetails;
  removeItem: (sku: string) => void;
  closeHandler: () => void;
}

const FloatingCart: React.FC<FloatingCartProps> = ({
  cartItems,
  cartDetails,
  removeItem,
  closeHandler,
}) => {
  return (
    <>
      {/* component */}
      <div className="p-5 absolute top-0 right-0 mt-2 mr-2 z-10">
        <div className="shadow-xl w-64">
          {cartItems.map((item) => {
            return (
              <div
                key={item.sku}
                className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100"
              >
                <div className="p-2 w-12 relative">
                  <MyImage
                    nextImageProps={{
                      src: item.image || "",

                      layout: "fill",
                      width: undefined,
                      height: undefined,
                      objectFit: "cover",
                    }}
                    containerClassName="w-full h-full block"
                  />
                </div>
                <div className="flex-auto text-sm w-32">
                  <div className="font-bold">{item.name}</div>
                  <div className="truncate">{item.description}</div>
                  <div className="text-gray-400">
                    Qt: {cartDetails[item.sku].quantity}
                  </div>
                </div>
                <div className="flex flex-col w-18 font-medium items-end">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeItem(item.sku);
                    }}
                    className="w-4 h-4 mb-6 hover:bg-red-200 -full cursor-pointer text-red-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-trash-2 "
                    >
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      <line x1={10} y1={11} x2={10} y2={17} />
                      <line x1={14} y1={11} x2={14} y2={17} />
                    </svg>
                  </button>
                  ???{item.price}
                </div>
              </div>
            );
          })}

          <CartSummary />
        </div>
      </div>
    </>
  );
};

export default FloatingCart;
