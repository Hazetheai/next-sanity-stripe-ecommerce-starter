import FeaturedSong from "components/composer/FeaturedSong";
import SongList from "components/composer/SongList";
import React from "react";
import { Song } from "utils/sanity/types";

const SongSection: React.FC<{
  songs?: Array<Song>;
  featuredSong: Song;
}> = ({ songs, featuredSong }) => {
  if (!featuredSong) return null;
  return (
    <section className="container px-5 py-5 mx-auto">
      <FeaturedSong {...featuredSong} />
      {songs && <SongList songs={songs} />}
    </section>
  );
};

export default SongSection;
