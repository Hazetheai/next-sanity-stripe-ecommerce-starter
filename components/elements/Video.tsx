import Vimeo from "@u-wave/react-vimeo";
import getVideoId from "get-video-id";
import React from "react";
import YouTube from "react-youtube";

interface VideoProps {
  url: string;
  className?: string;
}

const Video: React.FC<VideoProps> = ({ url, className }) => {
  if (url) {
    const { id, service } = getVideoId(url);

    if (!id) {
      return <div>Missing YouTube or Vimeo URL</div>;
    }

    if (service === "vimeo") {
      return (
        <Vimeo
          video={id}
          className={`${className || ""} Video-container`}

          // autoplay
        />
      );
    }

    if (service === "youtube") {
      return (
        <YouTube
          videoId={id}
          containerClassName={`${className || ""} Video-container`}
        />
      );
    }
  }
  return null;
};

export default Video;
