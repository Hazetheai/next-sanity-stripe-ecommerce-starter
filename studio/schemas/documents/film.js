import { MdMovieCreation } from "react-icons/md";

export default {
  name: "film",
  title: "Film",
  type: "document",
  icon: MdMovieCreation,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Main image",
      name: "mainImage",
      type: "image",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
      // options: {
      //   hotspot: true,
      // },
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
      name: "story",
      title: "Story",
      type: "blockContent",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Tags",
      name: "tags",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        layout: "tags",
      },
    },
    {
      name: "director",
      title: "Director",
      type: "string",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "writer",
      title: "Main Writer",
      type: "string",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "producer",
      title: "Producer",
      type: "string",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "featuringActors",
      title: "Actors",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "coWriters",
      title: "Co Writers",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "coProducers",
      title: "Co Producers",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "In Development", value: "development" },
          { title: "In Production", value: "production" },
          { title: "Completed", value: "completed" },
        ],
        layout: "radio",
      },
    },
    {
      name: "platforms",
      title: "Available Platforms",
      type: "array",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
      of: [
        {
          name: "platform",
          title: "Platform",
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
              codegen: { required: true },
              validation: (Rule) => Rule.required(),
              options: {
                list: [
                  { title: "Youtube Premium", value: "youtube" },
                  { title: "Netflix", value: "netflix" },
                  { title: "Mubi", value: "mubi" },
                  { title: "Store", value: "store" },
                ],
              },
            },
            {
              title: "link",
              name: "Link",
              type: "url",
              description: "Not required for movies in our store",
            },
            {
              name: "releaseDate",
              title: "Release Date",
              type: "date",
              description:
                "If status is development it will show the season, if production, the month & if completed, the actual date.",
            },

            {
              name: "filmLengthMinutes",
              title: "Film Length",
              type: "number",
              codegen: { required: true },
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: "genres",
      title: "Genres",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        layout: "tags",
      },
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "recongnition",
      title: "Recognition",
      description: "Praise, awards, kind words from people of organizations",
      type: "array",
      of: [{ type: "appraiser" }],
    },
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "director",
      media: "mainImage",
    },
  },
};
