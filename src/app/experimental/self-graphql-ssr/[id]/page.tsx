// eslint-disable-next-line import/no-named-as-default
// import gql from "graphql-tag";
// import apolloClient from "@/common/utils/apolloClient";
// import { env } from "@/env.mjs";
// import NewsDetailTable from "@/features/experiment/components/NewsDetailTable";

export default /*async*/ function NewsDetail({
  params,
}: {
  params: { id: string };
}) {
  // const query = gql`
  //   query {
  //     allNewsDetail {
  //       id
  //       title
  //       url
  //       quote
  //       newsId
  //     }
  //   }
  // `;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  // const { data, loading, error } = await apolloClient(
  //   env.NEXT_PUBLIC_SELF_GRAPHQL_HOST,
  // ).query({
  //   query: query,
  // });

  // FIXME: nextjs app router apollo client integration
  // https://github.com/apollographql/apollo-client/issues/10344
  // https://github.com/apollographql/apollo-client-nextjs

  return (
    <div>
      This component will not work on other than localhost. Therefore disabled.
      This page is {params.id}.
    </div>
    // <NewsDetailTable
    //   // eslint-disable-next-line
    //   data={data.allNewsDetail}
    //   isLoading={loading}
    //   error={error}
    //   params={params}
    // />
  );
}
