import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box component="footer" sx={{ marginTop: "auto" }}>
      <Box sx={{ bgcolor: "primary.main" }} py={2}>
        <Typography
          variant="subtitle1"
          color="white"
          display="flex"
          justifyContent="center">
          Copyright © 2023 | All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
