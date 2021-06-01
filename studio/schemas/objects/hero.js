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
      name: "textLayout",
      title: "Text Layout",
      description: "Only affects full screen image layouts",
      type: "string",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Center", value: "center" },
          { title: "Right", value: "right" },
        ],
      },
    },
    {
      name: "featureCtas",
      title: "Feature CTAs",
      description:
        "Enabling this will make CTA's appear at the bottom of the hero and show the tagline and icon. Best used with >= 2",
      type: "boolean",
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
