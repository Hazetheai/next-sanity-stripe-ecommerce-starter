import Error from "next/error";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../utils/sanity";
import ProductsPage from "../components/ProductsPage";
import LandingPage from "../components/LandingPage";

const query = `//groq
  *[_type == "product" && defined(slug.current)]
`;

const pageQuery = `//groq
*[_type == "route" && slug.current == "home"][0]{
  page->{
    ...,
    content[]{
      ...,
      ctas[]{
        ...,
        "route": route->slug
      }
    }
  }
}`;

function IndexPage(props) {
  const { productsData, preview, pageData } = props;
  const router = useRouter();
  console.log(`pageData`, pageData);
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
          <ProductsPage products={products} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ params = {}, preview = false }) {
  const productsData = await getClient(preview).fetch(query);

  const { page: pageData } = await getClient(preview).fetch(pageQuery);

  return {
    props: {
      preview,
      productsData,
      pageData,
    },
  };
}

export default IndexPage;
