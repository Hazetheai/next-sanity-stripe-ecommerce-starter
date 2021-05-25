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
      name: "movieBackground",
      title: "Movie Background",
      description:
        "Will play as in the background of the page hero. Should be no longer than 15s & cut to a smooth loop. Not for a full movie trailer. Max Upload size 10MB",
      type: "file",
      accept: "video/*",
    },
    {
      name: "trailer",
      title: "Trailer",
      description: "Enter Youtube or Vimeo video url",
      type: "videoEmbed",
    },
    {
      name: "blurb",
      title: "Blurb",
      type: "string",
      description:
        "Short intro to the film - will be featured on search and social media.",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
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
      name: "releaseDate",
      title: "Release Date",
      type: "date",
      description:
        "If status is development it will show the season, if production, the month & if completed, the actual date.",
    },
    {
      name: "platforms",
      title: "Available Platforms",
      type: "array",
      // codegen: { required: true },
      // validation: (Rule) => Rule.required(),
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
              name: "releaseDate",
              title: "Release Date",
              type: "date",
              description:
                "Will default to main release date if not specified, with same behaviour.",
            },
            {
              title: "link",
              name: "Link",
              type: "url",
              description: "Not required for movies in our store",
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
      name: "gallery",
      title: "Image Gallery",
      type: "array",
      of: [
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
      ],
    },
    {
      name: "recognition",
      title: "Recognition",
      description: "Praise, awards, kind words from people of organizations",
      type: "array",
      of: [{ type: "appraiser" }],
    },
  ],

  preview: {
    select: {
      title: "title",
      director: "director",
      media: "mainImage",
      status: "status",
    },
    prepare({ title, director, media, status }) {
      return {
        title: title,
        subtitle: `${director} ${
          status === "completed" ? "" : "| In " + (status || "...")
        }`,
        media,
      };
    },
  },
};
