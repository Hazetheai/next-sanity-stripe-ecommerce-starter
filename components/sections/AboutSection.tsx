import MyImage from "components/elements/Image";
import React, { FC } from "react";
import { PortableText } from "utils/sanity";
import { nextSanityImage } from "utils/sanity/nextSanityImage";
import { AboutSection as AboutSectionProps, Artist } from "utils/sanity/types";

const About: React.FC<Artist> = ({
  active,
  bio,
  name,
  tagline,
  members,
  profileImage,
}) => {
  return (
    <section className="text-gray-400  body-font ">
      <div className="flex flex-wrap justify-between w-full items-center container px-5 sm:px-6 lg:px-8  max-w-7xl py-24 mx-auto ">
        <div className={"lg:w-2/5 md:w-full max-w-prose pb-12 lg:py-6"}>
          <h1 className="text-4xl font-bold text-white tracking-wider ">
            <span className="block xl:inline sm:text-5xl md:text-6xl">
              {name}
            </span>{" "}
          </h1>
          <p className="text-indigo-300 text-xl sm:text-2xl border-b border-gray-800 hover:border-gray-100 max-w-max">
            {tagline}
          </p>

          {bio && (
            <PortableText blocks={bio} className="PortableText-container" />
          )}
        </div>
        <div
          className={`w-full lg:w-6/12 md:pr-10 md:py-6 min-h-30rem h-80 md:h-screen relative `}
        >
          <MyImage
            containerClassName={`static `}
            nextImageProps={{
              ...nextSanityImage(profileImage),
              alt: name,
              layout: "fill",
              width: undefined,
              height: undefined,
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </section>
  );
};

interface AboutSectionArtist extends AboutSectionProps {
  artist: Artist;
}

const AboutSection: FC<AboutSectionArtist> = (props) => {
  return <About {...props.artist} />;
};

export default AboutSection;
