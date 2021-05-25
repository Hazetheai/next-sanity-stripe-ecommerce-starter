import ProductList from "components/commerce/ProductList";
import React from "react";
import { ProductSection as ProductSectionProps } from "utils/sanity/types";

const ProductSection: React.FC<ProductSectionProps> = ({
  // productCategories,
  products,
  title,
  tagline,
}) => {
  return (
    <section className="text-gray-400  body-font">
      <div className="container px-5 py-24 mx-auto">
        {/* @ts-expect-error */}
        {products && <ProductList products={products} />}
      </div>
    </section>
  );
};

export default ProductSection;
