import { useQuery } from "@tanstack/react-query";
import { restApi } from "@/features/rest/plainAccess/restApi";
import type { News } from "@/types/rss";

async function getNews() {
  return await restApi<News[]>("v1/news");
}

export const useNewsQuery = () =>
  useQuery({ queryKey: ["news"], queryFn: getNews });
