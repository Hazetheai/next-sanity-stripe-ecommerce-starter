export default {
  name: "songSection",
  title: "Song Section",
  type: "object",
  preview: {
    select: {
      song: "song.title",
      showAll: "showAll",
    },
    prepare({ song, showAll }) {
      return {
        title: showAll ? `All Songs - Featured: ${song}` : `Song - ${song}`,
      };
    },
  },
  fields: [
    {
      name: "song",
      title: "Song",
      type: "reference",
      to: [{ type: "song" }],
    },
    {
      name: "showAll",
      title: "Show All",
      description:
        "Enabling this will show all songs underneath. Disabling will only show the selected song",
      type: "boolean",
    },
  ],
};
