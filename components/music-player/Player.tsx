import React, { FC, useEffect, useState } from "react";
import ReactJkMusicPlayer, {
  ReactJkMusicPlayerAudioListProps,
  ReactJkMusicPlayerInstance,
} from "react-jinke-music-player";
import { wrap } from "utils/numberFunctions";
import { useMusicPlayer } from "./music-context";
import { Types } from "./music-reducers";
import {
  MdSkipNext,
  MdSkipPrevious,
  MdPlayCircleOutline,
  MdRepeat,
  MdVolumeUp,
  MdPlaylistPlay,
  MdPause,
} from "react-icons/md";
const songs = [
  {
    name: "China Waltz",
    musicSrc: "/china-waltz.wav",
    cover:
      "https://cdn.sanity.io/images/10j0zmvn/production/f44d9ef1d2d738a1e83ef7f067c0613ad7249275-1000x1000.png?w=640&fit=clip",
    singer: "Donagh Long",
    // duration: 30,
    lyric: "",
  },
  {
    name: "Never Be The Sun",
    musicSrc: "/never-be-the-sun.wav",
    cover:
      "https://cdn.sanity.io/images/10j0zmvn/production/068cdcc9de65a45869d7cef6387f93d39acfb3f5-157x150.jpg?w=640&fit=clip",
    singer: "Donagh Long",
    // duration: 30,
    lyric: "",
  },
];

// interface PlayerProps {
//   album: ReactJkMusicPlayerAudioListProps[];
// }

const Player: FC = ({}) => {
  const musicPlayer = useMusicPlayer();
  const [audioInstance, setAudioInstance] = useState<
    ReactJkMusicPlayerInstance | undefined
  >();
  const { state, dispatch } = useMusicPlayer();

  // useEffect(() => {
  //   if (!audioInstance) return;
  //   // dispatch({type:Types.Change, payload})
  //   audioInstance?.play();
  // }, [state.album, state.track]);

  return musicPlayer.state.album.info ? (
    <ReactJkMusicPlayer
      quietUpdate
      icon={{
        next: <MdSkipNext />,
        prev: <MdSkipPrevious />,
        play: <MdPlayCircleOutline />,
        pause: <MdPause />,
        reload: <MdRepeat />,
        volume: <MdVolumeUp />,
        playLists: <MdPlaylistPlay />,
      }}
      audioLists={state.album?.trackList || []}
      glassBg
      showMediaSession
      // autoPlay={false}
      clearPriorAudioLists
      autoPlayInitLoadPlayList
      spaceBar
      volumeFade={{ fadeIn: 500, fadeOut: 500 }}
      mode="full"
      playIndex={state.track.playIndex}
      showDownload={false}
      remove={false}
      showThemeSwitch={false}
      onAudioPlay={(audioInfo) => {
        dispatch({
          type: Types.Play,
          payload: {
            ...state,
            track: {
              src: audioInfo.musicSrc,
              title: audioInfo.name,

              playIndex: audioInfo.playIndex,
            },
            playerState: audioInfo,
          },
        });
      }}
      onAudioPause={(audioInfo) => {
        dispatch({
          type: Types.Pause,
          payload: {
            ...state,
            track: {
              src: audioInfo.musicSrc,
              title: audioInfo.name,

              playIndex: audioInfo.playIndex,
            },
            playerState: audioInfo,
          },
        });
      }}
      onAudioPlayTrackChange={async (currentPlayId, audioLists, audioInfo) => {
        dispatch({
          type: Types.Change,
          payload: {
            ...state,
            track: {
              src: audioInfo.musicSrc,
              title: audioInfo.name,

              playIndex: audioInfo.playIndex,
            },
            playerState: audioInfo,
          },
        });
      }}
      getAudioInstance={(ai) => setAudioInstance(ai)}
      onAudioListsChange={(currentPlayId, audioLists, audioInfo) => {
        dispatch({
          type: Types.Change,
          payload: {
            ...state,
            album: { info: state.album.info, trackList: audioLists },
            track: {
              src: audioInfo.musicSrc,
              title: audioInfo.name,

              playIndex: audioInfo.playIndex,
            },
            playerState: audioInfo,
          },
        });
      }}
    />
  ) : null;
};

export default Player;
