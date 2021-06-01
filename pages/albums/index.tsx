import { AlbumSection } from "components/sections";
import Error from "next/error";
import { useRouter } from "next/router";
import { getAlbumsPage } from "utils/sanity/api";
import { Q_ALBUM_INDEX_PAGE } from "utils/sanity/queries";
import { usePreviewSubscription } from "../../utils/sanity";

function AlbumsListContainer({ pageData, preview }) {
  const router = useRouter();
  if (!router.isFallback && !pageData) {
    return <Error statusCode={404} />;
  }
  const { data: albumsPage } = usePreviewSubscription(Q_ALBUM_INDEX_PAGE, {
    params: { type: "album" },
    initialData: pageData,
    enabled: preview || router.query.preview !== null,
  });

  return (
    <section className="text-gray-400  body-font">
      <div className="container px-5 sm:px-6 lg:px-8  px-5 py-5 mx-auto max-w-7xl">
        {albumsPage.featuredAlbum && (
          <AlbumSection
            albumProduct={albumsPage.featuredAlbum}
            isFeatured
            idx={1}
          />
        )}
        {albumsPage?.albums?.map((album, idx) => (
          <AlbumSection key={album.title} albumProduct={album} idx={idx} />
        ))}
      </div>
    </section>
  );
}

export async function getStaticProps({ params = {}, preview = false }) {
  const pageData = await getAlbumsPage();

  return {
    props: {
      preview,
      pageData: pageData || null,
    },
  };
}

export default AlbumsListContainer;
