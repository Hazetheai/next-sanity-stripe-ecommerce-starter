import { Album, CoveringArtists, Film, Product, Song } from "./types";

export interface CoveringArtistSection extends CoveringArtists {
  songs: Array<{ title: string; coveringArtists: Song["coveringArtists"] }>;
}

export interface AlbumProduct extends Album {
  product?: Product;
}
export interface FilmProduct extends Film {
  movieBackgroundURL?: string;
  product?: Product;
}
