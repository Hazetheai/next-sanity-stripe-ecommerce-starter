import React from "react";

const InternalLinkRender = ({ children }) => <span>{children} 🔗</span>;

export default {
  title: "Internal link to another document",
  name: "internalLink",
  type: "reference",
  description: "Locate a document you want to link to",
  to: [
    { type: "product" },
    { type: "route" },
    { type: "staticRoute" },
    { type: "album" },
    { type: "song" },
    { type: "film" },
  ],
  blockEditor: {
    icon: () => "🔗",
    render: InternalLinkRender,
  },
};
