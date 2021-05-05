import ProductList from "components/commerce/ProductList";
import Error from "next/error";
import { useRouter } from "next/router";
import { Q_ROUTE_BY_SLUG } from "utils/sanity/queries";
import LandingPage from "../components/common/LandingPage";
import { getClient, usePreviewSubscription } from "../utils/sanity";

const query = `//groq
  *[_type == "product" && defined(slug.current)]
`;

function IndexPage(props) {
  const { productsData, preview, pageData } = props;
  const router = useRouter();

  if (!router.isFallback && !productsData) {
    return <Error statusCode={404} />;
  }
  const { data: products } = usePreviewSubscription(query, {
    initialData: productsData,
    enabled: preview || router.query.preview !== null,
  });

  return (
    <>
      <LandingPage page={pageData} />
      <div className="my-8">
        <div className="mt-4">
          <ProductList products={products} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ params = {}, preview = false }) {
  const productsData = await getClient(preview).fetch(query);

  const { page: pageData } = await getClient(preview).fetch(Q_ROUTE_BY_SLUG, {
    slug: "home",
  });

  return {
    props: {
      preview,
      productsData,
      pageData,
    },
  };
}

export default IndexPage;
