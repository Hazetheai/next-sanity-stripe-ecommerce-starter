import { SongSection } from "components/sections";
import Error from "next/error";
import { useRouter } from "next/router";
import { getSongsPage } from "utils/sanity/api";
import { Q_FILM_INDEX_PAGE, Q_SONG_INDEX_PAGE } from "utils/sanity/queries";
import { usePreviewSubscription } from "../../utils/sanity";

function SongsListContainer({ pageData, preview }) {
  const router = useRouter();
  if (!router.isFallback && !pageData) {
    return <Error statusCode={404} />;
  }
  const { data: songsPage } = usePreviewSubscription(Q_SONG_INDEX_PAGE, {
    params: { type: "song" },
    initialData: pageData,
    enabled: preview || router.query.preview !== null,
  });

  return (
    <section className="text-gray-400  body-font">
      <div className=" px-5 py-24 mx-auto">
        <SongSection key={"Songs section"} {...songsPage} />
      </div>
    </section>
  );
}

export async function getStaticProps({ params = {}, preview = false }) {
  const pageData = await getSongsPage();

  return {
    props: {
      preview,
      pageData,
    },
  };
}

export default SongsListContainer;
