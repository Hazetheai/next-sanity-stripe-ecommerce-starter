import Album from "components/composer/Album";
import AlbumSection from "components/sections/AlbumSection";
import { useRouter } from "next/router";
import { FC, Fragment } from "react";
import { AlbumProduct } from "utils/sanity/manualTypes";
import { getAllSourceMediasWithProduct } from "utils/sanity/api";
import { Page } from "utils/sanity/types";
import LandingPage from "../components/common/LandingPage";
import Error from "next/error";
import { usePreviewSubscription } from "utils/sanity";

const query = `//groq
  *[_type == "album" && defined(slug.current)]
`;

interface AlbumsPage {
  // albums: AlbumProperties[];
  preview: boolean;
  pageData: Page;
  albumProductsData: AlbumProduct[];
}

const IndexPage: FC<AlbumsPage> = ({
  // albums,
  preview,
  pageData,
  albumProductsData,
}) => {
  const router = useRouter();

  if (!router.isFallback && !albumProductsData) {
    return <Error statusCode={404} />;
  }
  const { data: products } = usePreviewSubscription(query, {
    initialData: albumProductsData,
    enabled: preview || router.query.preview !== null,
  });

  return (
    <>
      {pageData && <LandingPage page={pageData} />}
      {albumProductsData
        ? albumProductsData.map((album) => (
            <Fragment key={album._id}>
              <AlbumSection idx={1} isFeatured albumProduct={album} />
              <AlbumSection idx={2} albumProduct={album} />
              <Album albumProduct={album} />
            </Fragment>
          ))
        : null}
      <div className="my-8">
        {/* <div className="mt-4">
          <ProductList products={products} />
        </div> */}
      </div>
    </>
  );
};

export async function getStaticProps({ params = {}, preview = false }) {
  const albums = await getAllSourceMediasWithProduct("album");
  // const { page: pageData } = await getClient(preview).fetch(Q_ROUTE_BY_SLUG, {
  //   slug: "test",
  // });
  // console.log(`SKETCH albums`, albums);
  const albumProductsData = albums?.filter((el) => el._type === "album");

  return {
    props: {
      preview,
      albums: albums || null,
      albumProductsData: albumProductsData || null,
      //   pageData,
    },
  };
}

export default IndexPage;
