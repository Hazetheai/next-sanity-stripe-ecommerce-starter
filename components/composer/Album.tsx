import Button from "components/elements/Button";
import MyImage from "components/elements/Image";
import { isTrackPlaying } from "components/music-player/lib/isTrackPlaying";
import albumToPlaylist from "components/music-player/lib/sanityAlbumtoPlayer";
import { useMusicPlayer } from "components/music-player/music-context";
import { Types } from "components/music-player/music-reducers";
import isEqual from "lodash/isEqual";
import NextLink from "next/link";
import React from "react";
import { MdPause, MdPlayCircleOutline } from "react-icons/md";
import { ReactJkMusicPlayerAudioListProps } from "react-jinke-music-player";
import { useShoppingCart } from "use-shopping-cart";
import { handleCurrencySymbol } from "utils/handleCurrencySymbol";
import { PortableText } from "utils/sanity";
import { AlbumProduct } from "utils/sanity/manualTypes";
import { nextSanityImage } from "utils/sanity/nextSanityImage";
import { Album as AlbumType, Track } from "utils/sanity/types";
import { slugify } from "utils/stringUtils";
import { sanityProductToStripe } from "utils/stripe-helpers";

export function handleCredits(
  mainWriter: string,
  mainProducer: string,
  coWriters: string[] | undefined,
  coProducers: string[] | undefined
) {
  if (
    mainWriter &&
    mainProducer &&
    slugify(mainWriter) === slugify(mainProducer)
  ) {
    return [`Written and produced by ${mainProducer}`];
  }

  return [
    `Written by ${mainWriter} ${
      coWriters ? " | Co-writers: " + coWriters.join(", ") : ""
    }`,
    `Produced by ${mainProducer} ${
      coProducers ? " | Co-producers: " + coProducers.join(", ") : ""
    }`,
  ];
}

const Album: React.FC<{ albumProduct: AlbumProduct }> = ({ albumProduct }) => {
  if (!albumProduct.slug) {
    console.log(`NO albumProduct in COMPONENT`, albumProduct);
    return <div>No Props</div>;
  }
  const {
    body,
    mainArtist,
    mainImage,
    mainWriter,
    mainProducer,
    trackList,
    coWriters,
    coProducers,
    slug,
    title,
    featuringArtists,
    genres,
    recognition,
    tags,
    product,
  } = albumProduct;
  const credits = handleCredits(
    mainWriter,
    mainProducer,
    coWriters,
    coProducers
  );
  const { addItem } = useShoppingCart();

  const { state, dispatch } = useMusicPlayer();

  function shufflePlaylist(
    track: Track,
    playList: ReactJkMusicPlayerAudioListProps[]
  ) {
    const currIdx = playList.findIndex(
      (tr) => tr.musicSrc === track["previewUrl"]
    );
    const middle = playList.slice(0, currIdx);
    const end = playList.slice(currIdx + 1);
    //  @ts-ignore tslib
    const newOrder = [playList[currIdx], ...middle, ...end];

    return newOrder;
  }

  function handleMusicPlayer(track: Track, album: AlbumType) {
    if (!track || !album) return;
    const isSameAlbum = isEqual(
      {
        info: album,
        trackList: albumToPlaylist({ mainArtist, mainImage, trackList }),
      },
      state.album
    );
    const playList =
      isSameAlbum || !state.album.trackList
        ? albumToPlaylist({ mainArtist, mainImage, trackList })
        : shufflePlaylist(
            track,
            albumToPlaylist({ mainArtist, mainImage, trackList })
          );
    const trackIdx = playList.findIndex(
      (trc) => trc.musicSrc === track["previewUrl"]
    );

    const newalbum = isSameAlbum
      ? state.album
      : { info: album, trackList: playList };

    dispatch({
      type: Types.Load,
      payload: {
        album: newalbum,
        track: {
          src: track["previewUrl"] || "",
          title: track.title,
          playIndex: trackIdx,
        },
      },
    });
  }

  return (
    <section className="bg-black text-gray-300 min-h-screen p-10">
      {/* header */}
      <div className="container px-5 sm:px-6 lg:px-8  max-w-7xl py-5 mx-auto">
        <div className="flex flex-wrap">
          {mainImage && (
            <MyImage
              containerClassName="mr-6"
              nextImageProps={{
                ...nextSanityImage(mainImage),
                width: 200,
                height: 200,
              }}
            />
          )}
          <div className="flex flex-col justify-center">
            {/* content */}
            <h1 className="mt-0 mb-2 text-white text-4xl">{title}</h1>
            <h2 className="mt-0 mb-2 text-white text-xl">{mainArtist}</h2>
            <p className="text-gray-600 mb-2 text-sm">
              {featuringArtists
                ? "Featuring: " + featuringArtists.join(", ")
                : ""}
            </p>
            {credits.map((credit) => (
              <p key={credit} className="text-gray-600 mb-2 text-sm">
                {credit}
              </p>
            ))}
          </div>
        </div>
        {/* action buttons */}
        <div className="mt-6 flex justify-between">
          {product && (
            <div className="flex flex-wrap">
              <Button
                text={`Buy ${
                  product.defaultProductVariant.title
                } ${handleCurrencySymbol(
                  product.defaultProductVariant.currency
                )}${product.defaultProductVariant.price} `}
                btnStyle="primary"
                className="mr-2 mb-2 sm:mb-0"
                func={() =>
                  addItem(
                    sanityProductToStripe(
                      product,
                      product.defaultProductVariant
                    )
                  )
                }
              />
              {product?.variants?.map((variant) => (
                <Button
                  key={variant.sku}
                  text={`Buy ${variant.title} ${handleCurrencySymbol(
                    variant.currency
                  )}${variant.price}`}
                  btnStyle="primary"
                  func={() => addItem(sanityProductToStripe(product, variant))}
                  className="mb-2 sm:mb-0"
                />
              ))}
            </div>
          )}
          {/* <div className="text-gray-600 text-sm tracking-widest text-right">
            <h5 className="mb-1">Followers</h5>
            <p>5,055</p>
          </div> */}
        </div>
        {/* song list   */}
        <div className="mt-10">
          {/* song list header */}
          <div className="flex text-gray-600">
            <div className="p-2 w-8 flex-shrink-0" />
            <div className="p-2 w-full sm:w-1/2 sm:flex-shrink-0 sm:block">
              Title
            </div>
            <div className="p-2 w-full hidden sm:block">Artist</div>
            <div className="p-2 w-12 flex-shrink-0 text-right">⏱</div>
          </div>
          {trackList.map((track) => (
            <div
              key={track._key}
              className="flex border-b border-gray-800 hover:bg-gray-800"
            >
              {track.previewFile ? (
                <Button
                  className="p-3 w-8 flex-shrink-0 items-center"
                  btnStyle="clear"
                  noPaddingY
                  noPaddingX
                  func={() => handleMusicPlayer(track, albumProduct)}
                >
                  {isTrackPlaying(track, state) ? (
                    <MdPause />
                  ) : (
                    <MdPlayCircleOutline />
                  )}
                </Button>
              ) : (
                <div className="p-3 w-8 flex-shrink-0 items-center" />
              )}
              <div className="p-3 w-1/2 flex-shrink-0">
                {track.song ? (
                  <NextLink
                    href={`/songs/${track?.song?.["slug"]?.current || ""}`}
                    passHref
                  >
                    <a className="underline" href="#0">
                      {track.title}
                    </a>
                  </NextLink>
                ) : (
                  track.title
                )}
              </div>
              <div className="p-3 w-full hidden sm:block">
                {track.tradArr
                  ? `Trad. Arr:, ${track.tradArr.join(", ")}`
                  : track.featuringArtists
                  ? ` Ft. ${track.featuringArtists.join(", ")}`
                  : mainArtist}
              </div>
              {/* <div className="p-3 w-full">
                {track.song ? (
                  <Link hrefProp={track.song["link"]} text="More" />
                ) : (
                  " "
                )}
              </div> */}
              <div className="p-3 w-full sm:w-12 sm:flex-shrink-0 text-right">
                {track.trackLengthMinutes}:
                {`${track.trackLengthSeconds}`.padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <PortableText blocks={body.en} className="PortableText-container" />
        </div>
      </div>
    </section>
  );
};

export default Album;
