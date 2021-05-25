export default {
  name: "appraiser",
  title: "Appraiser",
  type: "object",
  fields: [
    {
      name: "thumbnail",
      title: "Image",
      type: "image",
      // options: {
      //   hotspot: true,
      // },
    },
    {
      name: "imageOnly",
      title: "Image Only?",
      type: "boolean",
    },
    {
      name: "name",
      title: "Name",
      type: "string",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "organization",
      title: "Organization",
      type: "string",
    },
    {
      name: "quote",
      title: "Quote",
      type: "string",
    },
  ],
};
