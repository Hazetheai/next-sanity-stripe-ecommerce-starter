import useOnClickOutside from "hooks/useOutsideClick";
import { useRef } from "react";
import { useShoppingCart } from "use-shopping-cart";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

interface FloatingCartProps {
  cartOpen: boolean;
  closeHandler: () => void;
}

const Cart: React.FC<FloatingCartProps> = ({ closeHandler, cartOpen }) => {
  /* prettier-ignore */
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, closeHandler);
  const {
    addItem,
    removeItem,
    cartCount,
    cartDetails,
    decrementItem,
    incrementItem,
  } = useShoppingCart();
  return (
    <div
      ref={ref}
      className={`${
        cartOpen ? "translate-x-0 ease-out" : "translate-x-full ease-in"
      } fixed flex flex-col right-0 top-0 max-w-xs w-full h-full px-6 py-4 transition duration-300 transform overflow-y-auto bg-white border-l-2 border-gray-300 z-50`}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-medium text-gray-700">Your cart</h3>
        <button
          onClick={closeHandler}
          className="text-gray-600 focus:outline-none"
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
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <hr className="my-3" />
      {Object.values(cartDetails).map((item, idx, arr) => (
        <CartItem
          key={item.sku}
          increment={incrementItem}
          decrement={decrementItem}
          item={item}
          isLast={idx === arr.length - 1}
        />
      ))}

      <CartSummary />
    </div>
  );
};

export default Cart;
