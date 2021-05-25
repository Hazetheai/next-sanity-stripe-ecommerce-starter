import groq from "groq";

const mmm = groq`

page->{

    content[]{
      ...,
          _type == "albumSection" => {
                  "albumProduct": album->{
                  ...,
               'product' : *[_type == "product" && sourceMedia._ref == ^._id][0]{
                ...
              }
                }
            },
              _type == "filmSection" => {
          "featuredFilm": *[_type== "creativeConfig"][1]{"_ref": featuredFilm._ref},
                  "films": *[_type=="film" && status == ^.status ][]{
                      ...,
                       'product' : *[_type == "product" && sourceMedia._ref == ^._id][0]{
                    ...
                  }
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
          _type == "coveringArtists" => {
            content,
           "songs": *[_type== "song" && count(coveringArtists) > 0]{
                          title,
             coveringArtists
           }
          },
          }
      }

`;
