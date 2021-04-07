import groq from "groq";

export const Q_ROUTE_BY_SLUG = groq`
*[_type == "route" && slug.current == $slug][0]{
    page->{
    ...,
    content[]{
      ...,
      ctas[]{
        ...,
        "route": route->slug
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
