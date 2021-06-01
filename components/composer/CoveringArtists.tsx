import Heading from "components/elements/Heading";
import MyImage from "components/elements/Image";
import Link from "components/elements/Link";
import { BRAND_NAME } from "config/general";
import React from "react";
import { PortableText } from "utils/sanity";
import { CoveringArtistSection } from "utils/sanity/manualTypes";
import { nextSanityImage } from "utils/sanity/nextSanityImage";

function removeDuplicatesBy(keyFn, array) {
  var mySet = new Set();
  return array.filter(function (x) {
    var key = keyFn(x),
      isNew = !mySet.has(key);
    if (isNew) mySet.add(key);
    return isNew;
  });
}

const CoveringArtists: React.FC<CoveringArtistSection> = ({
  songs,
  content,
}) => {
  const allArtists = songs?.reduce(
    (allSongs, currSong) =>
      currSong?.coveringArtists
        ? allSongs.concat(
            currSong?.coveringArtists?.map((el) => ({
              ...el,
              title: currSong.title,
              slug: currSong?.["slug"]?.current,
            }))
          )
        : allSongs.concat([] as any[]),
    [] as any[]
  );

  const uniqueArtists = removeDuplicatesBy((x) => x.name, allArtists).filter(
    (artist) => !artist.name.includes(BRAND_NAME)
  );

  return (
    <div className="w-full container px-5 py-5 mx-auto max-w-7xl">
      <Heading level="h2">Covering Artists</Heading>
      <div className="w-2/3 mr-auto pb-4">
        <PortableText blocks={content} className="PortableText-container" />
      </div>
      {/* song list header */}
      <div className="flex text-gray-600">
        <div className="p-2 pl-0 w-full sm:w-1/2 md:w-1/3  sm:block sm:flex-shrink-0 lg:w-1/4">
          Covering Artists
        </div>

        <div className="p-2 w-full sm:w-1/2 md:w-1/3 md:flex-shrink-0 hidden md:block lg:w-1/4">
          Album
        </div>

        <div className="p-2 w-full sm:w-1/2 md:w-1/3 hidden lg:block lg:flex-shrink-0 lg:w-1/4">
          Song
        </div>

        {/* <div className="p-2 w-14 "></div> */}
      </div>
      {uniqueArtists?.map((artist) => (
        <div
          key={artist._key}
          className="flex border-b border-gray-800 hover:bg-gray-800"
        >
          <div className="p-2 pl-0 w-full sm:w-1/2 md:w-1/3  sm:block h-16 sm:flex-shrink-0 lg:w-1/4">
            {artist.name}
          </div>
          <div className="p-2 w-full sm:w-1/2 md:w-1/3 hidden md:block md:flex-shrink-0 lg:w-1/4">
            {artist.album}
          </div>
          <div className="p-2 w-full sm:w-1/2 md:w-1/3 hidden lg:block lg:flex-shrink-0 lg:w-1/4">
            {artist.slug ? (
              <Link
                hrefProp={`songs/${artist.slug}`}
                text={artist.title}
                btnStyle="clear"
                noPaddingY
                noPaddingX
                className="px-0 text-white "
              />
            ) : (
              artist.title
            )}
          </div>
          <div className="p-3 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"></div>
          <div className="p-3 pr-0 text-right">
            {artist.thumbnail?.asset && (
              <MyImage
                containerClassName="w-12 h-12"
                nextImageProps={{
                  ...nextSanityImage(artist.thumbnail),
                  width: undefined,
                  height: undefined,
                  layout: "fill",
                  objectFit: "cover",
                }}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoveringArtists;
