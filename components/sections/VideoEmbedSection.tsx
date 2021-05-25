import Video from "components/elements/Video";
import React from "react";
import { VideoEmbed } from "utils/sanity/types";

const VideoEmbedSection: React.FC<VideoEmbed> = ({ url }) => {
  return (
    <section className="container px-5 py-5 mx-auto h-screen">
      {url && <Video url={url} className="h-full" />}
    </section>
  );
};

export default VideoEmbedSection;
