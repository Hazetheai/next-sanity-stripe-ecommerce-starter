import MyImage from "components/elements/Image";
import React from "react";
import { nextSanityImage } from "utils/sanity/nextSanityImage";
import { PortableText, urlFor } from "../../utils/sanity";
import Cta from "../common/Cta";

function FeatureSection({
  heading1,
  heading2,
  heading3,
  image,
  tagline1,
  tagline2,
  tagline3,
  ctas,
}) {
  return (
    <section className=" text-gray-400  body-font">
      <div className="container max-w-7xl px-5 py-24 mx-auto flex flex-wrap justify-center">
        <div className=" w-screen min-h-30rem lg:w-1/2 -mb-16  lg:mb-0 lg:-ml-16 overflow-hidden">
          <MyImage
            nextImageProps={{
              ...nextSanityImage(image),
              alt: image.alt,
              layout: "fill",
              width: undefined,
              height: undefined,
              objectFit: "cover",
            }}
            containerClassName="h-full w-full"
          />
        </div>
        <div className="bg-black relative flex flex-col flex-wrap md:pt-12  -mb-10 lg:m-0 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div className="flex flex-col mb-10 lg:items-start items-center">
            {/* <div className="w-12 h-12 inline-flex items-center justify-center -full bg-gray-800 text-indigo-400 mb-5">
             <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg> 
            </div>*/}
            <div className="flex-grow">
              <h2 className="text-white text-lg title-font font-medium mb-3">
                {heading1}
              </h2>
              {/* <p className="leading-relaxed text-base">{tagline1}</p> */}
              {tagline1 && (
                <PortableText
                  className="leading-relaxed text-base"
                  renderContainerOnSingleChild
                  blocks={tagline1}
                />
              )}
              {ctas[0] && <Cta {...ctas[0]} key={ctas[0]._key} />}
            </div>
          </div>
          <div className="flex flex-col mb-10 lg:items-start items-center">
            {/*   <div className="w-12 h-12 inline-flex items-center justify-center -full bg-gray-800 text-indigo-400 mb-5">
           <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <circle cx={6} cy={6} r={3} />
                <circle cx={6} cy={18} r={3} /> 
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
              </svg>
            </div>*/}
            <div className="flex-grow">
              <h2 className="text-white text-lg title-font font-medium mb-3">
                {heading2}
              </h2>
              {tagline2 && (
                <PortableText
                  className="leading-relaxed text-base"
                  renderContainerOnSingleChild
                  blocks={tagline2}
                />
              )}

              {ctas[1] && <Cta {...ctas[1]} key={ctas[1]._key} />}
            </div>
          </div>
          <div className="flex flex-col mb-10 lg:items-start items-center">
            {/*  <div className="w-12 h-12 inline-flex items-center justify-center -full bg-gray-800 text-indigo-400 mb-5">
            <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx={12} cy={7} r={4} />
              </svg>
            </div> */}
            <div className="flex-grow">
              <h2 className="text-white text-lg title-font font-medium mb-3">
                {heading3}
              </h2>
              {tagline2 && (
                <PortableText
                  className="leading-relaxed text-base"
                  renderContainerOnSingleChild
                  blocks={tagline2}
                />
              )}

              {ctas[2] && <Cta {...ctas[2]} key={ctas[2]._key} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
