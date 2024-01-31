import { useQuery } from "react-query";
import { Screenshot } from "../entities/GameEntities";
import APIclient from "../services/api-client";

const useScreenshots = (slug: string) => {
  const getScreenShots = new APIclient<Screenshot>(
    "/games/" + slug + "/screenshots"
  );
  return useQuery({
    queryKey: ["screenshot", slug],
    queryFn: getScreenShots.getData,
    staleTime: 24 * 60 * 60 * 1000, //24h,
  });
};
export default useScreenshots;
