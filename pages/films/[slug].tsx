import ReleasesForm from "components/common/ReleasesForm";
import LatestReleases from "components/filmmaker/LatestReleases";
import UpcomingReleases from "components/filmmaker/UpcomingReleases";
import VideoHeader from "components/filmmaker/VideoHeader";
import Error from "next/error";
import { useRouter } from "next/router";
import { FC } from "react";
import { FilmProduct } from "utils/sanity/manualTypes";
import { getFilmsByStatus, getSourceMediaWithProduct } from "utils/sanity/api";
import { Q_SOURCE_MEDIA_WITH_PRODUCT } from "utils/sanity/queries";
import { Film as FilmProps } from "utils/sanity/types";
import Film from "../../components/filmmaker/Film";
import { getClient, usePreviewSubscription } from "../../utils/sanity";

interface FilmPage {
  filmData: FilmProduct;
  latestReleases: FilmProps[];
  upcomingReleases: FilmProps[];
  preview: boolean;
}

const FilmContainer: FC<FilmPage> = ({
  filmData,
  latestReleases,
  upcomingReleases,
  preview,
}) => {
  const router = useRouter();
  if (!router.isFallback && !filmData?.slug) {
    return <Error statusCode={404} />;
  }

  const { data: product = {} } = usePreviewSubscription(
    Q_SOURCE_MEDIA_WITH_PRODUCT,
    {
      params: { slug: filmData?.slug?.current },
      initialData: filmData,
      enabled: preview || router.query.preview !== null,
    }
  );

  return (
    <>
      <VideoHeader {...filmData} />
      <section className="container max-w-7xl px-5 py-5 mx-auto">
        <Film {...filmData} />
        {/* <LatestReleases films={latestReleases} /> */}
        {upcomingReleases && <UpcomingReleases films={upcomingReleases} />}
        <ReleasesForm />
      </section>
    </>
  );
};

export async function getStaticProps({ params, preview = false }) {
  const filmData = await getSourceMediaWithProduct(params.slug, "film");
  const lr = await getFilmsByStatus("completed");
  const ur = await getFilmsByStatus("production");
  return {
    props: {
      preview,
      filmData,
      latestReleases: lr.filter((el) => el._id !== filmData._id),
      upcomingReleases: ur.filter((el) => el._id !== filmData._id),
    },
  };
}

export async function getStaticPaths() {
  const paths = await getClient().fetch(
    `*[_type == "film" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export default FilmContainer;
