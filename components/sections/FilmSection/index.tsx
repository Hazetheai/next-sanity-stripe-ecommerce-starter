import React from "react";
import { Carousel } from "react-responsive-carousel";
import { FilmProduct } from "utils/sanity/manualTypes";
import { FilmSectionItem } from "./FilmSectionItem";

interface FilmSectionProps {
  films: FilmProduct[];
  _key: string;
  _type: "filmSection";
  status: FilmProduct["status"];
  featuredFilm: { _ref: string };
}

const FilmSection: React.FC<FilmSectionProps> = ({
  films,
  featuredFilm,
  status,
  _key,
}) => {
  return (
    <section className="">
      <Carousel key={_key} className="" showThumbs={false}>
        {films
          .filter((film) => film._id !== featuredFilm._ref)
          .map((film) => (
            <FilmSectionItem key={film._id} filmProduct={film} />
          ))}
      </Carousel>
    </section>
  );
};

export default FilmSection;
