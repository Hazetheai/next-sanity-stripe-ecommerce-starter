import { PortableText, urlFor } from "utils/sanity";
import { Hero as HeroProps } from "utils/sanity/types";
import Cta from "components/common/Cta";
import { nextSanityImage } from "utils/sanity/nextSanityImage";
import MyImage from "components/elements/Image";

const HeroFullScreen: React.FC<HeroProps> = ({
  heading,
  backgroundImage,
  tagline,
  ctas,
}) => {
  return (
    <>
      {/* component */}
      <section className="flex flex-wrap md items-center h-full ">
        <div className="w-full md:w-1/2 h-screen">
          <div className="mx-16 md:mx-32">
            <h1 className="text-5xl lg:text-6xl text-white font-bold mt-16">
              {" "}
              {heading}
            </h1>
            {/* country region island */}
            {/* <div className="flex mt-16 font-light text-gray-500">
              <div className="pr-4">
                <span className="uppercase">Country</span>
                <p className="text-2xl text-gray-900 font-semibold pt-2">
                  Japan
                </p>
              </div>
              <div className="pr-4">
                <span className="uppercase">Region</span>
                <p className="text-2xl text-gray-900 font-semibold pt-2">
                  Kanto
                </p>
              </div>
              <div className="pr-4">
                <span className="uppercase">island</span>
                <p className="text-2xl text-gray-900 font-semibold pt-2">
                  Honshu
                </p>
              </div>
            </div> */}
            {/* description */}
            <div className="description w-full sm: md:w-2/3 mt-16 text-gray-500 text-sm">
              {tagline && (
                <PortableText
                  className="description w-full sm: md:w-2/3 mt-16 text-gray-500 text-sm"
                  blocks={tagline}
                />
              )}
            </div>
            {ctas?.map((cta) => (
              <Cta {...cta} key={cta._key} />
            ))}
          </div>
        </div>
        <div className="bg-red-600 w-full md:w-1/2 h-screen">
          {backgroundImage && (
            <MyImage
              nextImageProps={{
                ...nextSanityImage(backgroundImage),
                alt: backgroundImage?.alt || heading,
                layout: "fill",
                width: undefined,
                height: undefined,
                objectFit: "cover",
              }}
              containerClassName="h-screen w-full"
            />
          )}
        </div>
      </section>
    </>
  );
};

export default HeroFullScreen;
