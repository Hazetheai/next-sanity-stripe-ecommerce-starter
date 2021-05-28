import React, { useState, useEffect } from "react";

import StripeTestCards from "./StripeTestCards";

import { useShoppingCart } from "use-shopping-cart";
import { fetchPostJSON } from "../../utils/api-helpers";
import NextLink from "next/link";
import Link from "components/elements/Link";
import Button from "components/elements/Button";
import { isBrowser } from "utils/booleans";
import { useRouter } from "next/router";
import { useMusicPlayer } from "components/music-player/music-context";

const CartSummary = () => {
  const [loading, setLoading] = useState(false);
  const [cartEmpty, setCartEmpty] = useState(true);
  const {
    formattedTotalPrice,
    cartCount,
    clearCart,
    cartDetails,
    redirectToCheckout,
  } = useShoppingCart();
  const router = useRouter();
  useEffect(() => setCartEmpty(!cartCount), [cartCount]);
  const { state } = useMusicPlayer();
  const handleCheckout: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    setLoading(true);

    const response = await fetchPostJSON("/api/checkout_sessions/cart", {
      cartItems: cartDetails,
      metadata: { note: "" },
    });

    if (response.statusCode === 500) {
      console.error(response.message);
      return;
    }

    redirectToCheckout({ sessionId: response.id });
  };

  return (
    <form
      onSubmit={handleCheckout}
      className={`bg-white p-4 ${state.album.trackList.length ? "pb-16" : ""}`}
    >
      <h2 className="text-gray-600">Summary</h2>
      {/* This is where we'll render our cart */}
      <p className="text-gray-500 w-full flex justify-between">
        <span>Number of Items:</span>{" "}
        <span className="text-gray-900">{cartCount}</span>
      </p>
      <p className="text-gray-500 w-full flex justify-between">
        <span>Total:</span>{" "}
        <span className="text-gray-900">{formattedTotalPrice}</span>
      </p>

      {/* Redirects the user to Stripe */}
      {/* <StripeTestCards /> */}
      <div className="flex justify-between">
        <Link
          btnStyle="secondary"
          hrefProp="cart"
          text="View"
          disabled={cartEmpty || loading}
          className="  my-2  text-black"
          icon={{ name: "none" }}
        />
        <Button
          btnStyle="secondary"
          func={clearCart}
          text="Clear"
          disabled={cartEmpty || loading}
          className=" my-2 text-black"
        />
      </div>
      <Button
        btnStyle="primary"
        // hrefProp={router.pathname.slice(1)}
        text="Checkout"
        title={"Go to checkout"}
        disabled={cartEmpty || loading}
        className="w-full my-2 text-black"
        type="submit"
        icon={{ name: "arrow" }}
      />

      {/* <button
        className="cart-style-background"
        type="submit"
        disabled={cartEmpty || loading}
      >
        Checkout
      </button> */}
      {/* <button
        className="cart-style-background"
        type="button"
        onClick={clearCart}
      >
        Clear Cart
      </button> */}
      {/* <NextLink href="/cart" passHref>
        <a className="cart-style-background" href="0#">
          View Cart
        </a>
      </NextLink> */}
    </form>
  );
};

export default CartSummary;
