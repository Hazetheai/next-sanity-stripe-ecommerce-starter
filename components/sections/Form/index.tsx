import Contact from "./Contact";
import Newsletter from "./Newsletter";
import { Form as FormProps } from "utils/sanity/types";

const Hero: React.FC<FormProps> = (props) => {
  if (props.formType === "contact") {
    return <Contact {...props} />;
  }
  if (props.formType === "newsletter") {
    return <Newsletter {...props} />;
  }

  return <p>Invalid Form Selected</p>;
};

export default Hero;
