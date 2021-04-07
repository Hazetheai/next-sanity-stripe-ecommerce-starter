export default {
  type: "object",
  name: "featureSection",
  title: "Feature Section",
  fields: [
    {
      name: "heading1",
      type: "string",
      title: "Heading 1",
    },
    {
      name: "tagline1",
      type: "simplePortableText",
      title: "Tagline 1",
    },
    {
      name: "heading2",
      type: "string",
      title: "Heading 2",
    },
    {
      name: "tagline2",
      type: "simplePortableText",
      title: "Tagline 2",
    },
    {
      name: "heading3",
      type: "string",
      title: "Heading 3",
    },
    {
      name: "tagline3",
      type: "simplePortableText",
      title: "Tagline 3",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      // options: {
      //   hotspot: true,
      // },
    },
    {
      name: "ctas",
      type: "array",
      title: "Call to actions",
      of: [
        {
          title: "Call to action",
          type: "cta",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "heading1",
      media: "image",
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: "Feature section",
        media,
      };
    },
  },
};
