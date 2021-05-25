export default {
  name: "creativeConfig",
  type: "document",
  title: "Creative Content Settings",
  fields: [
    {
      name: "featuredFilm",
      title: "Featured Film",
      type: "reference",

      to: [{ type: "film" }],
    },
    {
      name: "featuredAlbum",
      title: "Featured Album",
      type: "reference",

      to: [{ type: "album" }],
    },
    {
      name: "featuredSong",
      title: "Featured Song",
      type: "reference",

      to: [{ type: "song" }],
    },
    // {
    //   name: "featuredComposition",
    //   title: "Featured Composition",
    //   type: "reference",

    //   to: [{ type: "song" }, { type: "album" }],
    // },
  ],
};
