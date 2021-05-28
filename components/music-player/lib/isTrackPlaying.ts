import { Track } from "utils/sanity/types";
import { InitialMusicPlayerStateType } from "../music-context";

export function isTrackPlaying(
  track: Track,
  state: InitialMusicPlayerStateType
) {
  const src = state?.playerState?.musicSrc;
  const previewUrl = track["previewUrl"];
  const isPlaying = state.playerState?.paused === false;

  return src === previewUrl && isPlaying;
}
