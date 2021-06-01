import { ReactJkMusicPlayerAudioListProps } from "react-jinke-music-player";
import { urlFor } from "utils/sanity";
import { Album } from "utils/sanity/types";

interface ATPProps {
  trackList: Album["trackList"];
  mainImage: Album["mainImage"];
  mainArtist: Album["mainArtist"];
}

export default function albumToPlaylist({
  trackList,
  mainImage,
  mainArtist,
}: ATPProps): ReactJkMusicPlayerAudioListProps[] {
  const playerAlbum: ReactJkMusicPlayerAudioListProps[] = trackList
    .filter((track) => track.previewFile)
    .map((track) => ({
      musicSrc: track["previewUrl"] || "",
      name: track.title,
      cover: urlFor(mainImage).url() || "",
      duration: track.previewLengthSeconds,
      singer: `${mainArtist}${
        track.featuringArtists
          ? " | Featuring: " + track.featuringArtists.join(", ")
          : ""
      }${track.tradArr ? " | Trad. Arr: " + track.tradArr.join(", ") : ""}`,
    }));

  return playerAlbum;
}
