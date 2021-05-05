export default {
  name: "form",
  title: "Form",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.max(80),
    },
    {
      name: "tagline",
      title: "Tagline",
      type: "string",
      validation: (Rule) => Rule.max(150),
    },
    {
      name: "formType",
      title: "Form Type",
      type: "string",
      validation: (Rule) => Rule.required(),
      codegen: { required: true },
      options: {
        list: ["newsletter", "contact"],
      },
    },
  ],
};
