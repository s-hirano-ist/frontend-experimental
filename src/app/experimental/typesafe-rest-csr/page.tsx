"use client";
import NewsTable from "@/features/experiment/components/NewsTable";
import { useNewsQuery } from "@/features/rest/typesafeAccess/useNewsQuery";
import { News } from "@/types/rss";

export default function Page() {
  const { isLoading, error, data } = useNewsQuery();

  if (!data) return <></>;
  return (
    <NewsTable
      title="Typesafe REST CSRサンプル"
      data={data as News[]} // FIXME: the types are wrong for openapi generator
      isLoading={isLoading}
      error={error}
      path="/"
    />
  );
}
