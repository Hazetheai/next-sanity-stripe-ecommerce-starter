import { useShoppingCart } from "use-shopping-cart";
import React, { Fragment, useEffect } from "react";
import Stripe from "stripe";
import OrderedItem from "./OrderedItem";
import { formatSocialLinks, socialLinks, Socials } from "config/general";
import Link from "components/elements/Link";
import { capitalize } from "utils/stringFunctions";
import { Social } from "utils/sanity/types";
import MyImage from "components/elements/Image";
import { nextSanityImage } from "utils/sanity/nextSanityImage";
import { BaseForm } from "components/common/BaseForm";

interface ThankYouPage {
  data: Stripe.Checkout.Session;
}
interface DisplayItemsProps {
  displayItems: Stripe.Checkout.Session["display_items"];
}

const DisplayItems: React.FC<DisplayItemsProps> = ({ displayItems }) => {
  return (
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      {displayItems?.length === 1 ? (
        <div>
          <div className=" flex items-center justify-between mb-2">
            <h3 className="text-lg text-white-600">
              {displayItems[0]?.custom?.name}
            </h3>
            {displayItems[0].amount && (
              <span className="text-white-600">
                €{displayItems[0].amount / 100}
              </span>
            )}
          </div>

          {displayItems[0].custom && (
            <MyImage
              nextImageProps={{
                src: displayItems[0].custom?.images
                  ? displayItems[0].custom?.images[0]
                  : "",
                alt: displayItems[0].custom?.name || "Purchased Product",
                layout: "fill",
                width: undefined,
                height: undefined,
                objectFit: "cover",
              }}
              containerClassName=" w-full lg:h-screen h-64 "
            />
          )}
        </div>
      ) : (
        displayItems?.map((displayItem, idx) =>
          displayItem ? (
            <OrderedItem key={displayItem.custom?.name} item={displayItem} />
          ) : null
        )
      )}
    </div>
  );
};

export const ThankYouHero: React.FC<ThankYouPage> = ({ data }) => {
  const { clearCart } = useShoppingCart();

  useEffect(() => clearCart(), [clearCart]);
  const customerCharge = data?.payment_intent
    ? data?.payment_intent["charges"].data.find((el) => el)
    : null;

  const name = (customerCharge?.billing_details?.name as string) ?? "";

  const nameParts = name.split(" ");
  return (
    <section className="ABOUT text-gray-400  body-font">
      {/* <h1>Checkout Payment Result</h1>

      <h2>Status: {data?.payment_intent?.status ?? "loading..."}</h2>
      <h3>CheckoutSession response:</h3> */}
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        {data?.display_items ? (
          <DisplayItems displayItems={data?.display_items} />
        ) : null}
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Thank you for your purchase
            {name ? ` ${nameParts[0]}!` : "!"}
          </h1>

          <p className="mb-8 leading-relaxed">
            Your items will be on their way to you very soon. In the meantime,
            we'd love to have you join our newsletter to keep you up to date
            with all our latest happenings!
          </p>

          <BaseForm
            endpoint="newsletter"
            className="flex w-full md:justify-start justify-center items-end"
            submitClassName="ml-8"
            presetValues={{
              firstName: nameParts[0],
              lastName: nameParts.length > 1 ? nameParts[1] : "",
            }}
            fields={[
              {
                fieldType: "text",
                label: "Email",
                inputType: "email",
                register: "email",
              },
            ]}
          />

          <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
            We'll never sell your data, or send you spam.
          </p>
          <p className="mt-2 text-gray-400 w-full">Visit us on Social</p>
          <div className="flex lg:flex-row md:flex-col px-4 text-gray-900 items-center  bg-gray-200  border bg-opacity-40 border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            {Socials.map((social) => (
              <Fragment key={social.handle}>
                <Link
                  hrefProp={formatSocialLinks(
                    social.channel as Social["channel"]
                  )}
                  text={""}
                  title={capitalize(social.channel)}
                  icon={{ name: "none" }}
                  socialIcon={{
                    name: social.channel as Social["channel"],
                  }}
                  external
                  target="_blank"
                  className="transform transition duration-500 ease-in-out hover:-translate-y-1"
                />
                <br />
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankYouHero;
