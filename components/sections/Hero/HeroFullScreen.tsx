import React from "react";
import { PortableText, urlFor } from "utils/sanity";
import { Hero as HeroProps } from "utils/sanity/types";
import Cta from "components/common/Cta";
import MyImage from "components/elements/Image";
import { nextSanityImage } from "utils/sanity/nextSanityImage";
import { HeroContentSection } from "./Home/HeroFullScreen";
import HeroFeatureSection from "./HeroFeatureSection";

// TODO
// export function formatHeadings(heading:string): string[]{
//     if(heading.length < 15 || heading.split(" ").length < 2) return [heading];

//     const headingFirstHalf = heading.split(" ")
// }

const HeroFullScreen: React.FC<HeroProps> = ({
  heading,
  backgroundImage,
  tagline,
  ctas,
  layout,
  textLayout,
  featureCtas,
}) => {
  const contentLayout =
    textLayout === "left"
      ? "items-start"
      : textLayout === "right"
      ? "items-end"
      : "items-center";

  const text =
    textLayout === "right"
      ? "text-right"
      : textLayout === "left"
      ? "text-left"
      : "text-center";
  return (
    <>
      <div className={`relative ${featureCtas ? "" : "max-h-screen"}`}>
        {backgroundImage && (
          <MyImage
            nextImageProps={{
              ...nextSanityImage(backgroundImage),
              alt: heading,
              layout: "fill",
              width: undefined,
              height: undefined,
              objectFit: "cover",
            }}
            containerClassName="static inset-0 object-cover w-full h-full"
          />
        )}
        <div className="relative bg-opacity-75 bg-deep-purple-accent-700">
          {/* <svg
          className="absolute inset-x-0 bottom-0 text-white"
          viewBox="0 0 1160 163"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg> */}
          <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className={`flex flex-col ${contentLayout} justify-between`}>
              {layout === "imageOnly" ? null : (
                <HeroContentSection
                  className={`w-full max-w-xl mb-4 ${
                    featureCtas ? "" : "lg:py-36"
                  } h-full flex flex-col justify-center ${text}`}
                  orientation={textLayout}
                  ctas={featureCtas ? undefined : ctas}
                  tagline={tagline}
                  heading={heading}
                />
              )}
              {/* <div
                className={`w-full max-w-xl xl:px-8 xl:w-5/12 lg:h-screen ${
                  layout === "imageOnly" ? "h-64" : ""
                }`}
              >
       
              </div> */}
            </div>
          </div>
        </div>
        {featureCtas && <HeroFeatureSection ctas={ctas} />}
      </div>
      {layout === "imageOnly" ? (
        <HeroContentSection
          className={`w-full max-w-xl mb-4 ${
            featureCtas ? "" : "lg:py-36"
          } h-full flex flex-col justify-center ${text}`}
          orientation={textLayout}
          ctas={featureCtas ? undefined : ctas}
          tagline={tagline}
          heading={heading}
        />
      ) : null}
    </>
  );
};
export default HeroFullScreen;
