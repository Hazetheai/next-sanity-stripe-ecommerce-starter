import React from "react";
import { Product } from "utils/sanity/types";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((product) => (
            <ProductCard product={product} key={product.slug.current} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
