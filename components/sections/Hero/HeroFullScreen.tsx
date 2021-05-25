import React from "react";
import { PortableText, urlFor } from "utils/sanity";
import { Hero as HeroProps } from "utils/sanity/types";
import Cta from "components/common/Cta";
import MyImage from "components/elements/Image";
import { nextSanityImage } from "utils/sanity/nextSanityImage";

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
}) => {
  return (
    <>
      <div className="relative">
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
            <div className="flex flex-col items-center justify-between xl:flex-row">
              {layout === "imageOnly" ? null : (
                <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                  <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                    {/* <br className="hidden md:block" /> */}
                    {heading}
                  </h2>

                  {/* <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                  quae.
                </p> */}
                  {tagline && (
                    <PortableText
                      className="max-w-xl mb-4 text-base text-gray-200 md:text-lg"
                      blocks={tagline}
                    />
                  )}
                  {ctas && (
                    <div>
                      {ctas.map((cta) => (
                        <Cta {...cta} key={cta._key} />
                      ))}
                    </div>
                  )}
                </div>
              )}
              <div
                className={`w-full max-w-xl xl:px-8 xl:w-5/12 lg:h-screen ${
                  layout === "imageOnly" ? "h-64" : ""
                }`}
              >
                {/* <div className="bg-white  shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Sign up for updates
                </h3>
                <BaseForm />
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {layout === "imageOnly" ? (
        <div className="w-full mt-8 md:mt-16">
          {" "}
          <h2 className="mx-auto text-4xl md:text-6xl font-semibold text-center">
            {heading}
          </h2>{" "}
          <hr className="w-1/4 mx-auto mt-2 mb-8" />
        </div>
      ) : null}
    </>
  );
};
export default HeroFullScreen;
