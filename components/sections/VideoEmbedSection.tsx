import Video from "components/elements/Video";
import React from "react";
import { VideoEmbed } from "utils/sanity/types";

const VideoEmbedSection: React.FC<VideoEmbed> = ({ url }) => {
  return (
    <section className="">
      <div className="container px-5 sm:px-6 lg:px-8  max-w-7xl px-5 py-5 mx-auto ">
        {url && <Video url={url} className="h-full max-w-2xl mx-auto" />}
      </div>
    </section>
  );
};

export default VideoEmbedSection;
