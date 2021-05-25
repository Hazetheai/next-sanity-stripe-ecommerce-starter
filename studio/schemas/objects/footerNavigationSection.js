export default {
  name: "footerNavigationSection",
  title: "Footer Navigation Section",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      title: "Footer navigation items",
      name: "footerNavigationItem",
      type: "array",
      validation: (Rule) => [
        Rule.max(5).warning("Are you sure you want more than 5 items?"),
        Rule.unique().error("You have duplicate menu items"),
      ],

      of: [
        {
          type: "reference",
          to: [
            { type: "product" },
            { type: "route" },
            { type: "staticRoute" },
            { type: "album" },
            { type: "song" },
            { type: "film" },
          ],
        },
      ],
    },
  ],
};
