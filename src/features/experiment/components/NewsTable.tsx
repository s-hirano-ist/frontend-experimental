"use client";
import { Box, Button } from "@mui/material";
import Link from "next/link";
import { useEffect } from "react";
import Footer from "@/common/components/Footer";
import Header from "@/common/components/Header";
import { Table } from "@/common/components/Table";
import { useHandleError } from "@/common/utils/errors";
import { jsonUrl } from "@/common/utils/exportJson";
import { News } from "@/types/rss";

type Props = {
  title: string;
  data: News[] | undefined;
  isLoading: boolean;
  error: unknown;
  path: string;
};

export default function NewsTable({
  title,
  data,
  isLoading,
  error,
  path,
}: Props) {
  const { handleError } = useHandleError();

  useEffect(() => {
    if (error !== undefined) {
      if (error instanceof Error) handleError(error);
    }
  }, [error, handleError]);

  return (
    <>
      <Header title={title} />
      <Box display="flex" justifyContent="center" mt={2}>
        <Link
          href={jsonUrl<News[]>(data ?? [])}
          download={"rss.json"}
          target="_blank">
          <Button
            variant="contained"
            size="large"
            color="secondary"
            disabled={data?.length === 0}>
            ダウンロード
          </Button>
        </Link>
      </Box>
      <Table
        rows={data ?? []}
        columns={[
          {
            field: "heading",
            headerName: "heading",
            minWidth: 200,
          },
          {
            field: "description",
            headerName: "description",
            minWidth: 400,
          },
        ]}
        path={path}
        loading={isLoading}
        sx={{ m: 2 }}
      />
      <Footer />
    </>
  );
}
