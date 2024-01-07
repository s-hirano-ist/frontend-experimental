import NewsDetailTable from "@/features/experiment/components/NewsDetailTable";
import prisma from "@/server/db";

export default async function NewsDetail({
  params,
}: {
  params: { id: string };
}) {
  const data = await prisma.newsDetail.findMany({
    where: { newsId: Number(params.id) },
  });

  return (
    <NewsDetailTable
      data={data}
      isLoading={false}
      error={undefined}
      params={params}
    />
  );
}
