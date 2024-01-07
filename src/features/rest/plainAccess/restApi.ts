import axios from "axios";
import { env } from "@/env.mjs";

const BACKEND_HOST = env.NEXT_PUBLIC_BACKEND_HOST;
const USERNAME = env.NEXT_PUBLIC_USERNAME;
const PASSWORD = env.NEXT_PUBLIC_PASSWORD;

export async function restApi<T>(url: string): Promise<T> {
  const endpoint = new URL(url, BACKEND_HOST).toString();

  const header = btoa(`${USERNAME}:${PASSWORD}`);
  const response = await axios.get(endpoint, {
    headers: { Authorization: `Basic ${header}` },
  });
  return response.data as T;
}
