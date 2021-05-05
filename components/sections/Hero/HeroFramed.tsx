import { PortableText, urlFor } from "utils/sanity";
import { Hero as HeroProps } from "utils/sanity/types";
import Cta from "components/common/Cta";
import { nextSanityImage } from "utils/sanity/nextSanityImage";
import MyImage from "components/common/Image";

const HeroFramed: React.FC<HeroProps> = ({
  heading,
  backgroundImage,
  tagline,
  ctas,
}) => {
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              {heading}
              <br className="hidden lg:inline-block" />
            </h1>
            {tagline && (
              <PortableText className="mb-8 leading-relaxed" blocks={tagline} />
            )}
            <div className="flex justify-center">
              {ctas && (
                <div>
                  {ctas.map((cta) => (
                    <Cta {...cta} key={cta._key} />
                  ))}
                </div>
              )}
            </div>
          </div>

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
              containerClassName="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
            />
          )}
        </div>
      </section>
    </>
  );
};

export default HeroFramed;
