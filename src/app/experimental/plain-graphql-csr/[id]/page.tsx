"use client";
import NewsDetailTable from "@/features/experiment/components/NewsDetailTable";
import { useNewsDetailQuery } from "@/features/graphql/plainAccess/useNewsDetailQuery";

export default function NewsDetail({ params }: { params: { id: string } }) {
  const data = useNewsDetailQuery();

  return (
    <NewsDetailTable
      data={data}
      isLoading={false}
      error={false}
      params={params}
    />
  );
}
