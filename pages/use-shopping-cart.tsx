import { NextPage } from "next";
import { Product } from "utils/sanity/types";
import { getAllProducts } from "utils/sanity/api";
import Cart from "../components/commerce/Cart";
import CartSummary from "../components/commerce/CartSummary";
import Products from "../components/commerce/Products";

interface ProductsPageProps {
  products: Product[];
}

const DonatePage: NextPage<ProductsPageProps> = ({ products }) => {
  return (
    <>
      <div className="page-container">
        <h1>Shopping Cart</h1>
        <p>
          Powered by the{" "}
          <a href="https://useshoppingcart.com">use-shopping-cart</a> React
          hooks library.
        </p>

        <CartSummary />
        <Products products={products} />
      </div>
    </>
  );
};

export default DonatePage;

export async function getStaticProps({}) {
  const products = await getAllProducts();

  return {
    props: {
      products,
    },
  };
}
