import Error from "next/error";
import { groq } from "next-sanity";
import { useRouter } from "next/router";
import Album from "../../components/composer/Album";
import { getClient, usePreviewSubscription } from "../../utils/sanity";
import { getSourceMediaWithProduct } from "utils/sanity/api";
import { Q_SOURCE_MEDIA_WITH_PRODUCT } from "utils/sanity/queries";

const query = groq`*[_type == "product" && slug.current == $slug][0]`;

function AlbumContainer({ albumData, preview }) {
  const router = useRouter();
  if (!router.isFallback && !albumData?.slug) {
    return <Error statusCode={404} />;
  }

  const { data: product = {} } = usePreviewSubscription(
    Q_SOURCE_MEDIA_WITH_PRODUCT,
    {
      params: { slug: albumData?.slug?.current },
      initialData: albumData,
      enabled: preview || router.query.preview !== null,
    }
  );

  return <Album {...albumData} />;
}

export async function getStaticProps({ params, preview = false }) {
  const albumData = await getSourceMediaWithProduct(params.slug, "album");

  return {
    props: { preview, albumData },
  };
}

export async function getStaticPaths() {
  const paths = await getClient().fetch(
    `*[_type == "album" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export default AlbumContainer;
