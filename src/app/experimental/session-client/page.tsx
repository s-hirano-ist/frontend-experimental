"use client";
import { Box, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import Footer from "@/common/components/Footer";
import Header from "@/common/components/Header";

export default function Page() {
  const { data, status } = useSession();

  return (
    <>
      <Header title="Client Sessionサンプル" />
      <Box m={8}>
        {status === "loading" ? (
          <Typography>Loading</Typography>
        ) : (
          <>
            <Typography>Signed in as {data?.user?.name}</Typography>
            <Typography>Email address: {data?.user?.email}</Typography>
          </>
        )}
      </Box>
      <Footer />
    </>
  );
}
