"use client";
import { Box, Button } from "@mui/material";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { CSVLink } from "react-csv";
import Footer from "@/common/components/Footer";
import Header from "@/common/components/Header";
import { Table } from "@/common/components/Table";
import { useHandleError } from "@/common/utils/errors";
import { csvHeaders, NewsDetail } from "@/types/rss";

type Props = {
  data: NewsDetail[] | undefined;
  isLoading: boolean;
  error: unknown;
} & { params: { id: string } };

export default function NewsDetailTable({
  data,
  isLoading,
  error,
  params,
}: Props) {
  const { handleError } = useHandleError();

  const pathname = usePathname();
  const id = params.id;

  const rows = data?.filter(content => {
    return content.newsId === Number(id);
  });

  useEffect(() => {
    if (error !== undefined) {
      if (error instanceof Error) handleError(error);
    }
  }, [error, handleError]);

  return (
    <>
      <Header title={pathname ?? ""} />
      <Box display="flex" justifyContent="center" mt={2}>
        <CSVLink
          data={rows ?? []}
          headers={csvHeaders}
          filename={`${id}.csv`}
          target="_blank">
          <Button
            variant="contained"
            size="large"
            color="secondary"
            disabled={rows?.length === 0}>
            ダウンロード
          </Button>
        </CSVLink>
      </Box>
      <Table
        rows={rows ?? []}
        columns={[
          {
            field: "title",
            headerName: "title",
            minWidth: 200,
          },
          {
            field: "url",
            headerName: "url",
            minWidth: 400,
          },
          {
            field: "quote",
            headerName: "quote",
            minWidth: 400,
          },
        ]}
        loading={isLoading}
        sx={{ m: 2 }}
      />
      <Footer />
    </>
  );
}
