import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";
import { urlFor } from "utils/sanity";
import { Product } from "utils/sanity/types";
import { sanityProductToStripe } from "utils/stripe-helpers";

interface Props {
  products: Product[];
}

const Products: React.FC<Props> = ({ products }) => {
  const { addItem, removeItem } = useShoppingCart();

  return (
    <section className="products">
      {products.map((product) => (
        <div key={product.defaultProductVariant?.sku} className="product">
          <img
            src={urlFor(product.mainImage).url() || ""}
            alt={product.title}
          />
          <h2>{product.title}</h2>
          <p className="price">
            {formatCurrencyString({
              value: product.defaultProductVariant?.price,
              currency: product.defaultProductVariant.currency,
            })}
          </p>
          <button
            className="cart-style-background"
            onClick={() =>
              addItem(sanityProductToStripe(product.defaultProductVariant))
            }
          >
            Add to cart
          </button>
          <button
            className="cart-style-background"
            onClick={() => removeItem(product.defaultProductVariant.sku)}
          >
            Remove
          </button>
        </div>
      ))}
    </section>
  );
};

export default Products;
