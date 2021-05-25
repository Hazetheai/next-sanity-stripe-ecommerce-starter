import { capitalize } from "../../utils/stringFuncs";

export default {
  name: "filmSection",
  title: "Film Section",
  type: "object",
  preview: {
    select: {
      label: "label",
      status: "status",
    },
    prepare({ label, status }) {
      return {
        title:
          status === "completed"
            ? `${capitalize(status)} films`
            : `Films in ${status}`,
        subtitle: label,
      };
    },
  },
  fields: [
    {
      name: "label",
      title: "Label",
      type: "string",
    },
    {
      name: "status",
      title: "Status",
      type: "string",
      description: "Show films of the selected status",
      options: { list: ["completed", "production", "development"] },
    },
  ],
};
