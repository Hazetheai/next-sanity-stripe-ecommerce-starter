import { MdMusicNote } from "react-icons/md";

export default {
  name: "song",
  title: "Song",
  type: "document",
  icon: MdMusicNote,
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
    //   name: "albums",
    //   title: "Albums",
    //   type: "array",
    //   of: [
    //     {
    //       name: "albumFields",
    //       title: "Album",
    //       type: "object",
    //       fields: [
    //         { name: "album", type: "reference", to: [{ type: "album" }] },
    //         {
    //           name: "trackLengthMinutes",
    //           title: "Track Length - Minutes",
    //           type: "number",
    //           codegen: { required: true },
    //           validation: (Rule) => Rule.required(),
    //         },
    //         {
    //           name: "trackLengthSeconds",
    //           title: "Track Length - Seconds",
    //           type: "number",
    //           codegen: { required: true },
    //           validation: (Rule) => Rule.required(),
    //         },
    //       ],
    //       preview: {
    //         select: {
    //           title: "album.title",
    //           media: "album.mainImage",
    //           trackLengthMinutes: "trackLengthMinutes",
    //           trackLengthSeconds: "trackLengthSeconds",
    //         },
    //         prepare({ title, media, trackLengthMinutes, trackLengthSeconds }) {
    //           return {
    //             title: `${title}`,
    //             subtitle: `${trackLengthMinutes}:${trackLengthSeconds}`,
    //             media,
    //           };
    //         },
    //       },
    //     },
    //   ],
    // },
    {
      name: "lyrics",
      title: "Lyrics",
      type: "blockContent",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "backStory",
      title: "Back Story",
      type: "blockContent",
    },
    {
      name: "featuredVideo",
      title: "Music Video",
      description: "Enter Youtube or Vimeo video url",
      type: "array",
      validation: (Rule) =>
        Rule.max(1).error("You may only have a single music video."),
      of: [{ type: "videoEmbed" }],
    },
    // {
    //   title: "Tags",
    //   name: "tags",
    //   type: "array",
    //   of: [
    //     {
    //       type: "string",
    //     },
    //   ],
    //   options: {
    //     layout: "tags",
    //   },
    // },

    {
      name: "coveringArtists",
      title: "Covering Artists",
      type: "array",
      of: [
        {
          name: "artist",
          title: "Artist",
          type: "object",
          fields: [
            {
              name: "thumbnail",
              title: "Image",
              type: "image",
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
              name: "name",
              title: "Name",
              type: "string",
              codegen: { required: true },
              validation: (Rule) => Rule.required(),
            },
            {
              name: "album",
              title: "Album",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "coWriters",
      title: "Co Writers",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "tradArr",
      title: "Trad Arr.",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "isSingle",
      title: "Single",
      type: "boolean",
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
      coWriters: "coWriters",
      coveringArtists: "coveringArtists",
      tradArr: "tradArr",
      isSingle: "isSingle",
    },
    prepare({ title, coveringArtists, coWriters, isSingle, tradArr }) {
      return {
        title: `${title} ${isSingle ? "- Single" : ""}`,
        // subtitle: `${
        //   coveringArtists
        //     ? " | Covered By: " +
        //       coveringArtists.map((el) => el.artist.name).join(", ")
        //     : ""
        // } ${coWriters ? " | Co-written with: " + coWriters.join(", ") : ""}
        // ${tradArr ? " | Trad. Arr: " + tradArr.join(", ") : ""}`,
      };
    },
  },
};
