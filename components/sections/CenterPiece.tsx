import Cta from "components/common/Cta";
import EmailForm from "components/sections/Form/Newsletter";
import Heading from "components/elements/Title";
import { CenterPiece as CenterPieceProps } from "utils/sanity/types";
import { PortableText } from "../../utils/sanity";

const CenterPiece: React.FC<CenterPieceProps> = ({
  text,
  heading,
  label,
  signup,
  ctas,
}) => {
  return (
    <section className="container mx-auto px-6 text-center ">
      <div className="md:flex flex-col md:items-center">
        {heading && (
          <Heading className="heading mt-4" level="h2" text={heading} />
        )}
        {text && <PortableText className="mb-8 text-center" blocks={text} />}
        {/* TODO */}
        {signup && <EmailForm formType="newsletter" _type="form" />}
        {ctas && (
          <div className="flex justify-around my-8">
            {ctas.map((cta) => (
              <div key={cta._key} className="mx-4 ">
                <Cta {...cta} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CenterPiece;
