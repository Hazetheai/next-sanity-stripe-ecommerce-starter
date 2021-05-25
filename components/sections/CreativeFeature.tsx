import React from "react";
import { CreativeConfig } from "utils/sanity/types";
import { AlbumSection } from ".";
import { FilmSectionItem } from "./FilmSection/FilmSectionItem";
import SongSection from "./SongSection";

interface CreativeFeatureProps {
  feature: CreativeConfig;
  _key: string;
  _type: "creativeFeature";
  featureType: "featuredAlbum" | "featuredSong" | "featuredFilm";
}

const CreativeFeature: React.FC<CreativeFeatureProps> = ({
  _type,
  featureType,
  feature: { featuredAlbum, featuredFilm, featuredSong } = {},
}) => {
  switch (featureType) {
    case "featuredAlbum":
      // @ts-expect-error Type Queries
      return <AlbumSection albumProduct={featuredAlbum} isFeatured idx={0} />;
    case "featuredFilm":
      // @ts-expect-error Type Queries
      return <FilmSectionItem filmProduct={featuredFilm} isFeatured idx={0} />;
    case "featuredSong":
      // @ts-expect-error Type Queries
      return <SongSection featuredSong={featuredSong} idx={0} />;

    default:
      return <div>No Featured Item available</div>;
  }
};

export default CreativeFeature;
