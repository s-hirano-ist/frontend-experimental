import { useQuery } from "@tanstack/react-query";
import { restApi } from "@/features/rest/plainAccess/restApi";
import type { Methods } from "@/types/generated/v1/news/index";

async function getNews() {
  return await restApi<Methods["get"]["resBody"]>("v1/news");
}

export const useNewsQuery = () => {
  return useQuery({ queryKey: ["news"], queryFn: getNews });
};
