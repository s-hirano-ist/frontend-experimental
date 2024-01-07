"use client";
import { SnackbarProvider as NotistackProvider } from "notistack";
import type { SnackbarKey } from "notistack";
import { useRef, ReactNode } from "react";
import { SnackbarCloseButton } from "@/common/components/SnackbarCloseButton";

type Props = {
  children?: ReactNode;
};

export function SnackbarProvider({ children }: Props) {
  const ref = useRef<NotistackProvider>(null);

  const handleClose = (key: SnackbarKey) => {
    ref.current?.closeSnackbar(key);
  };

  return (
    <NotistackProvider
      ref={ref}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      action={key => <SnackbarCloseButton onClick={() => handleClose(key)} />}
      maxSnack={2}>
      {children}
    </NotistackProvider>
  );
}
