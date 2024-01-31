import { useQuery } from "react-query";
import APIclient, { FetchResponse } from "../services/api-client";

interface GameDetails {
  id: number;
  name: string;
  slug: string;
  description: string;
  description_raw: string;
}

const getGameDetails = new APIclient<GameDetails>("/games");
const useGameDetails = (gameSlug: string | number) => {
  return useQuery({
    queryKey: [gameSlug],
    queryFn: () => getGameDetails.get(gameSlug),
    staleTime: 24 * 60 * 60 * 1000, //24h,
  });
};

export default useGameDetails;
