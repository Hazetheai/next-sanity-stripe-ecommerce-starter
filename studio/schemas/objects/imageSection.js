export default {
  type: "object",
  name: "imageSection",
  title: "Image with text",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "label",
      type: "string",
      title: "Label",
    },
    {
      name: "text",
      type: "simplePortableText",
      title: "Text",
    },
    {
      name: "image",
      type: "figure",
      title: "Image",
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
      name: "cta",
      type: "cta",
      title: "Call to action",
    },
  ],
  preview: {
    select: {
      heading: "heading",
      subtitle: "label",
      media: "image",
    },
    prepare({ heading, media }) {
      return {
        title: `Image: ${heading}`,
        subtitle: "Image section",
        media,
      };
    },
  },
};
