export default {
  type: "object",
  name: "centerPiece",
  title: "Centerpiece",
  description: "Center aligned content",
  fields: [
    {
      name: "label",
      type: "string",
      title: "Label",
    },
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "signup",
      title: "Signup Form",
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
    {
      name: "text",
      type: "blockContent",
      title: "Text",
    },
  ],
  preview: {
    select: {
      heading: "heading",
    },
    prepare({ heading }) {
      return {
        title: `${heading}`,
        subtitle: "Centerpiece",
      };
    },
  },
};
