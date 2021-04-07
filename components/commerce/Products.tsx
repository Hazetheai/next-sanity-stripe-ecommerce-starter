import products from "../../data/products.json";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";

const Products = () => {
  const { addItem, removeItem } = useShoppingCart();

  return (
    <section className="products">
      {products.map((product) => (
        <div key={product.sku} className="product">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p className="price">
            {formatCurrencyString({
              value: product.price,
              currency: product.currency,
            })}
          </p>
          <pre>{JSON.stringify(product, null, 2)}</pre>
          <button
            className="cart-style-background"
            onClick={() => addItem(product, 1)}
          >
            Add to cart
          </button>
          <button
            className="cart-style-background"
            // onClick={() => removeItem(product.sku)}
          >
            Remove
          </button>
        </div>
      ))}
    </section>
  );
};

export default Products;
