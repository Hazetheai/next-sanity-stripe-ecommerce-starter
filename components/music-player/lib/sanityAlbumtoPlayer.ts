import { ReactJkMusicPlayerAudioListProps } from "react-jinke-music-player";
import { urlFor } from "utils/sanity";
import { Album } from "utils/sanity/types";

export default function albumToPlaylist(
  album: Album
): ReactJkMusicPlayerAudioListProps[] {
  const playerAlbum: ReactJkMusicPlayerAudioListProps[] = album.trackList
    .filter((track) => track.previewFile)
    .map((track) => ({
      musicSrc: track["previewUrl"] || "",
      name: track.title,
      cover: urlFor(album.mainImage).url() || "",
      duration: track.previewLengthSeconds,
      singer: `${album.mainArtist}${
        track.featuringArtists
          ? " | Featuring: " + track.featuringArtists.join(", ")
          : ""
      }${track.tradArr ? " | Trad. Arr: " + track.tradArr.join(", ") : ""}`,
    }));

  return playerAlbum;
}
