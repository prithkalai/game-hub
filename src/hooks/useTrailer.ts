import { useQuery } from "react-query";
import { Trailer } from "../entities/GameEntities";
import APIclient from "../services/api-client";

const useTrailer = (slug: string) => {
  const getTrailer = new APIclient<Trailer>("/games/" + slug + "/movies");

  return useQuery({
    queryKey: ["trailer", slug],
    queryFn: getTrailer.getData,
    staleTime: 24 * 60 * 60 * 1000, //24h,
  });
};

export default useTrailer;
