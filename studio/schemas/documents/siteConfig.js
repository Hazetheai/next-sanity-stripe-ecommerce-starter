import footerNavigationSection from "../objects/footerNavigationSection";

export default {
  name: "siteConfig",
  type: "document",
  title: "Site configuration",
  // https://www.sanity.io/docs/experimental/ui-affordances-for-actions
  fieldsets: [{ name: "footer", title: "Footer" }],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Site title",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      type: "text",
      title: "Site description",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "URL",
      name: "url",
      type: "url",
      description: "The main site url. Used to create canonical url",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    // {
    //   name: "frontpage",
    //   type: "reference",
    //   description: "Choose page to be the frontpage",
    //   to: { type: "page" },
    // },
    {
      title: "Site language",
      name: "lang",
      type: "string",
    },
    {
      title: "Brand logo",
      description:
        "Best choice is to use an SVG where the color are set with currentColor",
      name: "logo",
      type: "image",
      // options: { hotspot: true },
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
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
      title: "Social Image",
      description: "The default image when sharing on social media",
      name: "socialImage",
      type: "image",
      // options: { hotspot: true },
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
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
      title: "Main navigation",
      name: "mainNavigation",
      description: "Select pages for the top menu",
      validation: (Rule) => [
        Rule.max(5).warning("Are you sure you want more than 5 items?"),
        Rule.unique().error("You have duplicate menu items"),
      ],
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "route" }, { type: "staticRoute" }],
        },
      ],
    },
    {
      title: "Footer navigation items",
      name: "footerNavigation",
      type: "array",
      validation: (Rule) => [
        Rule.max(4).warning("Are you sure you want more than 4 items?"),
        Rule.unique().error("You have duplicate menu items"),
      ],
      fieldset: "footer",
      of: [footerNavigationSection],
    },
    // {
    //   name: "footerText",
    //   type: "simplePortableText",
    //   fieldset: "footer",
    // },
    {
      name: "contactEmail",
      title: "Contact Email",
      type: "string",
    },
    {
      name: "contactPhone",
      title: "Contact Phone",
      type: "string",
    },
    {
      name: "contactAddress",
      title: "Address",
      type: "text",
    },
  ],
};
