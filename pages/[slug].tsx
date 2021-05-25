import Error from "next/error";
import { groq } from "next-sanity";
import { useRouter } from "next/router";
import LandingPage from "../components/common/LandingPage";
import { getClient, usePreviewSubscription } from "../utils/sanity";
import { GetStaticProps } from "next";
import { Q_ROUTE_BY_SLUG } from "utils/sanity/queries";

function ProductPageContainer({ pageData, preview, slug }) {
  const router = useRouter();
  if (!router.isFallback && !pageData) {
    return <Error statusCode={404} />;
  }

  const { data: { page = {} } = {} } = usePreviewSubscription(Q_ROUTE_BY_SLUG, {
    params: { slug },
    initialData: pageData,
    enabled: preview || router.query.preview !== null,
  });

  // TODO -> Unsure if this works correctly
  return <LandingPage page={page.content ? page : pageData} />;
}

export const getStaticProps: GetStaticProps = async ({
  params = {},
  preview = false,
}) => {
  const { slug } = params;
  const { page: pageData } = await getClient(preview).fetch(Q_ROUTE_BY_SLUG, {
    slug,
  });

  // console.log(`pageData`, pageData);

  return {
    props: { preview, pageData, slug },
  };
};

export async function getStaticPaths() {
  const routes = await getClient()
    .fetch(`*[_type == "route" && defined(slug.current)]{
    "params": {"slug": slug.current}
  }`);

  return {
    paths: routes || null,
    fallback: true,
  };
}

export default ProductPageContainer;
