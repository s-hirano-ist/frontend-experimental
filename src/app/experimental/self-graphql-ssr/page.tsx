// eslint-disable-next-line import/no-named-as-default
// import gql from "graphql-tag";
// import apolloClient from "@/common/utils/apolloClient";
// import { env } from "@/env.mjs";
// import NewsTable from "@/features/experiment/components/NewsTable";

export default /*async*/ function Page() {
  // const query = gql`
  //   query {
  //     allNews {
  //       id
  //       heading
  //       description
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
    </div>
    // <NewsTable
    //   title="Self GraphQL SSRサンプル"
    //   // eslint-disable-next-line
    //   data={data.allNews}
    //   isLoading={loading}
    //   error={error}
    //   path="/experimental/self-graphql-ssr"
    // />
  );
}
