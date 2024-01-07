"use client";
import NewsDetailTable from "@/features/experiment/components/NewsDetailTable";
import { useNewsDetailQuery } from "@/features/graphql/typesafeAccess/newsDetail.gen";

export default function NewsDetail({ params }: { params: { id: string } }) {
  const { loading, error, data } = useNewsDetailQuery();

  return (
    <NewsDetailTable
      data={data?.allNewsDetail}
      isLoading={loading}
      error={error}
      params={params}
    />
  );
}
