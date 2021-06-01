import Button from "components/elements/Button";
import Link from "components/elements/Link";
import React from "react";
import { Song } from "utils/sanity/types";
import NextLink from "next/link";
interface SongListProps {
  songs: Array<Song>;
}

const SongList: React.FC<SongListProps> = ({ songs }) => {
  return (
    <div className=" container px-5 py-5 mx-auto max-w-7xl">
      <div className="py-5 mx-auto">
        <>
          <div className="flex flex-wrap -m-2 justify-between">
            {songs?.map((song) => (
              <div
                key={song._id}
                className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/5 flex-shrink-0"
              >
                <NextLink href={`songs/${song.slug.current}#lyrics`}>
                  <div className="h-full flex flex-col items-start border-gray-800 border p-4 -lg">
                    <div className="flex-grow pb-2">
                      <h2 className="text-white title-font text-xl font-medium">
                        {song.title}
                      </h2>
                    </div>
                    <div className="flex">
                      {/* <Button func={() => console.log("Play")} text="Listen" /> */}
                      <Link
                        hrefProp={`songs/${song.slug.current}#lyrics`}
                        text="Lyrics"
                        noPaddingX
                      />
                    </div>
                  </div>
                </NextLink>
              </div>
            ))}
          </div>
        </>
      </div>
    </div>
  );
};

export default SongList;
