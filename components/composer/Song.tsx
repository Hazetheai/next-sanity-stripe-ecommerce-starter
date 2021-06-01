import MyImage from "components/elements/Image";
import { handleCurrencySymbol } from "utils/handleCurrencySymbol";
import Button from "components/elements/Button";
import Link from "components/elements/Link";
import NextLink from "next/link";
import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import { PortableText } from "utils/sanity";
import { AlbumProduct } from "utils/sanity/manualTypes";
import { nextSanityImage } from "utils/sanity/nextSanityImage";
import {
  Album,
  Album as AlbumProperties,
  Product,
  ProductVariant,
  Song as SongType,
} from "utils/sanity/types";
import { slugify } from "utils/stringUtils";
import { sanityProductToStripe } from "utils/stripe-helpers";
import { BRAND_NAME } from "config/general";
import Video from "components/elements/Video";

export function handleSongCredits(
  mainWriter: string,
  coWriters: string[] | undefined
) {
  return [
    `Written by ${mainWriter} ${
      coWriters ? " | Co-writers: " + coWriters.join(", ") : ""
    }`,
  ];
}

interface SongProps extends SongType {
  albums: Album[];
}

const Song: React.FC<SongProps> = ({
  lyrics,
  backStory,
  coveringArtists,
  featuredVideo,
  isSingle,
  tradArr,
  mainImage,
  coWriters,
  slug,
  title,
  genres,
  recognition,
  albums,
  // tags,
}) => {
  const credits = handleSongCredits(BRAND_NAME, coWriters);

  const { addItem } = useShoppingCart();
  return (
    <div className="bg-black text-gray-300 min-h-screen p-10 ">
      {/* header */}
      <div className="container px-5 sm:px-6 lg:px-8  max-w-7xl py-5 mx-auto flex flex-wrap lg:flex-nowrap">
        {mainImage?.asset && (
          <MyImage
            containerClassName="mr-6"
            nextImageProps={{
              ...nextSanityImage(mainImage),
              width: 200,
              height: 200,
            }}
          />
        )}
        <div className="flex flex-col justify-center items-start w-full lg:w-2/4">
          {/* content */}

          <h1 className="mt-0 mb-2 text-white text-4xl">{title}</h1>

          {credits.map((credit) => (
            <h3 key={credit} className="text-gray-600 mb-2 text-sm">
              {credit}
            </h3>
          ))}
          {albums?.length
            ? albums.map((album) => (
                <Link
                  hrefProp={`albums/${album.slug.current}`}
                  text="View Album"
                  key={album._id}
                  btnStyle="primary"
                  className="text-white mb-4"
                />
              ))
            : null}
          {featuredVideo?.[0]?.url && (
            <div className="mb-4 w-full">
              <Video url={featuredVideo?.[0]?.url} />
            </div>
          )}
          {backStory && (
            <div className="mt-10 w-5/6">
              <h3>Back Story</h3>
              <PortableText
                blocks={backStory}
                className="PortableText-container"
              />
            </div>
          )}
        </div>
        <div className="lg:ml-auto w-full lg:w-2/5">
          {/* song list header */}
          <div className="flex text-gray-600">
            <div className="p-2 pl-0 w-full sm:w-1/2 sm:flex-shrink-0 sm:block">
              Covering Artists
            </div>

            <div className="p-2 w-full hidden sm:block">Album</div>

            <div className="p-2 w-12 flex-shrink-0 text-right"></div>
          </div>
          {coveringArtists?.map((artist) => (
            <div
              key={artist._key}
              className="flex border-b border-gray-800 hover:bg-gray-800"
            >
              <div className="p-3 pl-0 w-1/2 flex-shrink-0">{artist.name}</div>
              <div className="p-3 w-full  hidden sm:block">{artist.album}</div>
              {/* <div className="p-3 w-full">
              {artist.song ? (
                <Link hrefProp={artist.song["link"]} text="More" />
              ) : (
                " "
              )}
            </div> */}
              <div className="p-3 pr-0 text-right">
                {artist.thumbnail?.asset && (
                  <MyImage
                    nextImageProps={{
                      ...nextSanityImage(artist.thumbnail),
                      width: 300,
                      height: 220,
                    }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* song list   */}

      <div
        id="lyrics"
        className="container px-5 sm:px-6 lg:px-8  max-w-7xl py-5 mx-auto flex flex-wrap lg:flex-nowrap"
      >
        <div className="mt-10">
          <h3>Lyrics</h3>
          <PortableText blocks={lyrics} className="PortableText-container" />
        </div>
      </div>
    </div>
  );
};

export default Song;
