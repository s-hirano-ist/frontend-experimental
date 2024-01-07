import axios from "axios";
import { env } from "@/env.mjs";

const GRAPHQL_BACKEND_HOST = env.NEXT_PUBLIC_GRAPHQL_BACKEND_HOST;

export async function graphqlApi<T>(
  queryName: string,
  data: { query: string },
): Promise<T> {
  const endpoint = new URL(GRAPHQL_BACKEND_HOST).toString();
  const response = await axios.post(endpoint, data);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  return response.data.data[queryName] as T;
}
