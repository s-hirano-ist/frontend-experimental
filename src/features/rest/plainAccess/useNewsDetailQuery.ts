import { useQuery } from "@tanstack/react-query";
import { restApi } from "@/features/rest/plainAccess/restApi";
import type { NewsDetail } from "@/types/rss";

async function getNewsDetail() {
  return await restApi<NewsDetail[]>(`v1/news-detail`);
}

export const useNewsDetailQuery = () =>
  useQuery({ queryKey: ["news-detail"], queryFn: getNewsDetail });
