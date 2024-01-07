import { Box, Typography } from "@mui/material";
import Footer from "@/common/components/Footer";
import Header from "@/common/components/Header";
import { getServerAuthSession } from "@/server/auth";

export default async function Page() {
  const session = await getServerAuthSession();

  return (
    <>
      <Header title="Server Sessionサンプル" />
      <Box m={8}>
        {!session ? (
          <Typography>Loading</Typography>
        ) : (
          <>
            <Typography>Signed in as {session.user?.name}</Typography>
            <Typography>Email address: {session.user?.email}</Typography>
          </>
        )}
      </Box>
      <Footer />
    </>
  );
}
