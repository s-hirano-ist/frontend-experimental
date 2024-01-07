"use client";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import Footer from "@/common/components/Footer";
import Header from "@/common/components/Header";

export default function NotFoundPage() {
  return (
    <>
      <Header title="Not Found" />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        textAlign="center">
        <Typography textAlign="center" variant="h4" mt={4}>
          404 Page not found!
        </Typography>
        <Link href="/">
          <Button sx={{ mt: 4 }}>Back to home</Button>
        </Link>
      </Box>
      <Footer />
    </>
  );
}
