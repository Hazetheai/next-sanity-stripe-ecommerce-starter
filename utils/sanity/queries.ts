import groq from "groq";

export const Q_ROUTE_BY_SLUG = groq`
*[_type == "route" && slug.current == $slug][0]{
  page->{
  ...,
  content[]{
    ...,
    products[]->{
      ...
    },
    ctas[]{
      ...,
      "route": route->
    }
  }
}
}
`;

export const Q_ALL_PRODUCTS = groq`
*[_type == "product"]{
    ...
    }
`;

export const Q_SITE_CONFIG = groq`
*[_type == "siteConfig"]{
	...,
  mainNavigation[]->{...,page->},
  footerNavigation[]->{...,page->},
	frontPage->,
}
`;
