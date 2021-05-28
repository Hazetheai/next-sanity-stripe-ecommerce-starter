import { FilmSectionItem } from "components/sections/FilmSection/FilmSectionItem";
import Error from "next/error";
import { useRouter } from "next/router";
import { getFilmsPage } from "utils/sanity/api";
import { Q_FILM_INDEX_PAGE } from "utils/sanity/queries";
import { usePreviewSubscription } from "../../utils/sanity";

function FilmsListContainer({ pageData, preview }) {
  const router = useRouter();
  if (!router.isFallback && !pageData) {
    return <Error statusCode={404} />;
  }
  const { data: filmsPage } = usePreviewSubscription(Q_FILM_INDEX_PAGE, {
    params: { type: "film" },
    initialData: pageData,
    enabled: preview || router.query.preview !== null,
  });

  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-5 mx-auto max-w-7xl">
        {filmsPage.featuredFilm && (
          <FilmSectionItem
            filmProduct={filmsPage.featuredFilm}
            isFeatured
            idx={1}
          />
        )}
        {filmsPage?.films?.map((film, idx) => (
          <FilmSectionItem key={film.title} filmProduct={film} idx={idx} />
        ))}
      </div>
    </section>
  );
}

export async function getStaticProps({ params = {}, preview = false }) {
  const pageData = await getFilmsPage();

  return {
    props: {
      preview,
      pageData,
    },
  };
}

export default FilmsListContainer;
