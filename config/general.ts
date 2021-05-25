import SC from "../public/global-data.json";
import Socials from "public/social-data.json";
import { PageType, RobotsContent, MetaTags } from "typings/types/social";
import { concatenateStrings } from "utils/stringFunctions";
import { urlFor } from "utils/sanity";
import { Social } from "utils/sanity/types";

const SiteConfig = SC[0];

export type SiteConfigJSON = typeof SiteConfig;
export type SiteConfigNav = typeof SiteConfig.mainNavigation;
export type SiteConfigFooter = typeof SiteConfig.footerNavigation;

export const BRAND_NAME = "Donagh Long";

export const defaultMetaTags: MetaTags = {
  canonical: SiteConfig.url,
  description: SiteConfig.description,
  image: urlFor(SiteConfig.logo).url() || "",
  robots: concatenateStrings(RobotsContent.index, RobotsContent.follow),
  title: SiteConfig.title,
  type: PageType.website,
  logo: urlFor(SiteConfig.socialImage).url() || "",
};
export { Socials };
export const socialLinks = Socials.reduce((all, currentSocial) => {
  all[currentSocial.channel] = currentSocial.handle;
  return all;
}, {});

export function formatSocialLinks(channel: Social["channel"]) {
  switch (channel) {
    case "youtube":
      return `https://www.youtube.com/channel/${socialLinks[channel]}`;
    case "instagram":
      return `https://www.instagram.com/${socialLinks[channel]}`;
    case "facebook":
      return `https://www.facebook.com/${socialLinks[channel]}`;
    case "twitter":
      return `https://twitter.com/${socialLinks[channel]}`;
    case "linkedin":
      return `https://www.linkedin.com/in/${socialLinks[channel]}`;

    default:
      return `https://www.${channel}.com`;
  }
}

export const dev = {
  email: "contact@jakeriordan.dev",
  website: "https://jakeriordan.dev",
};
export const { contactAddress, contactEmail, contactPhone } = SiteConfig;

export default SiteConfig;
