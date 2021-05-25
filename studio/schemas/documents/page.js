export default {
  name: "page",
  type: "document",
  title: "Page",
  fieldsets: [
    {
      title: "SEO & metadata",
      name: "metadata",
    },
  ],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "content",
      type: "array",
      title: "Page sections",
      of: [
        { type: "hero" },
        { type: "imageText" },
        { type: "centerPiece" },
        { type: "featureSection" },
        { type: "form" },
        { type: "productSection" },
        { type: "filmSection" },
        { type: "songSection" },
        { type: "albumSection" },
        { type: "videoEmbed" },
        { type: "creativeFeature" },
        { type: "coveringArtists" },
      ],
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "This description populates meta-tags on the webpage",
      fieldset: "metadata",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "openGraphImage",
      type: "image",
      title: "Open Graph Image",
      description: "Image for sharing previews on Facebook, Twitter etc.",
      fieldset: "metadata",
      // options: { hotspot: true },
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
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "openGraphImage",
    },
  },
};
