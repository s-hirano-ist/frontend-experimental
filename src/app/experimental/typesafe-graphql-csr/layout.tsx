"use client";
import { ApolloProvider } from "@apollo/client";
import type { ReactNode } from "react";
import apolloClient from "@/common/utils/apolloClient";
import { env } from "@/env.mjs";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <ApolloProvider client={apolloClient(env.NEXT_PUBLIC_GRAPHQL_BACKEND_HOST)}>
      {children}
    </ApolloProvider>
  );
}
