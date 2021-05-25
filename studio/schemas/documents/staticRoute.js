import { MdLink } from "react-icons/md";

export default {
  name: "staticRoute",
  type: "document",
  title: "Static Route",
  // hidden: true,
  icon: MdLink,
  fields: [
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      readOnly: true,
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      title: "title",
      type: "string",
      readOnly: true,
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      slug: "slug.current",
      pageTitle: "title",
    },
    prepare({ slug, pageTitle }) {
      return {
        title: slug === "/" ? "/" : `/${slug}`,
        subtitle: `${pageTitle}`,
      };
    },
  },
};
