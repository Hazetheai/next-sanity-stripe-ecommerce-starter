import Heading from "components/elements/Heading";
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
    <section className="text-gray-300 border-b border-gray-800">
      <div className="container px-5 sm:px-6 lg:px-8  max-w-7xl text-4xl font-bold mx-auto px-10 ">
        <Heading level="h2">
          {status === "completed"
            ? "Completed Films"
            : "In " + (status || "...")}
        </Heading>
      </div>

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
