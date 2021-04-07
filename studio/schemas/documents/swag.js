import { MdWhatshot } from "react-icons/md";

export default {
  name: "swag",
  type: "document",
  title: "Swag",
  icon: MdWhatshot,
  fields: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "decoration",
      type: "object",
      fields: [
        {
          name: "heading",
          type: "string",
        },
        {
          name: "tagline",
          type: "string",
        },
        {
          name: "illustration",
          type: "image",
          // options: { hotspot: true },
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
      ],
    },
    {
      name: "product",
      type: "reference",
      to: [
        {
          type: "product",
        },
      ],
    },
  ],
};
