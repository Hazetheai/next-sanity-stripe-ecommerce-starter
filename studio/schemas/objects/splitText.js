export default {
  name: "splitText",
  type: "object",
  title: "Split Text",
  description:
    "Two blocks of content, side by side. Try and keep them the same length",
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
    },
    prepare({ title, left, right }) {
      const block = (left || []).find((blk) => blk._type === "block");

      return {
        title: `Split Text${title ? " - " + title : ""}`,
        subtitle: block
          ? block.children
              .filter((child) => child._type === "span")
              .map((span) => span.text)
              .join("")
          : "No body text",
      };
    },
  },
};
