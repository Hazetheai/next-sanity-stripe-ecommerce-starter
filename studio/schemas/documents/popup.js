import { MdLocationOn } from "react-icons/md";

export default {
  name: "popup",
  type: "document",
  title: "Popup Shop",
  icon: MdLocationOn,
  fields: [
    {
      name: "name",
      type: "string",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "location",
      type: "geopoint",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "openingHours",
      type: "object",
      title: "Opening hours",
      fields: [
        {
          name: "from",
          type: "datetime",
        },
        {
          name: "to",
          type: "datetime",
        },
      ],
    },
  ],
};
