import { useSnackbar as useNotistack } from "notistack";
import type { OptionsObject, SnackbarMessage } from "notistack";

export function useSnackbar() {
  const { enqueueSnackbar } = useNotistack();

  function addSnackbar(message: SnackbarMessage, options: OptionsObject) {
    const defaultOption: OptionsObject = {};
    enqueueSnackbar(message, { ...defaultOption, ...options });
  }

  return {
    addSnackbar,
  };
}
