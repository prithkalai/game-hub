import { useInfiniteQuery } from "react-query";

import { GameQuery } from "../data/gameQueryStore";
import APIclient, { FetchResponse } from "../services/api-client";
import { Game } from "../entities/GameEntities";

export interface Platform {
  id: number;
  name: string;
  slug: string;
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
