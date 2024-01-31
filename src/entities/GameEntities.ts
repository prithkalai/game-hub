export interface GameDetails {
  id: number;
  name: string;
  slug: string;
  description: string;
  description_raw: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
  publishers: Publisher[];
}
export interface Game {
  id: number;
  name: string;
  slug: string;
  description: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Publisher {
  id: number;
  name: string;
  slug: string;
}
export interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: { "480": string; max: string };
}
