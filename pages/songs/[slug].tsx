import Error from "next/error";
import { useRouter } from "next/router";
import { getSong, getSourceMediaWithProduct } from "utils/sanity/api";
import { Q_SOURCE_MEDIA_WITH_PRODUCT } from "utils/sanity/queries";
import Song from "../../components/composer/Song";
import { getClient, usePreviewSubscription } from "../../utils/sanity";

function SongContainer({ songData, preview }) {
  const router = useRouter();
  if (!router.isFallback && !songData?.slug) {
    return <Error statusCode={404} />;
  }

  const { data: product = {} } = usePreviewSubscription(
    Q_SOURCE_MEDIA_WITH_PRODUCT,
    {
      params: { slug: songData?.slug?.current },
      initialData: songData,
      enabled: preview || router.query.preview !== null,
    }
  );

  return <Song {...songData} />;
}

export async function getStaticProps({ params, preview = false }) {
  const songData = await getSong(params.slug);

  return {
    props: { preview, songData },
  };
}

export async function getStaticPaths() {
  const paths = await getClient().fetch(
    `*[_type == "song" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export default SongContainer;
