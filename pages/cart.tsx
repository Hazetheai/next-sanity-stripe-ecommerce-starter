import CartPage from "components/commerce/CartPage";
import { NextPage } from "next";
import { getAllProducts } from "utils/sanity/api";
import { Product } from "utils/sanity/types";

interface ProductsPageProps {
  products: Product[];
}

const DonatePage: NextPage<ProductsPageProps> = ({ products }) => {
  return (
    <>
      <CartPage />
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
