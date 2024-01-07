import { PaletteMode } from "@mui/material";
import { atom } from "recoil";

export const colorSchemeContext = atom<PaletteMode>({
  key: "colorSchemeContext",
  default: "dark",
  dangerouslyAllowMutability: true,
});
