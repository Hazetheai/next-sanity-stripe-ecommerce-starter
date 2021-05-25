import photoCredits from "./photoCredits";

export default {
  name: "imageText",
  title: "Text with Image",
  type: "object",
  description: "Freeform text with an image next to it.",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      // description: 'Organisational purposes only',
      // validation: (Rule) => Rule.required(),
      // codegen: { required: true },
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: (doc, { parent }) => parent && parent.title,
        maxLength: 96,
      },
    },
    {
      name: "body",
      title: "Body",
      type: "simplePortableText",
      validation: (Rule) => Rule.required(),
      codegen: { required: true },
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      // options: {
      //     hotspot: true,
      // },
      validation: (Rule) => Rule.required(),
      codegen: { required: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          validation: (Rule) => Rule.required(),
          codegen: { required: true },
          isHighlighted: true,
        },
        {
          name: "imageFit",
          title: "Image Fit",
          type: "string",
          description:
            'How would you like the image to fit? 💡 "Cover" Recommended',
          validation: (Rule) => Rule.required(),
          codegen: { required: true },
          isHighlighted: true,
          options: {
            list: [
              { title: "Contain", value: "contain" },
              { title: "Cover", value: "cover" },
            ],
            layout: "radio",
          },
        },
        {
          name: "imagePosition",
          title: "Image Position",
          type: "string",
          description:
            'How would you like the image to be positioned? 💡 "Center" Recommended',
          validation: (Rule) => Rule.required(),
          codegen: { required: true },
          isHighlighted: true,
          options: {
            list: [
              {
                title: "Left",
                value: "left",
              },
              {
                title: "Center",
                value: "center",
              },
              {
                title: "Right",
                value: "right",
              },
              {
                title: "Top",
                value: "top",
              },
              {
                title: "Bottom",
                value: "bottom",
              },
            ],
            layout: "radio",
          },
        },
        {
          name: "imageOrientation",
          title: "Image Orientation",
          type: "string",
          description:
            "Which side for the image? 💡 Alternating ajacent items recommended",
          validation: (Rule) => Rule.required(),
          codegen: { required: true },
          isHighlighted: true,
          options: {
            list: [
              {
                title: "Left",
                value: "left",
              },
              {
                title: "Right",
                value: "right",
              },
            ],
            layout: "radio",
          },
        },
        // {
        //   name: "lightbox",
        //   title: "Lightbox",
        //   type: "boolean",
        //   description: "Allow the image to be clicked and show in a lightbox?",
        // },
        photoCredits,
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      body: "body",
      media: "image",
    },
    prepare({ title, body, media }) {
      const block = (body || []).find((blk) => blk._type === "block");

      return {
        title: `Image & Text${title ? " - " + title : ""}`,
        subtitle: block
          ? block.children
              .filter((child) => child._type === "span")
              .map((span) => span.text)
              .join("")
          : "No title",
        media,
      };
    },
  },
};
