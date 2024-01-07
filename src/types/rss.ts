// types used in plain non-typesafe access via REST API or GraphQL API

export type News = { id: number; heading: string; description: string };

export type NewsDetail = {
  id: number;
  newsId: number;
  title: string;
  url: string;
  quote?: string | null | undefined;
  published: boolean;
  favorite: boolean;
};

export const csvHeaders = [
  { key: "title", label: "タイトル" },
  { key: "url", label: "URL" },
  { key: "quote", label: "引用" },
];

export type NewsAndNewsDetail = News & { newsDetail: NewsDetail[] };
