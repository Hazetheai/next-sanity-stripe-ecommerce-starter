import { MdPersonOutline } from "react-icons/md";

export default {
  name: "artist",
  type: "document",
  title: "Artist",
  description: "A monikor, artist name, band etc.",
  icon: MdPersonOutline,
  fields: [
    {
      name: "name",
      type: "string",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "tagline",
      type: "string",
    },

    {
      name: "profileImage",
      type: "image",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "bio",
      title: "Bio",
      type: "blockContent",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
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
