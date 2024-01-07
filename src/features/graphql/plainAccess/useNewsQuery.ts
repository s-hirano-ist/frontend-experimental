import { useQuery } from "@tanstack/react-query";
import { graphqlApi } from "@/features/graphql/plainAccess/graphqlApi";
import type { News } from "@/types/rss";

async function getNews() {
  const query = {
    query: `{
      publicNews {
        id
        heading
        description
        newsDetail {
          id
          newsId
          title
          url
          quote
        }
      }
    }`,
  };
  return await graphqlApi<News[]>("publicNews", query);
}

export const useNewsQuery = () =>
  useQuery({ queryKey: ["publicNews"], queryFn: getNews });
