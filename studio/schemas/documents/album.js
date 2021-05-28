import { MdAlbum, MdMusicNote, MdPlayArrow } from "react-icons/md";

export default {
  name: "album",
  title: "Album",
  type: "document",
  icon: MdAlbum,
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
          description: "Important for SEO and accessiblity.",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: "blurb",
      title: "Blurb",
      type: "string",
      description:
        "Short intro to the album - will be featured on search and social media. Also used as the description if album is unreleased.",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "body",
      title: "Body",
      type: "localeBlockContent",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "featuredVideo",
      title: "Featured Video",
      description: "Enter Youtube or Vimeo video url",
      type: "videoEmbed",
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
      name: "mainArtist",
      title: "Main Artist",
      type: "string",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "mainWriter",
      title: "Main Writer",
      type: "string",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "mainProducer",
      title: "Main Producer",
      type: "string",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "featuringArtists",
      title: "Featuring Artists",
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
      name: "recordingStudio",
      title: "Recording Studio",
      type: "string",
    },
    {
      name: "trackList",
      title: "Track List",
      type: "array",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
      of: [{ type: "track" }],
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
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
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
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
      description:
        "If status is production it will show the season & if completed, the actual date.",
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
      subtitle: "mainArtist",
      media: "mainImage",
    },
  },
};
