import { useQueryClient } from "@tanstack/react-query";
import type { NewsDetail } from "@/types/rss";

export const useNewsDetailQuery = (): NewsDetail[] | undefined => {
  const queryClient = useQueryClient();
  // eslint-disable-next-line
  const data: any = queryClient.getQueryData(["publicNews"]);
  // eslint-disable-next-line
  return data?.map((d: any) => d.newsDetail)[0];
};
