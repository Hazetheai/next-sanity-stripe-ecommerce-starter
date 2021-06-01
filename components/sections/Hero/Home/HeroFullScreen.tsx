import React, { Fragment } from "react";
import { buildSanityLink, PortableText, urlFor } from "utils/sanity";
import { Hero as HeroProps } from "utils/sanity/types";
import Cta from "components/common/Cta";
import MyImage from "components/elements/Image";
import { nextSanityImage } from "utils/sanity/nextSanityImage";
import Link from "components/elements/Link";
import HeroFeatureSection from "../HeroFeatureSection";

// TODO
// export function formatHeadings(heading:string): string[]{
//     if(heading.length < 15 || heading.split(" ").length < 2) return [heading];

//     const headingFirstHalf = heading.split(" ")
// }

interface HeroContentSection {
  tagline: HeroProps["tagline"];
  heading: HeroProps["heading"];
  ctas?: HeroProps["ctas"];
  orientation?: "left" | "center" | "right";
  className?: string;
}

export const HeroContentSection: React.FC<HeroContentSection> = ({
  tagline,
  heading,
  orientation,
  ctas,
  className,
}) => {
  return (
    <div className={className}>
      <div className="font-extrabold text-white">
        <h1 className="text-4xl tracking-wider ">
          <span className="block xl:inline sm:text-5xl md:text-6xl">
            {heading}
          </span>{" "}
        </h1>

        {ctas?.map((cta, idx, arr) => (
          <Fragment key={cta._key}>
            <Link
              text={cta.title}
              hrefProp={`${buildSanityLink(
                cta?.route?.["_type"],
                cta?.route?.["slug"]?.["current"] || cta?.link
              )}`}
              noPaddingX
              btnStyle="clear"
              icon={{ name: "none" }}
              className=" text-indigo-300 text-xl sm:text-4xl border-b border-gray-800 hover:border-gray-100"
            />
            {idx < arr.length - 1 && (
              <span className=" text-white text-xl sm:text-4xl xl:inline px-4 sm:px-12">
                /
              </span>
            )}
          </Fragment>
        ))}
      </div>
      {tagline && (
        <PortableText
          className="max-w-xl mb-4 text-base text-gray-200 md:text-lg PortableText-container"
          blocks={tagline}
        />
      )}
    </div>
  );
};

const HeroFullScreen: React.FC<HeroProps> = ({
  heading,
  backgroundImage,
  tagline,
  ctas,
  layout,
  textLayout,
  featureCtas,
}) => {
  const text =
    textLayout === "right"
      ? "text-right"
      : textLayout === "left"
      ? "text-left"
      : "text-center";
  return (
    <>
      <div className="relative border-b border-gray-800 lg:h-screen">
        {backgroundImage && (
          <MyImage
            nextImageProps={{
              ...nextSanityImage(backgroundImage),
              alt: heading,
              layout: "fill",
              width: undefined,
              height: undefined,
              objectFit: "cover",
              //   objectPosition: "-7rem",
            }}
            className="lg:object-hero-left"
            containerClassName="static inset-0 object-cover w-full "
          />
        )}
        <div className="relative bg-opacity-75 bg-deep-purple-accent-700 h-full">
          <div className="relative pt-96 lg:pt-0 mx-auto overflow-hidden md:max-w-full lg:max-w-screen-xl h-full ">
            <div className="flex flex-col items-center justify-between  lg:w-1/2 lg:ml-auto h-full bg-gradient-to-r from-transparent  to-black">
              {layout === "imageOnly" ? null : ( // ></div> //   }`} //     layout === "imageOnly" ? "h-64" : "" //   className={`w-full max-w-xl xl:px-8 xl:w-5/12 lg:h-screen ${ // <div
                <HeroContentSection
                  className={`w-full max-w-xl mb-4 lg:py-36 h-full flex flex-col justify-center ${text}`}
                  orientation={textLayout}
                  ctas={featureCtas ? undefined : ctas}
                  tagline={tagline}
                  heading={heading}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {layout === "imageOnly" ? (
        <HeroContentSection
          className={`w-full max-w-xl mb-4 lg:py-36 h-full flex flex-col justify-center ${text}`}
          orientation={textLayout}
          ctas={featureCtas ? undefined : ctas}
          tagline={tagline}
          heading={heading}
        />
      ) : null}
      {featureCtas && <HeroFeatureSection ctas={ctas} />}
    </>
  );
};
export default HeroFullScreen;
