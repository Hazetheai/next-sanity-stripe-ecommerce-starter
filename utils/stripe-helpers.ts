import { Product } from "use-shopping-cart";
import { urlFor } from "./sanity";
import { ProductVariant, Product as SanityProduct } from "./sanity/types";

export function formatAmountForDisplay(
  amount: number,
  currency: string
): string {
  let numberFormat = new Intl.NumberFormat(["en-IE"], {
    style: "currency",
    currency: currency,
    currencyDisplay: "symbol",
  });
  return numberFormat.format(amount);
}

export function formatAmountForStripe(
  amount: number,
  currency: string
): number {
  let numberFormat = new Intl.NumberFormat(["en-IE"], {
    style: "currency",
    currency: currency,
    currencyDisplay: "symbol",
  });
  const parts = numberFormat.formatToParts(amount);
  let zeroDecimalCurrency: boolean = true;
  for (let part of parts) {
    if (part.type === "decimal") {
      zeroDecimalCurrency = false;
    }
  }
  return zeroDecimalCurrency ? amount : Math.round(amount * 100);
}

export function sanityProductToStripe(
  product: SanityProduct,
  productVariant: ProductVariant
): Product {
  const hasImages = productVariant?.images
    ? urlFor(productVariant?.images?.[0]).url()
    : product.defaultProductVariant?.images
    ? urlFor(product.defaultProductVariant?.images[0]).url()
    : urlFor(product.mainImage).url();
  const stripeProduct = {
    ...productVariant,
    name: `${product.title} - ${productVariant.title}`,
    image: hasImages ?? "",
    price: productVariant.price * 100,
  };

  return stripeProduct;
}
