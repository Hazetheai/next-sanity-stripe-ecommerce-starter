export default {
  name: "filmmakerFeature",
  title: "Filmmaker Feature",
  type: "object",
  preview: {
    select: {
      label: "label",
    },
    prepare({ label }) {
      return {
        title: `Featured Film`,
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
  ],
};
