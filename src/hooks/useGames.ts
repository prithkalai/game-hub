import { useInfiniteQuery, useQuery } from "react-query";
import { GameQuery } from "../App";
import apiClient from "../services/api-client";
import APIclient, { FetchResponse } from "../services/api-client";
import { all } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const getGames = new APIclient<Game>("/games");

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      getGames.getData({
        params: {
          page: pageParam,
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
    getNextPageParam(lastPage, allPages) {
      return lastPage.next && allPages.length + 1;
    },
  });

export default useGames;
