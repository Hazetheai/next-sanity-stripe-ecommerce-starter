import { useRouter } from "next/router";
import { Hero as HeroProps } from "../../../utils/sanity/types";
import HeroFramed from "./HeroFramed";
import HeroFullScreen from "./HeroFullScreen";
import HeroHalfScreen from "./HeroHalfScreen";
import HomeHeroFullScreen from "./Home/HeroFullScreen";
import HomeHeroHalfScreen from "./Home/HeroHalfScreen";

const Hero: React.FC<HeroProps> = (props) => {
  const router = useRouter();

  if (props.layout === "halfScreen") {
    if (router.asPath === "/" || router.asPath === "/home")
      return <HomeHeroHalfScreen {...props} />;

    return <HeroHalfScreen {...props} />;
  }

  if (props.layout === "fullScreen" || props.layout === "imageOnly") {
    if (router.asPath === "/" || router.asPath === "/home")
      return <HomeHeroFullScreen {...props} />;
    return <HeroFullScreen {...props} />;
  }

  return <HeroFramed {...props} />;
};

export default Hero;
