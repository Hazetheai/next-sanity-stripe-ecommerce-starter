import MyImage from "components/elements/Image";
import React from "react";

import { CartEntry } from "use-shopping-cart";

interface CartItemProps {
  item: CartEntry;
  increment: (sku: string, quantity?: number) => void;
  decrement: (sku: string, quantity?: number) => void;
  isLast: boolean;
}

const CartItem: React.FC<CartItemProps> = ({
  increment,
  decrement,
  item,
  isLast,
}) => {
  return (
    <div
      key={item.sku}
      className={`flex justify-between mt-6 ${isLast ? "flex-1" : ""}`}
    >
      <div className="flex">
        {item.image && (
          <MyImage
            // alt={product.title}
            nextImageProps={{
              src: item.image,
              alt: item.name,
              layout: "fill",
              width: undefined,
              height: undefined,
              objectFit: "cover",
            }}
            containerClassName="h-20 w-20"
          />
        )}
        <div className="mx-3">
          <h3 className="text-sm text-gray-600">{item.name}</h3>
          <div className="flex items-center mt-2">
            <button
              onClick={() => increment(item.sku, 1)}
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
            <span className="text-gray-700 mx-2">{item.quantity}</span>
            <button
              onClick={() => decrement(item.sku, 1)}
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
          </div>
        </div>
      </div>
      <span className="text-gray-600">€{item.price / 100}</span>
    </div>
  );
};

export default CartItem;
