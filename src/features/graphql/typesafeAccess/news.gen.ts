import * as Types from "../../../graphqlTypes";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type NewsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type NewsQuery = {
  __typename?: "Query";
  allNews: Array<{
    __typename?: "News";
    id: number;
    heading: string;
    description: string;
    scope?: Types.Scope | null;
  }>;
};

export const NewsDocument = gql`
  query news {
    allNews {
      id
      heading
      description
      scope
    }
  }
`;

/**
 * __useNewsQuery__
 *
 * To run a query within a React component, call `useNewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewsQuery({
 *   variables: {
 *   },
 * });
 */
export function useNewsQuery(
  baseOptions?: Apollo.QueryHookOptions<NewsQuery, NewsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<NewsQuery, NewsQueryVariables>(NewsDocument, options);
}
export function useNewsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<NewsQuery, NewsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<NewsQuery, NewsQueryVariables>(
    NewsDocument,
    options,
  );
}
export function useNewsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<NewsQuery, NewsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<NewsQuery, NewsQueryVariables>(
    NewsDocument,
    options,
  );
}
export type NewsQueryHookResult = ReturnType<typeof useNewsQuery>;
export type NewsLazyQueryHookResult = ReturnType<typeof useNewsLazyQuery>;
export type NewsSuspenseQueryHookResult = ReturnType<
  typeof useNewsSuspenseQuery
>;
export type NewsQueryResult = Apollo.QueryResult<NewsQuery, NewsQueryVariables>;
