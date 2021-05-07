import { MdAlbum } from "react-icons/md";

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
          codegen: { required: true },
          validation: (Rule) => Rule.required(),
          description: "Important for SEO and accessiblity.",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    // {
    //   name: "blurb",
    //   title: "Blurb",
    //   type: "localeString",
    //   codegen: { required: true },
    //   validation: (Rule) => Rule.required(),
    // },
    {
      name: "body",
      title: "Body",
      type: "localeBlockContent",
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
      name: "trackList",
      title: "Track List",
      type: "array",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
      of: [
        {
          name: "track",
          title: "Track",
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
              codegen: { required: true },
              validation: (Rule) => Rule.required(),
            },
            {
              title: "Song",
              name: "song",
              type: "reference",
              to: [{ type: "song" }],
            },
            {
              name: "isSingle",
              title: "Single",
              type: "boolean",
            },
            // {
            //   name: "lyrics",
            //   title: "Track Lyrics",
            //   type: "blockContent",
            // },
            {
              name: "featuringArtists",
              title: "Featuring Artists",
              type: "array",
              of: [{ type: "string" }],
            },
            // {
            //   name: "coWriters",
            //   title: "Co Writers",
            //   type: "array",
            //   of: [{ type: "string" }],
            // },
            {
              name: "tradArr",
              title: "Trad Arr.",
              type: "array",
              of: [{ type: "string" }],
            },
            {
              name: "trackLengthMinutes",
              title: "Track Length - Minutes",
              type: "number",
              codegen: { required: true },
              validation: (Rule) => Rule.required(),
            },
            {
              name: "trackLengthSeconds",
              title: "Track Length - Seconds",
              type: "number",
              codegen: { required: true },
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: "title",
              minutes: "trackLengthMinutes",
              seconds: "trackLengthSeconds",
              featuringArtists: "featuringArtists",
              coWriters: "coWriters",
              tradArr: "tradArr",
              isSingle: "isSingle",
            },
            prepare({
              title,
              minutes,
              seconds,
              featuringArtists,
              coWriters,
              isSingle,
              tradArr,
            }) {
              return {
                title: `${title} ${isSingle ? "- Single" : ""}`,
                subtitle: `${minutes}:${seconds} ${
                  featuringArtists
                    ? " | Featuring: " + featuringArtists.join(", ")
                    : ""
                } ${
                  coWriters ? " | Co-written with: " + coWriters.join(", ") : ""
                }  ${tradArr ? " | Trad. Arr: " + tradArr.join(", ") : ""}`,
              };
            },
          },
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
      subtitle: "mainArtist",
      media: "mainImage",
    },
  },
};
