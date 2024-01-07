"use client";
import NewsTable from "@/features/experiment/components/NewsTable";
import { useNewsQuery } from "@/features/rest/plainAccess/useNewsQuery";

export default function Page() {
  const { isLoading, error, data } = useNewsQuery();

  return (
    <NewsTable
      title="Plain REST CSRサンプル"
      data={data}
      isLoading={isLoading}
      error={error}
      path="/experimental/plain-rest-csr"
    />
  );
}
