"use client";
// import { ApolloProvider } from "@apollo/client";
import type { ReactNode } from "react";
// import apolloClient from "@/common/utils/apolloClient";
// import { env } from "@/env.mjs";

export default function Layout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
  // <ApolloProvider client={apolloClient(env.NEXT_PUBLIC_SELF_GRAPHQL_HOST)}>
  //   {children}
  // </ApolloProvider>
}
