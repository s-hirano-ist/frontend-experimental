import { Analytics } from "@vercel/analytics/react";
import type { ReactNode } from "react";
import "@/index.css";
import AppProvider from "@/common/components/AppProvider";
import "highlight.js/styles/default.css";
import { SnackbarProvider } from "@/common/components/SnackbarProvider";
import ThemeLayout from "@/common/components/ThemeLayout";
import NextAuthProvider from "@/providers/NextAuth";

export const metadata = {
  title: {
    template: "%s | My Page",
  },
  description: "Private page of s-hirano-ist",
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <AppProvider>
          <ThemeLayout>
            <SnackbarProvider>
              <NextAuthProvider>{children}</NextAuthProvider>
              <Analytics debug={false} />
            </SnackbarProvider>
          </ThemeLayout>
        </AppProvider>
      </body>
    </html>
  );
}
