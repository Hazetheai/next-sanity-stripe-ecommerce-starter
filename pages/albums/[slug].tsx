import { NextPage } from "next";
import { groq } from "next-sanity";
import Error from "next/error";
import { useRouter } from "next/router";
import { getSourceMediaWithProduct } from "utils/sanity/api";
import { AlbumProduct } from "utils/sanity/manualTypes";
import { Q_SOURCE_MEDIA_WITH_PRODUCT } from "utils/sanity/queries";
import Album from "../../components/composer/Album";
import { getClient, usePreviewSubscription } from "../../utils/sanity";

const query = groq`*[_type == "product" && slug.current == $slug][0]`;

interface AlbumPageProps {
  albumData: AlbumProduct;
  preview: boolean;
}

const AlbumPage: NextPage<AlbumPageProps> = ({ albumData, preview }) => {
  const router = useRouter();
  if (!router.isFallback && !albumData) {
    return <Error statusCode={404} />;
  }

  const { data: previewSubAlbum = {} as AlbumProduct } = usePreviewSubscription(
    Q_SOURCE_MEDIA_WITH_PRODUCT,
    {
      params: { slug: albumData?.slug?.current },
      initialData: albumData,
      enabled: preview || router.query.preview !== null,
    }
  );
  // console.log(`albumData in PAGE`, albumData);
  // console.log(`previewSubAlbum in PAGE`, previewSubAlbum);
  return previewSubAlbum ? (
    <Album albumProduct={previewSubAlbum} />
  ) : (
    <Album albumProduct={albumData} />
  );
};

export async function getStaticProps({ params, preview = false }) {
  const albumData = await getSourceMediaWithProduct(params.slug, "album");
  // console.log(`params`, params);
  // albumData ? console.log(`albumData in SERVER`, albumData) : null;
  return {
    props: { preview, albumData: albumData || null },
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

export default AlbumPage;
