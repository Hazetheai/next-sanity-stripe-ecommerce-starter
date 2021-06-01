import PropTypes from "prop-types";
import Cta from "../common/Cta";
import { PortableText, urlFor } from "../../utils/sanity";
import { nextSanityImage } from "utils/sanity/nextSanityImage";
import MyImage from "components/elements/Image";

function ImageSection(props) {
  const { heading, label, text, image, cta } = props;

  if (!image) {
    return null;
  }

  return (
    <div className="container px-5 sm:px-6 lg:px-8  max-w-7xl mx-auto px-6 mt-12">
      <div className="flex items-center">
        <div>
          <figure>
            <MyImage
              nextImageProps={{
                ...nextSanityImage(image),
                alt: heading,
                layout: "fill",
                width: undefined,
                height: undefined,
                objectFit: "cover",
              }}
              containerClassName="mx-auto h-64 w-full"
            />
            <figcaption>
              <div>
                <div>{label}</div>
                <h2>{heading}</h2>
                {text && (
                  <PortableText
                    blocks={text}
                    className="PortableText-container"
                  />
                )}
                {cta && cta.route && <Cta {...cta} />}
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}

ImageSection.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.array,
  image: PropTypes.shape({
    asset: PropTypes.shape({
      _ref: PropTypes.string,
    }),
  }),
  backgroundImage: PropTypes.string,
  tagline: PropTypes.string,
  cta: PropTypes.object,
};

export default ImageSection;
