import { NextApiRequest, NextApiResponse } from "next";

/*
 * Product data can be loaded from anywhere. In this case, we’re loading it from
 * a local JSON file, but this could also come from an async call to your
 * inventory management service, a database query, or some other API call.
 *
 * The important thing is that the product info is loaded from somewhere trusted
 * so you know the pricing information is accurate.
 */
import { validateCartItems } from "use-shopping-cart/src/serverUtil";
// import inventory from "../../../data/products.json";

import Stripe from "stripe";
import { getAllProducts } from "utils/sanity/api";
import { sanityProductToStripe } from "utils/stripe-helpers";
import { Product, ProductVariant } from "utils/sanity/types";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: "2020-03-02",
});

export function getAllVariants(product: Product) {
  const dfVar = product.defaultProductVariant;
  const variants = product.variants || [];

  return variants.concat({ ...dfVar, _key: dfVar.sku });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const inventory = await getAllProducts();

    const stripeInventory = inventory
      .reduce((acc, curr) => {
        return acc.concat(
          getAllVariants(curr).map((el) => {
            return {
              product: curr,
              variant: el,
            };
          })
        );
      }, [] as any[])
      .map((el) => sanityProductToStripe(el.product, el.variant));
    try {
      // Validate the cart details that were sent from the client.
      const { cartItems, metadata } = req.body;

      const line_items = validateCartItems(stripeInventory, cartItems);

      // Create Checkout Sessions from body params.
      const params: Stripe.Checkout.SessionCreateParams = {
        submit_type: "pay",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        metadata,
        shipping_address_collection: {
          allowed_countries: ["IE", "GB"],
        },
        line_items,
        success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/cart`,
      };
      const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.create(
        params
      );

      res.status(200).json(checkoutSession);
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
