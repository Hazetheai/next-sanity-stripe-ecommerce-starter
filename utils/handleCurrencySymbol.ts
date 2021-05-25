import { ProductVariant } from "utils/sanity/types";

export function handleCurrencySymbol(str: ProductVariant["currency"]) {
  switch (str) {
    case "eur":
      return "€";

    case "usd":
      return "$";

    default:
      return "€";
  }
}
