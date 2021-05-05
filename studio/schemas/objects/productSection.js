export default {
  name: "productSection",
  title: "Product Section",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "tagline",
      title: "Tagline",
      type: "string",
    },
    {
      name: "products",
      title: "Products",
      type: "array",
      of: [{ type: "reference", to: [{ type: "product" }] }],
    },
    // {
    //   name: "productCategories",
    //   title: "Product Categories",
    //   description:
    //     "Setting this will show all products in the selected category - Overriding any individual products set above",
    //   type: "reference",
    //   to: [{ type: "category" }],
    // },
  ],
};
