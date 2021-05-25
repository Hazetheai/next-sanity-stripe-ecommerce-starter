import groq from "groq";
import {
  F_BODY_WITH_ADD_FIELDS,
  F_COVERING_ARTISTS,
  F_CREATIVE_FEATURE,
  F_FEATURED_CONTENT,
} from "./fragments";

export const Q_ROUTE_BY_SLUG = groq`
*[_type == "route" && slug.current == $slug][0]{
  page->{
  ...,
  content[]{
    ...,
    ${F_FEATURED_CONTENT}
    ${F_CREATIVE_FEATURE}
    ${F_COVERING_ARTISTS}
    ${F_BODY_WITH_ADD_FIELDS}
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
export const Q_ROUTE_BY_PARTIAL_SLUG = Q_ROUTE_BY_SLUG.replace(
  /==\s\$slug/,
  "match $slug"
);
// "handle":*[_id == @._ref]{handle},
// 'internalLinkType' : *[_id == @._ref]{_type},
// _type in ["album","product","film","product","route","staticRoute"]
export const Q_ALL_PRODUCTS = groq`
*[_type == "product"]{
    ...
    }
`;
export const Q_ALL_ALBUMS = groq`
*[_type == "album"]{
    ...
    }
`;
export const Q_ALL_FILMS = groq`
*[_type == "film"]{
   'movieBackgroundURL':movieBackground.asset->url,
    ...
    }
`;
export const Q_FILMS_BY_STATUS = groq`
*[_type=="film" && status == $status]{
  'movieBackgroundURL':movieBackground.asset->url,
  ...
}
`;

export const Q_SONG = groq`
*[_type=="song" && slug.current == $slug][0]{
  ...,
  'albums': *[_type=="album" && references(^._id) ]{title,slug, mainImage,mainArtist,status}
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
export const Q_CREATIVE_CONFIG = groq`
*[_type=="creativeConfig"][1]{
  featuredAlbum->,
  featuredFilm->,
  featuredSong->
}
`;

export const Q_SOURCE_MEDIA_PRODUCT = groq`
*[_type == "film" && slug.current == $slug][0]{
   'movieBackgroundURL':movieBackground.asset->url,
    slug,
    'product' : *[_type == "product" && sourceMedia._ref == ^._id][0]{
    ...
  }
}
`;
export const Q_SOURCE_MEDIA_WITH_PRODUCT = groq`
*[_type == $type && slug.current == $slug][0]{
	...,
  trackList[]{
    ...,
    song->
  },
  'movieBackgroundURL':movieBackground.asset->url,
  'product' : *[_type == "product" && sourceMedia._ref == ^._id][0]{
  ...
  }
}
`;

export const Q_ALL_SOURCE_MEDIA_WITH_PRODUCTS = groq`
*[_type == $type]{
	...,
  'product' : *[_type == "product" && sourceMedia._ref == ^._id][0]{
  ...
}
}
`;

export const Q_ALBUM_INDEX_PAGE = groq`

*[_type=="creativeConfig"][1]{
  featuredAlbum->{
    ...,
    'product' : *[_type == "product" && sourceMedia._ref == ^._id][0]{
    ...
  }
},
'albums':*[_type == "album" && _id != ^.featuredAlbum._ref]{
  ...,
  'product' : *[_type == "product" && sourceMedia._ref == ^._id][0]{
    ...
  }
}
}

`;
export const Q_FILM_INDEX_PAGE = groq`

*[_type=="creativeConfig"][1]{
  featuredFilm->{
    ...,
    'product' : *[_type == "product" && sourceMedia._ref == ^._id][0]{
    ...
  }
},
'films':*[_type == "film" && _id != ^.featuredFilm._ref]{
   'movieBackgroundURL':movieBackground.asset->url,
  ...,
  'product' : *[_type == "product" && sourceMedia._ref == ^._id][0]{
    ...
  }
}
}
`;

export const Q_SONG_INDEX_PAGE = groq`
*[_type=="creativeConfig"][1]{
  featuredSong->,
  'songs':*[_type == "song" && _id != ^.featuredSong._ref]{
    ...
  }
}
`;
