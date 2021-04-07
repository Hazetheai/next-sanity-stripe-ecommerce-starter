import { NextPage } from "next";
import Cart from "../components/commerce/Cart";
import CartSummary from "../components/commerce/CartSummary";
import Products from "../components/commerce/Products";

const DonatePage: NextPage = () => {
  return (
    <>
      <div className="page-container">
        <h1>Shopping Cart</h1>
        <p>
          Powered by the{" "}
          <a href="https://useshoppingcart.com">use-shopping-cart</a> React
          hooks library.
        </p>
        <Cart>
          <CartSummary />
          <Products />
        </Cart>
      </div>
    </>
  );
};

export default DonatePage;
