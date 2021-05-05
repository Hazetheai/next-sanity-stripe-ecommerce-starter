export default {
  type: "object",
  name: "hero",
  title: "Hero",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "tagline",
      type: "simplePortableText",
      title: "Tagline",
    },
    {
      name: "backgroundImage",
      type: "image",
      title: "Background image",
      // options: {
      //   hotspot: true,
      // },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          codegen: { required: true },
          validation: (Rule) => Rule.required(),
          description: "Important for SEO and accessiblity.",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: "layout",
      title: "Image Layout",
      type: "string",
      options: {
        list: [
          { title: "Image Only", value: "imageOnly" },
          { title: "Framed", value: "framed" },
          { title: "Half Screen", value: "halfScreen" },
          { title: "Full Screen", value: "fullScreen" },
        ],
      },
    },
    {
      name: "ctas",
      type: "array",
      title: "Call to actions",
      of: [
        {
          title: "Call to action",
          type: "cta",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "heading",
      media: "backgroundImage",
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: "Hero section",
        media,
      };
    },
  },
};
