"use client";
import NewsTable from "@/features/experiment/components/NewsTable";
import { useNewsQuery } from "@/features/graphql/plainAccess/useNewsQuery";

export default function Page() {
  const { isLoading, error, data } = useNewsQuery();

  return (
    <NewsTable
      title="Plain GraphQL CSRサンプル（制限付きアクセス）"
      data={data}
      isLoading={isLoading}
      error={error}
      path="/experimental/plain-graphql-csr"
    />
  );
}
