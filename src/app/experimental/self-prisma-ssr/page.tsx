import NewsTable from "@/features/experiment/components/NewsTable";
import prisma from "@/server/db";

export default async function Page() {
  const data = await prisma.news.findMany();
  return (
    <NewsTable
      title="Self Prisma SSRサンプル"
      data={data}
      isLoading={false}
      error={undefined}
      path="/experimental/self-prisma-ssr"
    />
  );
}
