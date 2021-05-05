import { Hero as HeroProps } from "../../../utils/sanity/types";
import HeroFramed from "./HeroFramed";
import HeroFullScreen from "./HeroFullScreen";
import HeroHalfScreen from "./HeroHalfScreen";

const Hero: React.FC<HeroProps> = (props) => {
  if (props.layout === "halfScreen") {
    return <HeroHalfScreen {...props} />;
  }

  if (props.layout === "fullScreen" || props.layout === "imageOnly") {
    return <HeroFullScreen {...props} />;
  }

  return <HeroFramed {...props} />;
};

export default Hero;
