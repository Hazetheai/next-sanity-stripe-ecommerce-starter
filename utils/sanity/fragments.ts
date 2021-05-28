export const F_INTERNAL_LINK_FIELDS = `
"slug": @->slug.current,
"handle": @->handle,
"internalLinkType" : @->_type,
`;
export const F_BODY_WITH_ADD_FIELDS = `
body[]{
  ...,
 _type == 'image' => {
    ...,
     'creditName' : photoCredits->name,
    'creditUrl' : photoCredits->website,
    'creditInstagram' : photoCredits->instagram
},
  markDefs[]{
      ...,
      _type == "internalLink" => {
        ${F_INTERNAL_LINK_FIELDS}
        }
    }
  },
`;

export const F_ALL_MEDIA_FIELDS = `
...,
trackList[]{
  ...,
  song->,
  'previewUrl': previewFile.asset->url,
},
'movieBackgroundURL':movieBackground.asset->url,
'product' : *[_type == "product" && sourceMedia._ref == ^._id][0]{
...
}

`;

export const F_CREATIVE_FEATURE = `
_type == "creativeFeature" => {
  ...,
  'feature': *[_type== "creativeConfig"][1]{
    featuredAlbum->{
      ${F_ALL_MEDIA_FIELDS}
  },
    featuredSong->,
    featuredFilm->{
      ${F_ALL_MEDIA_FIELDS}
    }
}
},
`;

export const F_FEATURED_CONTENT = `
_type == "albumSection" => {
  "albumProduct": album->{
    ${F_ALL_MEDIA_FIELDS}
  }
},
_type == "filmSection" => {
  "featuredFilm": *[_type== "creativeConfig"][1]{"_ref": featuredFilm._ref},
  "films": *[_type=="film" && status == ^.status ][]{
      ${F_ALL_MEDIA_FIELDS}
  },
},
_type == "songSection" => {
  'featuredSong': song->{
    ...
  },
     showAll == true => {
      'songs' : *[_type == "song"]{
        ...
      }
    }
},

`;

export const F_COVERING_ARTISTS = `
_type == "coveringArtists" => {
  "songs": *[_type== "song" && count(coveringArtists) > 0]{
		title,
    slug,
    coveringArtists
  }
 },
`;
