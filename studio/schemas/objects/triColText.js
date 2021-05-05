export default {
  name: "splitText",
  type: "object",
  title: "Triple Column Text",
  description:
    "Three blocks of content, side by side. Try and keep them the same length",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      // description: 'Organisational purposes only',
      // validation: (Rule) => Rule.required(),
      // codegen: { required: true },
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: (doc, { parent }) => parent && parent.title,
        maxLength: 96,
      },
    },
    {
      name: "left",
      title: "Left",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
      codegen: { required: true },
    },
    {
      name: "center",
      title: "Center",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
      codegen: { required: true },
    },
    {
      name: "right",
      title: "Right",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
      codegen: { required: true },
    },
  ],
  preview: {
    select: {
      title: "title",
      left: "left",
      center: "center",
      right: "right",
    },
    prepare({ title, left, center, right }) {
      const blockL = (left || []).find((blk) => blk._type === "block");
      const blockR = (left || []).find((blk) => blk._type === "block");
      const blockC = (left || []).find((blk) => blk._type === "block");

      return {
        title: `Triple Column Text${title ? " - " + title : ""}`,
        subtitle: blockL
          ? blockL.children
              .filter((child) => child._type === "span")
              .map((span) => span.text)
              .join("")
          : "No body text",
      };
    },
  },
};
