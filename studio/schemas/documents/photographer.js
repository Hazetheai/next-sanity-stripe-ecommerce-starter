export default {
  name: "photographer",
  title: "Photographers",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
      codegen: { required: true },
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },

    {
      name: "website",
      title: "Photographer Website",
      type: "url",
    },
    {
      name: "instagram",
      title: "Photographer Instagram Handle",
      description: 'No "@"',
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      // options: {
      //     hotspot: true,
      // },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          codegen: { required: true },
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};
