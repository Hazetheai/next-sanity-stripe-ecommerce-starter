import React from "react";
import { Product } from "utils/sanity/types";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="flex flex-wrap -m-4">
      {products.map((product) => (
        <ProductCard product={product} key={product.slug.current} />
      ))}
    </div>
  );
};

export default ProductList;
