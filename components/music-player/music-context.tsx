import React, { createContext, useReducer, Dispatch } from "react";
import {
  ReactJkMusicPlayerAudioInfo,
  ReactJkMusicPlayerAudioListProps,
  ReactJkMusicPlayerInstance,
} from "react-jinke-music-player";
import { Album } from "utils/sanity/types";
import {
  // albumReducer,
  playerStateReducer,
  // AlbumActions,
  PlayerStateActions,
} from "./music-reducers";

export type InitialMusicPlayerStateType = {
  album: {
    info: Album | undefined;
    trackList: ReactJkMusicPlayerAudioListProps[];
  };
  track: { title: string; src: string; playIndex: number | undefined };
  playerState: ReactJkMusicPlayerAudioInfo | undefined;

  // isPlayerLoaded : boolean;
};

const initialState: InitialMusicPlayerStateType = {
  album: { info: undefined, trackList: [] },
  track: { title: "", src: "", playIndex: 0 },
  playerState: undefined,
  // isPlayerLoaded: false,
};

const MusicContext = createContext<{
  state: InitialMusicPlayerStateType;
  dispatch: Dispatch<PlayerStateActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (
  musicState: InitialMusicPlayerStateType,
  action: PlayerStateActions
) => ({
  // album: albumReducer(album, action),
  ...playerStateReducer(musicState, action),
  // isPlayerLoaded: playerStateReducer(playerState, action),
});

const MusicProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <MusicContext.Provider value={{ state, dispatch }}>
      {children}
    </MusicContext.Provider>
  );
};

function useMusicPlayer() {
  const context = React.useContext(MusicContext);

  // TODO This won't work until undefined checks are in the reducers
  // https://kentcdodds.com/blog/how-to-use-react-context-effectively

  if (context === undefined) {
    throw new Error("useMusicPlayer must be used within a MusicProvider");
  }

  return context;
}

export { MusicProvider, useMusicPlayer };
