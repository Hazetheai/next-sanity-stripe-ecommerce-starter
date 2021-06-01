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
   * Source Media — `reference`
   *
   *
   */
  sourceMedia?: SanityReference<Album | Film>;

  /**
   * Blurb — `localeString`
   *
   *
   */
  blurb: LocaleString;

  /**
   * Description — `localeBlockContent`
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
 * Artist
 *
 * A monikor, artist name, band etc.
 */
export interface Artist extends SanityDocument {
  _type: "artist";

  /**
   * name — `string`
   *
   *
   */
  name: string;

  /**
   * tagline — `string`
   *
   *
   */
  tagline?: string;

  /**
   * profileImage — `image`
   *
   *
   */
  profileImage: {
    _type: "image";
    asset: SanityAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Bio — `blockContent`
   *
   *
   */
  bio: BlockContent;

  /**
   * Members — `array`
   *
   *
   */
  members?: Array<SanityKeyed<string>>;

  /**
   * Active — `boolean`
   *
   *
   */
  active?: boolean;
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

  /**
   * Attachment — `image`
   *
   *
   */
  attachment?: {
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
    | SanityKeyed<ImageText>
    | SanityKeyed<CenterPiece>
    | SanityKeyed<FeatureSection>
    | SanityKeyed<AboutSection>
    | SanityKeyed<Form>
    | SanityKeyed<ProductSection>
    | SanityKeyed<FilmSection>
    | SanityKeyed<SongSection>
    | SanityKeyed<AlbumSection>
    | SanityKeyed<VideoEmbed>
    | SanityKeyed<CreativeFeature>
    | SanityKeyed<CoveringArtists>
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
  mainNavigation?: Array<SanityKeyedReference<Route | StaticRoute>>;

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
      footerNavigationItem?: Array<
        SanityKeyedReference<
          Product | Route | StaticRoute | Album | Song | Film
        >
      >;
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

/**
 * Album
 *
 *
 */
export interface Album extends SanityDocument {
  _type: "album";

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
    alt?: string;
  };

  /**
   * Blurb — `string`
   *
   * Short intro to the album - will be featured on search and social media. Also used as the description if album is unreleased.
   */
  blurb: string;

  /**
   * Body — `localeBlockContent`
   *
   *
   */
  body: LocaleBlockContent;

  /**
   * Featured Video — `videoEmbed`
   *
   * Enter Youtube or Vimeo video url
   */
  featuredVideo?: VideoEmbed;

  /**
   * Tags — `array`
   *
   *
   */
  tags?: Array<SanityKeyed<string>>;

  /**
   * Main Artist — `string`
   *
   *
   */
  mainArtist: string;

  /**
   * Main Writer — `string`
   *
   *
   */
  mainWriter: string;

  /**
   * Main Producer — `string`
   *
   *
   */
  mainProducer: string;

  /**
   * Featuring Artists — `array`
   *
   *
   */
  featuringArtists?: Array<SanityKeyed<string>>;

  /**
   * Co Writers — `array`
   *
   *
   */
  coWriters?: Array<SanityKeyed<string>>;

  /**
   * Co Producers — `array`
   *
   *
   */
  coProducers?: Array<SanityKeyed<string>>;

  /**
   * Recording Studio — `string`
   *
   *
   */
  recordingStudio?: string;

  /**
   * Track List — `array`
   *
   *
   */
  trackList: Array<SanityKeyed<Track>>;

  /**
   * Genres — `array`
   *
   *
   */
  genres?: Array<SanityKeyed<string>>;

  /**
   * Status — `string`
   *
   *
   */
  status?: "production" | "completed";

  /**
   * Release Date — `date`
   *
   * If status is production it will show the season & if completed, the actual date.
   */
  releaseDate: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug: { _type: "slug"; current: string };

  /**
   * Recognition — `array`
   *
   * Praise, awards, kind words from people of organizations
   */
  recognition?: Array<SanityKeyed<Appraiser>>;
}

/**
 * Song
 *
 *
 */
export interface Song extends SanityDocument {
  _type: "song";

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
  mainImage?: {
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
   * Lyrics — `blockContent`
   *
   *
   */
  lyrics: BlockContent;

  /**
   * Back Story — `blockContent`
   *
   *
   */
  backStory?: BlockContent;

  /**
   * Music Video — `array`
   *
   * Enter Youtube or Vimeo video url
   */
  featuredVideo?: Array<SanityKeyed<VideoEmbed>>;

  /**
   * Covering Artists — `array`
   *
   *
   */
  coveringArtists?: Array<
    SanityKeyed<{
      _type: "artist";
      /**
       * Image — `image`
       *
       *
       */
      thumbnail?: {
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
       * Name — `string`
       *
       *
       */
      name: string;

      /**
       * Album — `string`
       *
       *
       */
      album?: string;
    }>
  >;

  /**
   * Co Writers — `array`
   *
   *
   */
  coWriters?: Array<SanityKeyed<string>>;

  /**
   * Trad Arr. — `array`
   *
   *
   */
  tradArr?: Array<SanityKeyed<string>>;

  /**
   * Single — `boolean`
   *
   *
   */
  isSingle?: boolean;

  /**
   * Genres — `array`
   *
   *
   */
  genres?: Array<SanityKeyed<string>>;

  /**
   * Slug — `slug`
   *
   *
   */
  slug: { _type: "slug"; current: string };

  /**
   * Recognition — `array`
   *
   * Praise, awards, kind words from people of organizations
   */
  recognition?: Array<SanityKeyed<Appraiser>>;
}

/**
 * Film
 *
 *
 */
export interface Film extends SanityDocument {
  _type: "film";

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
   * Movie Background — `file`
   *
   * Will play as in the background of the page hero. Should be no longer than 15s & cut to a smooth loop. Not for a full movie trailer. Max Upload size 10MB
   */
  movieBackground?: { _type: "file"; asset: SanityAsset };

  /**
   * Trailer — `videoEmbed`
   *
   * Enter Youtube or Vimeo video url
   */
  trailer?: VideoEmbed;

  /**
   * Blurb — `string`
   *
   * Short intro to the film - will be featured on search and social media.
   */
  blurb: string;

  /**
   * Story — `blockContent`
   *
   *
   */
  story: BlockContent;

  /**
   * Tags — `array`
   *
   *
   */
  tags?: Array<SanityKeyed<string>>;

  /**
   * Director — `string`
   *
   *
   */
  director: string;

  /**
   * Main Writer — `string`
   *
   *
   */
  writer: string;

  /**
   * Producer — `string`
   *
   *
   */
  producer: string;

  /**
   * Actors — `array`
   *
   *
   */
  featuringActors?: Array<SanityKeyed<string>>;

  /**
   * Co Writers — `array`
   *
   *
   */
  coWriters?: Array<SanityKeyed<string>>;

  /**
   * Co Producers — `array`
   *
   *
   */
  coProducers?: Array<SanityKeyed<string>>;

  /**
   * Status — `string`
   *
   *
   */
  status?: "development" | "production" | "completed";

  /**
   * Release Date — `date`
   *
   * If status is development it will show the season, if production, the month & if completed, the actual date.
   */
  releaseDate?: string;

  /**
   * Available Platforms — `array`
   *
   *
   */
  platforms?: Array<
    SanityKeyed<{
      _type: "platform";
      /**
       * Title — `string`
       *
       *
       */
      title: "youtube" | "netflix" | "mubi" | "store";

      /**
       * Release Date — `date`
       *
       * Will default to main release date if not specified, with same behaviour.
       */
      releaseDate?: string;

      /**
       * link — `url`
       *
       * Not required for movies in our store
       */
      Link?: string;

      /**
       * Film Length — `number`
       *
       *
       */
      filmLengthMinutes: number;
    }>
  >;

  /**
   * Genres — `array`
   *
   *
   */
  genres?: Array<SanityKeyed<string>>;

  /**
   * Slug — `slug`
   *
   *
   */
  slug: { _type: "slug"; current: string };

  /**
   * Image Gallery — `array`
   *
   *
   */
  gallery?: Array<
    SanityKeyed<{
      _type: "mainImage";
      asset: SanityAsset;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;

      /**
       * Alternative text — `string`
       *
       * Important for SEO and accessiblity.
       */
      alt: string;
    }>
  >;

  /**
   * Recognition — `array`
   *
   * Praise, awards, kind words from people of organizations
   */
  recognition?: Array<SanityKeyed<Appraiser>>;
}

/**
 * Creative Content Settings
 *
 *
 */
export interface CreativeConfig extends SanityDocument {
  _type: "creativeConfig";

  /**
   * Featured Film — `reference`
   *
   *
   */
  featuredFilm?: SanityReference<Film>;

  /**
   * Featured Album — `reference`
   *
   *
   */
  featuredAlbum?: SanityReference<Album>;

  /**
   * Featured Song — `reference`
   *
   *
   */
  featuredSong?: SanityReference<Song>;
}

/**
 * Static Route
 *
 *
 */
export interface StaticRoute extends SanityDocument {
  _type: "staticRoute";

  /**
   * Slug — `slug`
   *
   *
   */
  slug: { _type: "slug"; current: string };

  /**
   * title — `string`
   *
   *
   */
  title: string;
}

export type ProductSection = {
  _type: "productSection";
  /**
   * active — `boolean`
   *
   *
   */
  active?: boolean;

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

export type ImageText = {
  _type: "imageText";
  /**
   * active — `boolean`
   *
   *
   */
  active?: boolean;

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
   * Body — `simplePortableText`
   *
   *
   */
  body: SimplePortableText;

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
   * active — `boolean`
   *
   *
   */
  active?: boolean;

  /**
   * Title — `string`
   *
   *
   */
  title: string;

  /**
   * Tagline — `text`
   *
   *
   */
  tagline?: string;

  /**
   * Icon — `image`
   *
   * Used on hero section featured CTAs. Optimal size is 100x100
   */
  icon?: {
    _type: "image";
    asset: SanityAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Internal link — `reference`
   *
   * Use this to link between pages on the website
   */
  route?: SanityReference<Route | Product | StaticRoute | Album | Film | Song>;

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
   * active — `boolean`
   *
   *
   */
  active?: boolean;

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

export type InternalLink = SanityReference<
  Product | Route | StaticRoute | Album | Song | Film
>;

export type Link = {
  _type: "link";
  /**
   * active — `boolean`
   *
   *
   */
  active?: boolean;

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
   * active — `boolean`
   *
   *
   */
  active?: boolean;

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
   * Text Layout — `string`
   *
   * Only affects full screen image layouts
   */
  textLayout?: "left" | "center" | "right";

  /**
   * Feature CTAs — `boolean`
   *
   * Enabling this will make CTA's appear at the bottom of the hero and show the tagline and icon. Best used with >= 2
   */
  featureCtas?: boolean;

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
   * active — `boolean`
   *
   *
   */
  active?: boolean;

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
   * active — `boolean`
   *
   *
   */
  active?: boolean;

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
   * active — `boolean`
   *
   *
   */
  active?: boolean;

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
   * active — `boolean`
   *
   *
   */
  active?: boolean;

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

export type ContactInfo = {
  _type: "contactInfo";
  /**
   * active — `boolean`
   *
   *
   */
  active?: boolean;

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

export type LocaleText = {
  _type: "localeText";
  /**
   * active — `boolean`
   *
   *
   */
  active?: boolean;

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
   * active — `boolean`
   *
   *
   */
  active?: boolean;

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
   * active — `boolean`
   *
   *
   */
  active?: boolean;

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
   * active — `boolean`
   *
   *
   */
  active?: boolean;

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

export type Appraiser = {
  _type: "appraiser";
  /**
   * active — `boolean`
   *
   *
   */
  active?: boolean;

  /**
   * Image — `image`
   *
   *
   */
  thumbnail?: {
    _type: "image";
    asset: SanityAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Image Only? — `boolean`
   *
   *
   */
  imageOnly?: boolean;

  /**
   * Name — `string`
   *
   *
   */
  name: string;

  /**
   * Organization — `string`
   *
   *
   */
  organization?: string;

  /**
   * Quote — `string`
   *
   *
   */
  quote?: string;
};

export type SongSection = {
  _type: "songSection";
  /**
   * active — `boolean`
   *
   *
   */
  active?: boolean;

  /**
   * Song — `reference`
   *
   *
   */
  song?: SanityReference<Song>;

  /**
   * Show All — `boolean`
   *
   * Enabling this will show all songs underneath. Disabling will only show the selected song
   */
  showAll?: boolean;
};

export type AlbumSection = {
  _type: "albumSection";
  /**
   * active — `boolean`
   *
   *
   */
  active?: boolean;

  /**
   * Label — `string`
   *
   *
   */
  label?: string;

  /**
   * Album — `reference`
   *
   *
   */
  album?: SanityReference<Album>;
};

export type FilmSection = {
  _type: "filmSection";
  /**
   * active — `boolean`
   *
   *
   */
  active?: boolean;

  /**
   * Label — `string`
   *
   *
   */
  label?: string;

  /**
   * Status — `string`
   *
   * Show films of the selected status
   */
  status?: "completed" | "production" | "development";
};

export type VideoEmbed = {
  _type: "videoEmbed";
  /**
   * active — `boolean`
   *
   *
   */
  active?: boolean;

  /**
   * URL — `url`
   *
   *
   */
  url?: string;
};

export type CreativeFeature = {
  _type: "creativeFeature";
  /**
   * active — `boolean`
   *
   *
   */
  active?: boolean;

  /**
   * Feature Type? — `string`
   *
   *
   */
  featureType?: "featuredSong" | "featuredAlbum" | "featuredFilm";
};

export type CoveringArtists = {
  _type: "coveringArtists";
  /**
   * active — `boolean`
   *
   *
   */
  active?: boolean;

  /**
   * note — `note`
   *
   *
   */
  note?: Note;

  /**
   * Content — `blockContent`
   *
   * Add a short intro for visitors.
   */
  content: BlockContent;
};

export type Track = {
  _type: "track";
  /**
   * active — `boolean`
   *
   *
   */
  active?: boolean;

  /**
   * Title — `string`
   *
   *
   */
  title: string;

  /**
   * Song — `reference`
   *
   *
   */
  song?: SanityReference<Song>;

  /**
   * Single — `boolean`
   *
   *
   */
  isSingle?: boolean;

  /**
   * Featuring Artists — `array`
   *
   *
   */
  featuringArtists?: Array<SanityKeyed<string>>;

  /**
   * Trad Arr. — `array`
   *
   *
   */
  tradArr?: Array<SanityKeyed<string>>;

  /**
   * Track Length - Minutes — `number`
   *
   *
   */
  trackLengthMinutes: number;

  /**
   * Track Length - Seconds — `number`
   *
   *
   */
  trackLengthSeconds: number;

  /**
   * Preview Length - Seconds — `number`
   *
   *
   */
  previewLengthSeconds?: number;

  /**
   * Preview File — `file`
   *
   *
   */
  previewFile?: { _type: "file"; asset: SanityAsset };
};

export type SimplePortableText = Array<SanityKeyed<SanityBlock>>;

export type BlockContent = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<{
      _type: "image";
      asset: SanityAsset;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
  | SanityKeyed<VideoEmbed>
>;

export type AboutSection = {
  _type: "aboutSection";
  /**
   * active — `boolean`
   *
   *
   */
  active?: boolean;

  /**
   * Label — `string`
   *
   *
   */
  label?: string;
};

export type Documents =
  | Product
  | Popup
  | Vendor
  | Category
  | Artist
  | Social
  | Ad
  | Swag
  | Page
  | Route
  | SiteConfig
  | Person
  | Photographer
  | Album
  | Song
  | Film
  | CreativeConfig
  | StaticRoute;

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type Email = any;

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type Note = any;
