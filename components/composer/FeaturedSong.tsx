import MyImage from "components/elements/Image";
import Button from "components/elements/Button";
import Link from "components/elements/Link";
import React from "react";
import { nextSanityImage } from "utils/sanity/nextSanityImage";
import { Song } from "utils/sanity/types";
import Testimonial from "components/elements/Testimonial";

const FeaturedSong: React.FC<Song> = ({
  lyrics,
  backStory,
  coveringArtists,
  isSingle,
  tradArr,
  mainImage,
  coWriters,
  slug,
  title,
  genres,
  recognition,
  // tags,
}) => {
  return (
    <div className="container px-5 py-5 mx-auto">
      <div className="container flex flex-wrap md:flex-nowrap justify-between  py-5 mx-auto">
        <div className="flex flex-col items-start mb-12 mr-12">
          <h1 className="text-5xl font-medium title-font mb-4 text-white">
            {title}
          </h1>

          <div className="flex">
            <Button func={() => console.log("Play")} text="Listen" />
            <Link hrefProp={`songs/${slug.current}`} text="Lyrics" />
          </div>
          {recognition?.length && (
            <div className="flex flex-wrap">
              {recognition.map((recog) => (
                <Testimonial
                  key={recog._key}
                  _type={recog._type}
                  name={recog.name}
                  organization={recog.organization}
                  quote={recog.quote}
                  thumbnail={recog.thumbnail}
                />
              ))}
            </div>
          )}
        </div>
        <div className="p-4 pt-0 pr-0 w-full lg:w-auto">
          <h3 className="p-4 pl-0">Covering Artists</h3>
          <div className="flex flex-wrap -m-4 justify-between">
            {coveringArtists?.map((artist, idx) =>
              idx > 3 ? null : (
                <div
                  key={artist._key}
                  className="py-4 pl-0 pr-8 mx-auto  lg:w-1/4 md:w-36"
                >
                  <div className="h-full flex flex-col  ">
                    {artist.thumbnail && (
                      <MyImage
                        containerClassName="flex-shrink-0 -lg object-cover object-center mb-4"
                        nextImageProps={{
                          ...nextSanityImage(artist.thumbnail),
                          width: 140,
                          height: 140,
                        }}
                      />
                    )}
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-white">
                        {artist.name}
                      </h2>
                      <h3 className="text-gray-500 mb-3 text-sm">
                        {artist.album}
                      </h3>
                      <span className="inline-flex">
                        <a className="text-gray-700">
                          <svg
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                          </svg>
                        </a>
                        <a className="ml-2 text-gray-700">
                          <svg
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                          </svg>
                        </a>
                        <a className="ml-2 text-gray-700">
                          <svg
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                          </svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSong;
