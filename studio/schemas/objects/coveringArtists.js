export default {
  name: "coveringArtists",
  title: "Covering Artists",
  type: "object",
  description:
    "Will display a list of all the artists added under Covering Artists in your songs.",
  preview: {
    // select: {
    //   title: 'title',
    //   subtitle: 'subtitle',
    //   media: 'image',
    // },
    prepare({ title, subtitle, media }) {
      return {
        title: `Covering Artists`,
        // subtitle: `${subtitle}`,
        // media,
      };
    },
  },
  fields: [
    {
      name: "note",
      type: "note",
      options: {
        message:
          "Will display a list of all the artists added under Covering Artists in your songs.",
      },
    },

    {
      name: "content",
      title: "Content",
      type: "blockContent",
      description: "Add a short intro for visitors.",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    // {
    //   name: "display",
    //   title: "Display",
    //   type: "string",
    //   options: {
    //     list: ["list", "grid"],
    //     layout: "radio",
    //     direction: "horizontal",
    //   },
    // },
  ],
};
