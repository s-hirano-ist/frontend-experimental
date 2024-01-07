"use client";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { responsiveFontSizes, type PaletteMode, Stack } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
// import { Noto_Sans_JP } from "next/font/google";
import { useServerInsertedHTML } from "next/navigation";
import { ReactNode, useMemo, useState } from "react";
import { useRecoilValue } from "recoil";
import { colorSchemeContext } from "@/common/stores/colorSchemeContext";

// const notoSansJp = Noto_Sans_JP({
//   weight: "400",
//   subsets: ["latin"],
// });

/* perfers-color-scheme disabled due to initial load always return light mode on useMediaQuery.
 * I may fix this in the future release.
 * // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
 */

// This implementation is from emotion-js
// https://github.com/emotion-js/emotion/issues/2928#issuecomment-1319747902

export default function ThemeLayout({ children }: { children: ReactNode }) {
  const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: {
              main: "#006CAC",
            },
            secondary: {
              main: "#FFFFFF",
            },
          }
        : {
            primary: {
              main: "#77A2C0",
            },
            secondary: {
              main: "#FFFFFF",
            },
          }),
    },
    // typography: {
    //   fontFamily: notoSansJp.style.fontFamily,
    // },
  });
  const colorScheme = useRecoilValue(colorSchemeContext);

  const theme = useMemo(() => {
    return responsiveFontSizes(createTheme(getDesignTokens(colorScheme)));
  }, [colorScheme]);

  // https://mui.com/material-ui/guides/next-js-app-router/
  // https://github.com/mui/material-ui/issues/37935
  const [{ cache, flush }] = useState(() => {
    const cache = createCache({ key: "css" });
    cache.compat = true;
    //eslint-disable-next-line @typescript-eslint/unbound-method
    const prevInsert = cache.insert;
    let inserted: { name: string; global: boolean }[] = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push({ name: serialized.name, global: !args[0] });
      }
      return prevInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) return null;

    const nonGlobalNames = [];
    const globalStyles = [];
    let styles = "";
    for (const { name, global } of names) {
      if (global) {
        globalStyles.push({ name, css: cache.inserted[name] });
      } else {
        nonGlobalNames.push(name);
        styles += cache.inserted[name];
      }
    }
    return [
      ...globalStyles.map((style, _) => (
        <style
          key={style.name}
          data-emotion={`${cache.key}-global`}
          dangerouslySetInnerHTML={{
            __html: style.css,
          }}
        />
      )),
      <style
        key="css"
        data-emotion={`${cache.key} ${nonGlobalNames.join(" ")}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />,
    ];
  });
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <Stack width="100%" direction="column" display="flex" minHeight="100vh">
          <CssBaseline />
          {children}
        </Stack>
      </ThemeProvider>
    </CacheProvider>
  );
}
