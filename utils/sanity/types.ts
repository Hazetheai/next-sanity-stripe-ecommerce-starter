import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
};

/**
 * Product
 *
 *
 */
export interface Product extends SanityDocument {
  _type: "product";

  /**
   * Title — `string`
   *
   *
   */
  title: string;

  /**
   * Main image — `image`
   *
   *
   */
  mainImage: {
    _type: "image";
    asset: SanityAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;

    /**
     * Alternative text — `string`
     *
     * Important for SEO and accessiblity.
     */
    alt: string;
  };

  /**
   * Blurb — `localeString`
   *
   *
   */
  blurb: LocaleString;

  /**
   * Body — `localeBlockContent`
   *
   *
   */
  body: LocaleBlockContent;

  /**
   * Tags — `array`
   *
   *
   */
  tags?: Array<SanityKeyed<string>>;

  /**
   * Default variant — `productVariant`
   *
   *
   */
  defaultProductVariant: ProductVariant;

  /**
   * Variants — `array`
   *
   *
   */
  variants?: Array<SanityKeyed<ProductVariant>>;

  /**
   * Vendor — `reference`
   *
   *
   */
  vendor?: SanityReference<Vendor>;

  /**
   * Categories — `array`
   *
   *
   */
  categories?: Array<SanityKeyedReference<Category>>;

  /**
   * Slug — `slug`
   *
   *
   */
  slug: { _type: "slug"; current: string };
}

/**
 * Popup Shop
 *
 *
 */
export interface Popup extends SanityDocument {
  _type: "popup";

  /**
   * name — `string`
   *
   *
   */
  name: string;

  /**
   * location — `geopoint`
   *
   *
   */
  location: SanityGeoPoint;

  /**
   * Opening hours — `object`
   *
   *
   */
  openingHours?: {
    _type: "openingHours";
    /**
     * from — `datetime`
     *
     *
     */
    from?: string;

    /**
     * to — `datetime`
     *
     *
     */
    to?: string;
  };
}

/**
 * Vendor
 *
 *
 */
export interface Vendor extends SanityDocument {
  _type: "vendor";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * logo — `image`
   *
   *
   */
  logo?: {
    _type: "image";
    asset: SanityAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Description — `blockContent`
   *
   *
   */
  description?: BlockContent;
}

/**
 * Category
 *
 *
 */
export interface Category extends SanityDocument {
  _type: "category";

  /**
   * Title — `string`
   *
   *
   */
  title: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug: { _type: "slug"; current: string };

  /**
   * Description — `text`
   *
   *
   */
  description?: string;

  /**
   * Parent categories — `array`
   *
   *
   */
  parents?: Array<SanityKeyedReference<Category>>;
}

/**
 * Brand
 *
 *
 */
export interface Brand extends SanityDocument {
  _type: "brand";

  /**
   * name — `string`
   *
   *
   */
  name?: string;

  /**
   * tagline — `string`
   *
   *
   */
  tagline?: string;

  /**
   * colors — `object`
   *
   *
   */
  colors?: {
    _type: "colors";
    /**
     * primary — `color`
     *
     *
     */
    primary?: Color;

    /**
     * secondary — `color`
     *
     *
     */
    secondary?: Color;

    /**
     * ambient — `color`
     *
     *
     */
    ambient?: Color;
  };

  /**
   * logo — `image`
   *
   *
   */
  logo?: {
    _type: "image";
    asset: SanityAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Social
 *
 *
 */
export interface Social extends SanityDocument {
  _type: "social";

  /**
   * channel — `string`
   *
   *
   */
  channel: "twitter" | "instagram" | "linkedin" | "youtube" | "facebook";

  /**
   * Handle — `string`
   *
   * No "@" symbol required.
   */
  handle?: string;
}

/**
 * Ad
 *
 *
 */
export interface Ad extends SanityDocument {
  _type: "ad";

  /**
   * Heading — `string`
   *
   *
   */
  heading: string;

  /**
   * Tagline — `text`
   *
   *
   */
  tagline: string;

  /**
   * Illustration — `figure`
   *
   *
   */
  illustration: Figure;
}

/**
 * Swag
 *
 *
 */
export interface Swag extends SanityDocument {
  _type: "swag";

  /**
   * name — `string`
   *
   *
   */
  name?: string;

  /**
   * decoration — `object`
   *
   *
   */
  decoration?: {
    _type: "decoration";
    /**
     * heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * tagline — `string`
     *
     *
     */
    tagline?: string;

    /**
     * illustration — `image`
     *
     *
     */
    illustration?: {
      _type: "image";
      asset: SanityAsset;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;

      /**
       * Alternative text — `string`
       *
       * Important for SEO and accessiblity.
       */
      alt: string;
    };
  };

  /**
   * product — `reference`
   *
   *
   */
  product?: SanityReference<Product>;
}

/**
 * Page
 *
 *
 */
export interface Page extends SanityDocument {
  _type: "page";

  /**
   * Title — `string`
   *
   *
   */
  title: string;

  /**
   * Page sections — `array`
   *
   *
   */
  content?: Array<
    | SanityKeyed<Hero>
    | SanityKeyed<ImageSection>
    | SanityKeyed<CenterPiece>
    | SanityKeyed<FeatureSection>
    | SanityKeyed<Form>
    | SanityKeyed<ProductSection>
  >;

  /**
   * Description — `text`
   *
   * This description populates meta-tags on the webpage
   */
  description: string;

  /**
   * Open Graph Image — `image`
   *
   * Image for sharing previews on Facebook, Twitter etc.
   */
  openGraphImage?: {
    _type: "image";
    asset: SanityAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Route
 *
 *
 */
export interface Route extends SanityDocument {
  _type: "route";

  /**
   * Slug — `slug`
   *
   *
   */
  slug: { _type: "slug"; current: string };

  /**
   * page — `reference`
   *
   * Select the page that this route should point to
   */
  page: SanityReference<Page>;

  /**
   * Include page in sitemap — `boolean`
   *
   * For search engines. Will be added to /sitemap.xml
   */
  includeInSitemap?: boolean;

  /**
   * Disallow in robots.txt — `boolean`
   *
   * Hide this route for search engines
   */
  disallowRobots?: boolean;
}

/**
 * Site configuration
 *
 *
 */
export interface SiteConfig extends SanityDocument {
  _type: "siteConfig";

  /**
   * Site title — `string`
   *
   *
   */
  title: string;

  /**
   * Site description — `text`
   *
   *
   */
  description: string;

  /**
   * URL — `url`
   *
   * The main site url. Used to create canonical url
   */
  url: string;

  /**
   * Site language — `string`
   *
   *
   */
  lang?: string;

  /**
   * Brand logo — `image`
   *
   * Best choice is to use an SVG where the color are set with currentColor
   */
  logo: {
    _type: "image";
    asset: SanityAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;

    /**
     * Alternative text — `string`
     *
     * Important for SEO and accessiblity.
     */
    alt: string;
  };

  /**
   * Social Image — `image`
   *
   * The default image when sharing on social media
   */
  socialImage: {
    _type: "image";
    asset: SanityAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;

    /**
     * Alternative text — `string`
     *
     * Important for SEO and accessiblity.
     */
    alt: string;
  };

  /**
   * Main navigation — `array`
   *
   * Select pages for the top menu
   */
  mainNavigation?: Array<SanityKeyedReference<Route>>;

  /**
   * Footer navigation items — `array`
   *
   *
   */
  footerNavigation?: Array<
    SanityKeyed<{
      _type: "footerNavigationSection";
      /**
       * Title — `string`
       *
       *
       */
      title?: string;

      /**
       * Footer navigation items — `array`
       *
       *
       */
      footerNavigationItem?: Array<SanityKeyedReference<Route | Product>>;
    }>
  >;

  /**
   * Contact Email — `string`
   *
   *
   */
  contactEmail?: string;

  /**
   * Contact Phone — `string`
   *
   *
   */
  contactPhone?: string;

  /**
   * Address — `text`
   *
   *
   */
  contactAddress?: string;
}

/**
 * Person
 *
 *
 */
export interface Person extends SanityDocument {
  _type: "person";

  /**
   * Full name — `string`
   *
   *
   */
  name: string;

  /**
   * Photo — `figure`
   *
   *
   */
  photo?: Figure;

  /**
   * Description — `text`
   *
   *
   */
  description?: string;

  /**
   * Contact information — `contactInfo`
   *
   *
   */
  contactInfo?: ContactInfo;
}

/**
 * Photographers
 *
 *
 */
export interface Photographer extends SanityDocument {
  _type: "photographer";

  /**
   * Name — `string`
   *
   *
   */
  name: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Photographer Website — `url`
   *
   *
   */
  website?: string;

  /**
   * Photographer Instagram Handle — `string`
   *
   * No "@"
   */
  instagram?: string;

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;

    /**
     * Alternative text — `string`
     *
     *
     */
    alt: string;
  };
}

export type ProductSection = {
  _type: "productSection";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Tagline — `string`
   *
   *
   */
  tagline?: string;

  /**
   * Products — `array`
   *
   *
   */
  products?: Array<SanityKeyedReference<Product>>;
};

export type PhotoCredits = SanityReference<Photographer>;

export type TextWithImage = {
  _type: "textWithImage";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Body — `blockContent`
   *
   *
   */
  body: BlockContent;

  /**
   * Image — `image`
   *
   *
   */
  image: {
    _type: "image";
    asset: SanityAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;

    /**
     * Alternative text — `string`
     *
     *
     */
    alt: string;

    /**
     * Image Fit — `string`
     *
     * How would you like the image to fit? 💡 "Cover" Recommended
     */
    imageFit: "contain" | "cover";

    /**
     * Image Position — `string`
     *
     * How would you like the image to be positioned? 💡 "Center" Recommended
     */
    imagePosition: "left" | "center" | "right" | "top" | "bottom";

    /**
     * Image Orientation — `string`
     *
     * Which side for the image? 💡 Alternating ajacent items recommended
     */
    imageOrientation: "left" | "right";

    /**
     * Lightbox — `boolean`
     *
     * Allow the image to be clicked and show in a lightbox?
     */
    lightbox?: boolean;

    /**
     * Photo Credits — `reference`
     *
     *
     */
    photoCredits?: SanityReference<Photographer>;
  };
};

export type Cta = {
  _type: "cta";
  /**
   * Title — `string`
   *
   *
   */
  title: string;

  /**
   * Internal link — `reference`
   *
   * Use this to link between pages on the website
   */
  route?: SanityReference<Route | Product>;

  /**
   * External link — `url`
   *
   *
   */
  link?: string;
};

export type Figure = {
  _type: "figure";
  asset: SanityAsset;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;

  /**
   * Caption — `string`
   *
   *
   */
  caption?: string;

  /**
   * Alternative text — `string`
   *
   * Important for SEO and accessiblity.
   */
  alt: string;
};

export type InternalLink = SanityReference<Product | Route>;

export type Link = {
  _type: "link";
  /**
   * URL — `url`
   *
   *
   */
  href?: string;
};

export type Hero = {
  _type: "hero";
  /**
   * Heading — `string`
   *
   *
   */
  heading?: string;

  /**
   * Tagline — `simplePortableText`
   *
   *
   */
  tagline?: SimplePortableText;

  /**
   * Background image — `image`
   *
   *
   */
  backgroundImage?: {
    _type: "image";
    asset: SanityAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;

    /**
     * Alternative text — `string`
     *
     * Important for SEO and accessiblity.
     */
    alt: string;
  };

  /**
   * Image Layout — `string`
   *
   *
   */
  layout?: "imageOnly" | "framed" | "halfScreen" | "fullScreen";

  /**
   * Call to actions — `array`
   *
   *
   */
  ctas?: Array<SanityKeyed<Cta>>;
};

export type ImageSection = {
  _type: "imageSection";
  /**
   * Heading — `string`
   *
   *
   */
  heading: string;

  /**
   * Label — `string`
   *
   *
   */
  label?: string;

  /**
   * Text — `simplePortableText`
   *
   *
   */
  text?: SimplePortableText;

  /**
   * Image — `figure`
   *
   *
   */
  image?: Figure;

  /**
   * Call to action — `cta`
   *
   *
   */
  cta?: Cta;
};

export type CenterPiece = {
  _type: "centerPiece";
  /**
   * Label — `string`
   *
   *
   */
  label?: string;

  /**
   * Heading — `string`
   *
   *
   */
  heading?: string;

  /**
   * Signup Form — `boolean`
   *
   *
   */
  signup?: boolean;

  /**
   * Call to actions — `array`
   *
   *
   */
  ctas?: Array<SanityKeyed<Cta>>;

  /**
   * Text — `blockContent`
   *
   *
   */
  text?: BlockContent;
};

export type FeatureSection = {
  _type: "featureSection";
  /**
   * Heading 1 — `string`
   *
   *
   */
  heading1?: string;

  /**
   * Tagline 1 — `simplePortableText`
   *
   *
   */
  tagline1?: SimplePortableText;

  /**
   * Heading 2 — `string`
   *
   *
   */
  heading2?: string;

  /**
   * Tagline 2 — `simplePortableText`
   *
   *
   */
  tagline2?: SimplePortableText;

  /**
   * Heading 3 — `string`
   *
   *
   */
  heading3?: string;

  /**
   * Tagline 3 — `simplePortableText`
   *
   *
   */
  tagline3?: SimplePortableText;

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Call to actions — `array`
   *
   *
   */
  ctas?: Array<SanityKeyed<Cta>>;
};

export type Form = {
  _type: "form";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Tagline — `string`
   *
   *
   */
  tagline?: string;

  /**
   * Form Type — `string`
   *
   *
   */
  formType: "newsletter" | "contact";
};

export type SimplePortableText = Array<SanityKeyed<SanityBlock>>;

export type ContactInfo = {
  _type: "contactInfo";
  /**
   * LinkedIn — `string`
   *
   *
   */
  linkedIn?: string;

  /**
   * Twitter — `string`
   *
   *
   */
  twitter?: string;

  /**
   * Email — `email`
   *
   *
   */
  email?: Email;

  /**
   * Phone — `string`
   *
   *
   */
  phone?: string;
};

export type BlockContent = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<{
      _type: "image";
      asset: SanityAsset;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
>;

export type LocaleText = {
  _type: "localeText";
  /**
   * English — `text`
   *
   *
   */
  en?: string;

  /**
   * Norwegian — `text`
   *
   *
   */
  nb?: string;
};

export type LocaleBlockContent = {
  _type: "localeBlockContent";
  /**
   * English — `blockContent`
   *
   *
   */
  en?: BlockContent;

  /**
   * Norwegian — `blockContent`
   *
   *
   */
  nb?: BlockContent;
};

export type LocaleString = {
  _type: "localeString";
  /**
   * English — `string`
   *
   *
   */
  en?: string;

  /**
   * Norwegian — `string`
   *
   *
   */
  nb?: string;
};

export type ProductVariant = {
  _type: "productVariant";
  /**
   * Title — `string`
   *
   *
   */
  title: string;

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Weight in grams — `number`
   *
   *
   */
  grams?: number;

  /**
   * Price — `number`
   *
   *
   */
  price: number;

  /**
   * SKU — `string`
   *
   *
   */
  sku: string;

  /**
   * Taxable — `boolean`
   *
   *
   */
  taxable?: boolean;

  /**
   * Currency — `string`
   *
   *
   */
  currency: "eur" | "usd";

  /**
   * Images — `array`
   *
   *
   */
  images?: Array<
    SanityKeyed<{
      _type: "image";
      asset: SanityAsset;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
  >;
};

export type Documents =
  | Product
  | Popup
  | Vendor
  | Category
  | Brand
  | Social
  | Ad
  | Swag
  | Page
  | Route
  | SiteConfig
  | Person
  | Photographer;

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type Color = any;

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type Email = any;
