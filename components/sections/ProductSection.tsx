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
    <div>
      {/* @ts-expect-error */}
      {products && <ProductList products={products} />}
    </div>
  );
};

export default ProductSection;
