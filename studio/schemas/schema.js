// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";
// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import category from "./documents/category";
import product from "./documents/product";
import vendor from "./documents/vendor";
import productVariant from "./documents/productVariant";
import brand from "./documents/brand";
import social from "./documents/social";
import ad from "./documents/ad";
import swag from "./documents/swag";
import page from "./documents/page";
import route from "./documents/route";
import siteConfig from "./documents/siteConfig";
import person from "./documents/person";
import popup from "./documents/popup";
import photographer from "./documents/photographer";
import album from "./documents/album";
import song from "./documents/song";
import film from "./documents/film";
import creativeConfig from "./documents/creativeConfig";
import staticRoute from "./documents/staticRoute";

// Object types
import blockContent from "./objects/blockContent";
import cta from "./objects/cta";
import figure from "./objects/figure";
import internalLink from "./objects/internalLink";
import link from "./objects/link";

import photoCredits from "./objects/photoCredits";
import simplePortableText from "./objects/simplePortableText";
import contactInfo from "./objects/contactInfo";
import appraiser from "./objects/appraiser";

// Objects with Custom Components
import videoEmbed from "../src/components/videoEmbed";

// Landing page sections
import productSection from "./objects/productSection";
import imageText from "./objects/imageText";
import form from "./objects/form";
import hero from "./objects/hero";
import imageSection from "./objects/imageSection";
import centerPiece from "./objects/centerPiece";
import featureSection from "./objects/featureSection";
import albumSection from "./objects/albumSection";
import songSection from "./objects/songSection";
import filmSection from "./objects/filmSection";
import creativeFeature from "./objects/creativeFeature";
import coveringArtists from "./objects/coveringArtists";
import track from "./objects/track";

// Locale Stuff
import localeString from "./locale/String";
import localeText from "./locale/Text";
import localeBlockContent from "./locale/BlockContent";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    product,
    popup,
    vendor,
    category,
    brand,
    social,
    ad,
    swag,
    page,
    route,
    siteConfig,
    person,
    photographer,
    album,
    song,
    film,
    creativeConfig,
    staticRoute,
    // When added to this list, object types can be used as
    productSection,
    photoCredits,
    imageText,
    cta,
    figure,
    internalLink,
    link,
    hero,
    imageSection,
    centerPiece,
    featureSection,
    form,
    simplePortableText,
    contactInfo,
    blockContent,
    localeText,
    localeBlockContent,
    localeString,
    productVariant,
    appraiser,
    songSection,
    albumSection,
    filmSection,
    videoEmbed,
    creativeFeature,
    coveringArtists,
    track,
  ]),
});
