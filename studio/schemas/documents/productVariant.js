export default {
  title: "Product variant",
  name: "productVariant",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Name",
      name: "name",
      type: "string",
      // codegen: { required: true },
      // validation: (Rule) => Rule.required(),
      hidden: true,
      readOnly: true,
    },
    {
      title: "Weight in grams",
      name: "grams",
      type: "number",
    },
    {
      title: "Price",
      name: "price",
      type: "number",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "SKU",
      name: "sku",
      type: "string",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Taxable",
      name: "taxable",
      type: "boolean",
    },
    {
      name: "currency",
      title: "Currency",
      type: "string",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: "EUR", value: "eur" },
          { title: "USD", value: "usd" },
        ],
      },
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          // fields: [
          //   {
          //     name: "alt",
          //     type: "string",
          //     title: "Alternative text",
          //     codegen: { required: true },
          //     validation: (Rule) => Rule.required(),
          //     description: "Important for SEO and accessiblity.",
          //     options: {
          //       isHighlighted: true,
          //     },
          //   },
          // ],
          // options: {
          //   hotspot: true,
          // },
        },
      ],
    },
  ],
};
