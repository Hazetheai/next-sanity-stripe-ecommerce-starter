import Contact from "./Contact";
import Newsletter from "./Newsletter";
import { Form as FormProps } from "utils/sanity/types";

const Hero: React.FC<FormProps> = (props) => {
  return (
    <section className="text-gray-400  body-font relative">
      {props.formType === "contact" ? (
        <Contact {...props} />
      ) : props.formType === "newsletter" ? (
        <Newsletter {...props} />
      ) : null}
    </section>
  );
};

export default Hero;
