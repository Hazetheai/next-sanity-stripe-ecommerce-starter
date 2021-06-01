export default {
  title: "Call to action",
  name: "cta",
  type: "object",
  validation: (Rule) =>
    Rule.custom(
      (fields = {}) =>
        !fields.route || !fields.link || "Only one link type is allowed"
    ),
  fieldsets: [
    {
      title: "Link",
      name: "link",
    },
  ],
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "tagline",
      title: "Tagline",
      type: "text",
    },
    {
      name: "icon",
      title: "Icon",
      type: "image",
      description:
        "Used on hero section featured CTAs. Optimal size is 100x100",
    },
    {
      title: "Internal link",
      description: "Use this to link between pages on the website",
      name: "route",
      type: "reference",
      to: [
        { type: "route" },
        { type: "product" },
        { type: "staticRoute" },
        { type: "album" },
        { type: "film" },
        { type: "song" },
      ],
      fieldset: "link",
    },
    {
      title: "External link",
      name: "link",
      type: "url",
      fieldset: "link",
    },
  ],
  preview: {
    select: {
      title: "title",
      routeTitle: "route.title",
      slug: "route.slug.current",
      link: "link",
    },
    prepare({ title, routeTitle = "", slug, link }) {
      const subtitleExtra = slug
        ? `Slug:/${slug}/`
        : link
        ? `External link: ${link}`
        : "Not set";
      return {
        title: `${title}`,
        subtitle: `${routeTitle} ${subtitleExtra}`,
      };
    },
  },
};
