import {
  ReactJkMusicPlayerAudioListProps,
  ReactJkMusicPlayerAudioInfo,
  ReactJkMusicPlayerInstance,
} from "react-jinke-music-player";
import { Album, Track } from "utils/sanity/types";
import albumToPlaylist from "./lib/sanityAlbumtoPlayer";

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  Load = "LOAD_ALBUM",
  Play = "PLAY_SONG",
  Pause = "PAUSE_SONG",
  Change = "CHANGE_SONG",
  Close = "CLOSE_PLAYER",
}

// type AlbumPayload = {
//   [Types.Load]: Album;

// };

// export type AlbumActions = ActionMap<AlbumPayload>[keyof ActionMap<AlbumPayload>];

// export const albumReducer = (
//   state: {
//     info: Album | undefined;
//     trackList: ReactJkMusicPlayerAudioListProps[];
//   },
//   action: AlbumActions | PlayerStateActions
// ) => {
//   switch (action.type) {
//     case Types.Load:

//       return {
//         ...state,
//         info: action.payload,
//         trackList: albumToPlaylist(action.payload),
//       };

//     default: {
//       return state;
//       // throw new Error(`Unhandled action type: ${action.type}`);
//     }
//   }
// };

// PlayerState

type PlayerStatePayload = {
  [Types.Load]: {
    album: {
      info: Album | undefined;
      trackList: ReactJkMusicPlayerAudioListProps[];
    };
    track: { title: string; src: string; playIndex: number | undefined };
  };
  [Types.Pause]: {
    playerState: ReactJkMusicPlayerAudioInfo;
    track: { title: string; src: string; playIndex: number | undefined };
  };
  [Types.Play]: {
    playerState: ReactJkMusicPlayerAudioInfo;
    track: { title: string; src: string; playIndex: number | undefined };
  };
  [Types.Change]: {
    playerState: ReactJkMusicPlayerAudioInfo;
    album: {
      info: Album | undefined;
      trackList: ReactJkMusicPlayerAudioListProps[];
    };
    track: { title: string; src: string; playIndex: number | undefined };
  };
  [Types.Close]: {
    playerState: ReactJkMusicPlayerAudioInfo;
  };
};

export type PlayerStateActions = ActionMap<PlayerStatePayload>[keyof ActionMap<PlayerStatePayload>];

export const playerStateReducer = (
  state: {
    track: { title: string; src: string; playIndex: number | undefined };
    album: {
      info: Album | undefined;
      trackList: ReactJkMusicPlayerAudioListProps[];
    };
    playerState: ReactJkMusicPlayerAudioInfo | undefined;
  },
  action: PlayerStateActions
) => {
  switch (action.type) {
    case Types.Load:
      return {
        ...state,
        track: action.payload.track,
        album: action.payload.album,
      };
    case Types.Pause:
      return {
        ...state,
        playerState: { ...action.payload.playerState },
        track: action.payload.track,
      };
    case Types.Play:
      return {
        ...state,
        playerState: { ...action.payload.playerState },
        track: action.payload.track,
      };
    case Types.Change:
      return {
        ...state,
        track: action.payload.track,
        album: action.payload.album,
        playerState: { ...action.payload.playerState },
      };
    case Types.Close:
      return {
        ...state,
        playerState: { ...action.payload.playerState },
      };
    default:
      return state;
    // throw new Error(`Unhandled action type: ${action.type}`);
  }
};
