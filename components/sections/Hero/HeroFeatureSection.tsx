import MyImage from "components/elements/Image";
import Link from "components/elements/Link";
import React from "react";
import { buildSanityLink } from "utils/sanity";
import { nextSanityImage } from "utils/sanity/nextSanityImage";
import { Hero } from "utils/sanity/types";

interface HeroFeatureSectionProps {
  ctas: Hero["ctas"];
}

const HeroFeatureSection: React.FC<HeroFeatureSectionProps> = ({ ctas }) => {
  return (
    <div className="relative flex flex-wrap md:space-y-0 space-y-6">
      {ctas?.map((cta) => (
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-white mb-5 flex-shrink-0">
            {cta.icon ? (
              <MyImage
                nextImageProps={{
                  ...nextSanityImage(cta.icon),
                  width: 100,
                  height: 100,
                }}
              />
            ) : (
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-10 h-10 bg-gray-800"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            )}
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font font-medium mb-3">
              {cta.title}
            </h2>
            <p className="leading-relaxed text-base">{cta?.tagline}</p>

            <Link
              key={cta._key}
              text={"View"}
              hrefProp={`${buildSanityLink(
                cta?.route?.["_type"],
                cta?.route?.["slug"]?.["current"] || cta?.link
              )}`}
              noPaddingX
              btnStyle="clear"
              //   icon={{ name: "none" }}
              className=" mt-3 text-white inline-flex items-center"
            >
              {" "}
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroFeatureSection;
