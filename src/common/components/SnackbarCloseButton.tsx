import { Close as IconClose } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import * as React from "react";

export function SnackbarCloseButton({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <IconButton onClick={onClick} size="large">
      <IconClose />
    </IconButton>
  );
}
