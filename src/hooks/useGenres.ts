import { useQuery } from "react-query";
import genres from "../data/genres";
import apiClient from "../services/api-client";
import APIclient, { FetchResponse } from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const getGenre = new APIclient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: getGenre.getData,
    staleTime: 24 * 60 * 60 * 1000, //24h,
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
