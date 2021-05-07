import { MdLooks } from "react-icons/md";

export default {
  name: "act",
  type: "document",
  title: "Act",
  description: "A monikor, artist name, band etc.",
  icon: MdLooks,
  fields: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "tagline",
      type: "string",
    },

    {
      name: "logo",
      type: "image",

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
      name: "members",
      title: "Members",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "active",
      title: "Active",
      type: "boolean",
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "tagline",
      media: "logo",
    },
  },
};
