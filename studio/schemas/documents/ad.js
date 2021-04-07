import { MdInsertEmoticon } from "react-icons/md";

export default {
  name: "ad",
  type: "document",
  title: "Ad",
  icon: MdInsertEmoticon,
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "tagline",
      type: "text",
      title: "Tagline",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "illustration",
      type: "figure",
      title: "Illustration",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
  ],
};
