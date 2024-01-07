"use client";
import { Box, Button, Typography } from "@mui/material";
import { useEffect } from "react";
import Footer from "@/common/components/Footer";
import Header from "@/common/components/Header";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <Header title="Not Found" />
      <Box display="flex" flexDirection="column" justifyContent="flex-end">
        <Typography textAlign="center" variant="h4" mt={4}>
          Something went wrong!
        </Typography>
        <Button onClick={() => reset()} sx={{ mt: 4 }}>
          Try again
        </Button>
      </Box>
      <Footer />
    </>
  );
}
