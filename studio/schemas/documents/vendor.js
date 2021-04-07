export default {
  name: "vendor",
  title: "Vendor",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "logo",
      title: "logo",
      type: "image",
      // options: { hotspot: true },
      // fields: [
      //   {
      //     name: "alt",
      //     type: "string",
      //     title: "Alternative text",
      //     codegen: { required: true },
      //     validation: (Rule) => Rule.required(),
      //     description: "Important for SEO and accessiblity.",
      //     options: {
      //       isHighlighted: true,
      //     },
      //   },
      // ],
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "logo",
    },
  },
};
