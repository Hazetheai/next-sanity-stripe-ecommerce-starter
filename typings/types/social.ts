export enum PageType {
  website = "website",
  article = "article",
  journal = "journal",
}

export enum TWPageType {
  summary = "summary",
  photo = "photo",
  video = "video",
  product = "product",
  app = "app",
  gallery = "gallery",
}
export enum RobotsContent {
  follow = "follow",
  index = "index",
  no_follow = "nofollow",
  no_index = "noindex",
}

export type MetaTags = {
  title: string;
  author?: string;
  description: string;
  type: PageType;
  og_type?: PageType;
  image: string;
  robots: string;
  og_title?: string;
  og_description?: string;
  og_URL?: string;
  canonical: string;
  og_image?: string;
  og_site_name?: string;
  twitter_card?: string;
  twitter_description?: string;
  twitter_site?: string;
  twitter_domain?: string;
  twitter_img?: string;
  logo?: string;
};

export type ProductMetaTags = {
  canonical: string;
  description: string;
  image: string;
  robots: string;
  title: string;
  type: PageType;
};
