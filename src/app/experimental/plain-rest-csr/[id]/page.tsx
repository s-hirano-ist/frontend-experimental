"use client";
import NewsDetailTable from "@/features/experiment/components/NewsDetailTable";
import { useNewsDetailQuery } from "@/features/rest/plainAccess/useNewsDetailQuery";

export default function NewsDetail({ params }: { params: { id: string } }) {
  // FUTURE WORK: access to API each time on access to this page will be heavy load. (some prevented by the cache in react query.) Therefore, it may be better to get all news and newsDetail at once and cache them.
  const { isLoading, error, data } = useNewsDetailQuery();

  return (
    <NewsDetailTable
      data={data}
      isLoading={isLoading}
      error={error}
      params={params}
    />
  );
}
