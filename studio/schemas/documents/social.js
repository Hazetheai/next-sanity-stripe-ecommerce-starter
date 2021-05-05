import { MdPeople } from "react-icons/md";
export default {
  name: "social",
  type: "document",
  title: "Social",
  icon: MdPeople,
  fields: [
    {
      name: "channel",
      type: "string",
      options: {
        list: ["twitter", "instagram", "linkedin", "youtube", "facebook"],
      },
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Handle",
      name: "handle",
      description: 'No "@" symbol required.',
      type: "string",
    },
    {
      name: "attachment",
      type: "image",
      title: "Attachment",
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
};
