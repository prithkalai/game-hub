import { useQuery } from "react-query";
import APIclient from "../services/api-client";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const getPlatform = new APIclient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: getPlatform.getData,
    staleTime: 24 * 60 * 60 * 1000, // 24 hrs
  });

export default usePlatforms;
