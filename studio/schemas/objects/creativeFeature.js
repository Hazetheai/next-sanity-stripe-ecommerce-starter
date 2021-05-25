export default {
  name: "creativeFeature",
  title: "Creative Feature",
  type: "object",
  preview: {
    select: {
      featureType: "featureType",
    },
    prepare({ featureType }) {
      return {
        title: `Featured ${featureType.replace(/featured/, "")}`,
      };
    },
  },
  fields: [
    {
      name: "featureType",
      title: "Feature Type?",
      type: "string",
      options: {
        list: [
          { title: "Song", value: "featuredSong" },
          { title: "Album", value: "featuredAlbum" },
          { title: "Film", value: "featuredFilm" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
    },
  ],
};
