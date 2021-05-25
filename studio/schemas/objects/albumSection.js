export default {
  name: "albumSection",
  title: "Album Section",
  type: "object",
  preview: {
    select: {
      label: "label",
      album: "album.title",
    },
    prepare({ label, album }) {
      return {
        title: `Album - ${album}`,
        subtitle: label,
      };
    },
  },
  fields: [
    {
      name: "label",
      title: "Label",
      type: "string",
    },
    {
      name: "album",
      title: "Album",
      type: "reference",
      to: [{ type: "album" }],
    },
  ],
};
