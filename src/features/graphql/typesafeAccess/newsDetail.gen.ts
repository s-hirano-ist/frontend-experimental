import * as Types from "../../../graphqlTypes";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type NewsDetailQueryVariables = Types.Exact<{ [key: string]: never }>;

export type NewsDetailQuery = {
  __typename?: "Query";
  allNewsDetail: Array<{
    __typename?: "NewsDetail";
    id: number;
    newsId: number;
    title: string;
    url: string;
    quote?: string | null;
    published: boolean;
    favorite: boolean;
  }>;
};

export const NewsDetailDocument = gql`
  query NewsDetail {
    allNewsDetail {
      id
      newsId
      title
      url
      quote
      published
      favorite
    }
  }
`;

/**
 * __useNewsDetailQuery__
 *
 * To run a query within a React component, call `useNewsDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useNewsDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewsDetailQuery({
 *   variables: {
 *   },
 * });
 */
export function useNewsDetailQuery(
  baseOptions?: Apollo.QueryHookOptions<
    NewsDetailQuery,
    NewsDetailQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<NewsDetailQuery, NewsDetailQueryVariables>(
    NewsDetailDocument,
    options,
  );
}
export function useNewsDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    NewsDetailQuery,
    NewsDetailQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<NewsDetailQuery, NewsDetailQueryVariables>(
    NewsDetailDocument,
    options,
  );
}
export function useNewsDetailSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    NewsDetailQuery,
    NewsDetailQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<NewsDetailQuery, NewsDetailQueryVariables>(
    NewsDetailDocument,
    options,
  );
}
export type NewsDetailQueryHookResult = ReturnType<typeof useNewsDetailQuery>;
export type NewsDetailLazyQueryHookResult = ReturnType<
  typeof useNewsDetailLazyQuery
>;
export type NewsDetailSuspenseQueryHookResult = ReturnType<
  typeof useNewsDetailSuspenseQuery
>;
export type NewsDetailQueryResult = Apollo.QueryResult<
  NewsDetailQuery,
  NewsDetailQueryVariables
>;
