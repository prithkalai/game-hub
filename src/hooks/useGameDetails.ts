import { useQuery } from "react-query";
import { GameDetails } from "../entities/GameEntities";
import APIclient from "../services/api-client";

const getGameDetails = new APIclient<GameDetails>("/games");
const useGameDetails = (gameSlug: string | number) => {
  return useQuery({
    queryKey: [gameSlug],
    queryFn: () => getGameDetails.get(gameSlug),
    staleTime: 24 * 60 * 60 * 1000, //24h,
  });
};

export default useGameDetails;
