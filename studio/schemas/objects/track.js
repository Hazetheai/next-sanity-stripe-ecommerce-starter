import { MdAlbum, MdMusicNote, MdPlayArrow } from "react-icons/md";

export default {
  name: "track",
  title: "Track",
  type: "object",
  // initialValue: {
  //   previewLengthSeconds: 30,
  // },
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
    {
      name: "previewLengthSeconds",
      title: "Preview Length - Seconds",
      type: "number",
    },
    {
      name: "previewFile",
      title: "Preview File",
      type: "file",
      accept: "audio/*",
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
      song: "song",
      previewFile: "previewFile",
    },
    prepare({
      title,
      minutes,
      seconds,
      featuringArtists,
      coWriters,
      isSingle,
      tradArr,
      song,
      previewFile,
    }) {
      return {
        title: `${title} ${isSingle ? "- Single" : ""}`,
        subtitle: `${minutes}:${seconds.toString().padStart(2, "0")} ${
          featuringArtists ? " | Featuring: " + featuringArtists.join(", ") : ""
        } ${coWriters ? " | Co-written with: " + coWriters.join(", ") : ""}  ${
          tradArr ? " | Trad. Arr: " + tradArr.join(", ") : ""
        } ${previewFile ? " | ▶️" : ""}`,
        media: song ? MdMusicNote : MdAlbum,
      };
    },
  },
};
