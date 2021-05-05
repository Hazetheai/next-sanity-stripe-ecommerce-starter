import { NextPage } from "next";
import { useRouter } from "next/router";

import PrintObject from "../components/commerce/PrintObject";
import Cart from "../components/commerce/CartState";
import ClearCart from "../components/commerce/ClearCart";

import { fetchGetJSON } from "../utils/api-helpers";
import useSWR from "swr";
import ThankYouHero from "components/commerce/ThankYouHero";

const ResultPage: NextPage = () => {
  const router = useRouter();

  // Fetch CheckoutSession from static page via
  // https://nextjs.org/docs/basic-features/data-fetching#static-generation
  const { data, error } = useSWR(
    router.query.session_id
      ? `/api/checkout_sessions/${router.query.session_id}`
      : null,
    fetchGetJSON
  );

  if (error) return <div>failed to load</div>;

  return (
    <>
      <ThankYouHero data={data} />

      {/* <PrintObject content={data ?? "loading..."} /> */}
    </>
  );
};

export default ResultPage;
