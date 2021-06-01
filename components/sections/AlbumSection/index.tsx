import { BaseForm } from "components/common/BaseForm";
import MyImage from "components/elements/Image";
import Button from "components/elements/Button";
import Link from "components/elements/Link";
import dayjs from "dayjs";
import NextLink from "next/link";
import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import { removeObjectProperty } from "utils/objectFunctions";
import { PortableText } from "utils/sanity";
import { AlbumProduct } from "utils/sanity/manualTypes";
import { nextSanityImage } from "utils/sanity/nextSanityImage";
import { sanityProductToStripe } from "utils/stripe-helpers";
import { handleCurrencySymbol } from "utils/handleCurrencySymbol";
import Testimonial from "components/elements/Testimonial";
import albumToPlaylist from "components/music-player/lib/sanityAlbumtoPlayer";
import { Types } from "components/music-player/music-reducers";
import { Album as AlbumType, Track } from "utils/sanity/types";
import isEqual from "lodash/isEqual";
import { useMusicPlayer } from "components/music-player/music-context";
import { isTrackPlaying } from "components/music-player/lib/isTrackPlaying";
import { MdPause, MdPlayCircleOutline } from "react-icons/md";

interface AlbumItemProps {
  albumProduct: AlbumProduct;
  isFeatured?: boolean;
  idx?: number;
}

const AlbumItem: React.FC<AlbumItemProps> = ({
  albumProduct,
  isFeatured,
  idx,
}) => {
  if (!albumProduct) return null;

  const { product } = albumProduct;
  const { addItem } = useShoppingCart();
  const { state, dispatch } = useMusicPlayer();

  const album = removeObjectProperty(albumProduct, "product");

  function handleMusicPlayer(track: Track, album: AlbumType) {
    if (!track || !album) return;
    const playList = albumToPlaylist(album);
    const trackIdx = playList.findIndex(
      (trc) => trc.musicSrc === track["previewUrl"]
    );
    const newalbum = isEqual(
      { info: album, trackList: albumToPlaylist(album) },
      state.album
    )
      ? state.album
      : { info: album, trackList: albumToPlaylist(album) };

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

  const releaseMonth = dayjs(album.releaseDate).format("M");
  const releaseDate =
    parseInt(releaseMonth, 10) < 5
      ? `Spring ${dayjs(album.releaseDate).format("YYYY")}`
      : parseInt(releaseMonth, 10) < 8
      ? `Summer ${dayjs(album.releaseDate).format("YYYY")}`
      : parseInt(releaseMonth, 10) < 11
      ? `Autumn ${dayjs(album.releaseDate).format("YYYY")}`
      : `Winter ${dayjs(album.releaseDate).format("YYYY")}`;
  const isReleased = dayjs(album.releaseDate).isBefore(dayjs());

  return (
    <section className="text-gray-300 min-h-screen border-b border-gray-800">
      <div className=" py-10 container max-w-7xl px-5 mx-auto">
        <h1 className="mt-0 mb-2 text-white text-5xl text-center">
          {album.title}
        </h1>
        {/* header */}
        <div
          className={`flex flex-col justify-center items-center ${
            Number(idx) % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          <div
            className={`${
              Number(idx) % 2 === 0 ? "ml-0 lg:ml-8" : "mr-0 lg:mr-8"
            }`}
          >
            <div className="flex justify-center lg:justify-start">
              {album.mainImage && (
                <MyImage
                  link={`/albums/${album.slug.current}`}
                  containerClassName="lg:mr-6"
                  nextImageProps={{
                    ...nextSanityImage(album.mainImage),
                    width: 600,
                    height: 600,
                  }}
                />
              )}
              <div className="flex flex-col justify-center"></div>
            </div>

            <div className="mt-6 flex justify-center lg:justify-between">
              {isFeatured ? (
                <div className="text-gray-300 text-sm tracking-widest text-center lg:text-left">
                  {album?.body?.en && (
                    <PortableText
                      className="PortableText-container"
                      blocks={album?.body?.en}
                    />
                  )}
                </div>
              ) : null}
            </div>
          </div>

          {/* song list   */}
          {isFeatured && isReleased ? (
            // Featured Album
            <div className="">
              {album.status === "completed" &&
                album.recognition?.map((recog, idx) =>
                  idx === 0 ? <Testimonial key={recog._key} {...recog} /> : null
                )}
              {album.trackList.map((track) => (
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
                      func={() => handleMusicPlayer(track, album)}
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

                  <div className="p-3 w-full">
                    {track.song ? (
                      <NextLink href={track.song["link"] || ""} passHref>
                        <a className="underline" href="#0">
                          {track.title}
                        </a>
                      </NextLink>
                    ) : (
                      track.title
                    )}
                  </div>

                  <div className="p-3  flex-shrink-0 text-right">
                    {track.trackLengthMinutes}:
                    {`${track.trackLengthSeconds}`.padStart(2, "0")}
                  </div>
                </div>
              ))}
              {product && (
                <div className="flex flex-col sm:flex-row  lg:justify-between pt-12">
                  <Button
                    text={`Buy ${
                      product.defaultProductVariant.title
                    } ${handleCurrencySymbol(
                      product.defaultProductVariant.currency
                    )}${product.defaultProductVariant.price} `}
                    btnStyle="primary"
                    className="mr-2 lg:mr0"
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
                      func={() =>
                        addItem(sanityProductToStripe(product, variant))
                      }
                      className="mr-2 mt-2 sm:mt-0"
                    />
                  ))}
                  <Link
                    btnStyle="secondary"
                    hrefProp={`albums/${album.slug.current}`}
                    text="View"
                    className="mt-2"
                  />
                </div>
              )}
            </div>
          ) : (
            // Non Featured Album
            <div className="flex flex-col max-w-lg">
              {album.status === "completed" &&
                album.recognition?.map((recog, idx) =>
                  idx === 0 ? <Testimonial {...recog} /> : null
                )}
              <h4 className="text-center lg:text-left">
                {isReleased ? "Available now" : "Catch The Release!"}
              </h4>
              <p className="text-gray-300 text-sm tracking-widest text-center lg:text-left">
                {album.blurb}
              </p>
              {isReleased && product ? (
                <div className="flex flex-wrap justify-between mt-2">
                  <Button
                    text={`Buy ${
                      product.defaultProductVariant.title
                    } ${handleCurrencySymbol(
                      product.defaultProductVariant.currency
                    )}${product.defaultProductVariant.price} `}
                    btnStyle="primary"
                    className="mr-2 mt-2 lg:mr-0"
                    func={() =>
                      addItem(
                        sanityProductToStripe(
                          product,
                          product.defaultProductVariant
                        )
                      )
                    }
                  />
                  <Link
                    btnStyle="secondary"
                    hrefProp={`albums/${album.slug.current}`}
                    text="View"
                    className="mt-2"
                  />
                </div>
              ) : (
                <div>
                  <p className="text-center lg:text-left mt-2">
                    Arriving - {releaseDate}
                  </p>
                  <BaseForm
                    endpoint="newsletter"
                    className="mr-6 flex flex-wrap justify-center lg:justify-start"
                    fields={[
                      // { fieldType: "text", label: "Full Name", register: "fullName" },
                      {
                        fieldType: "text",
                        label: "Email",
                        register: "email",
                        inputType: "email",
                        inputClassName: "-none",
                      },
                    ]}
                    submitClassName="justify-end"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AlbumItem;
