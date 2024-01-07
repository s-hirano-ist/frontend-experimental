export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type AuthPayload = {
  __typename?: "AuthPayload";
  token?: Maybe<Scalars["String"]["output"]>;
  user?: Maybe<User>;
};

export type Mutation = {
  __typename?: "Mutation";
  login?: Maybe<AuthPayload>;
  register?: Maybe<AuthPayload>;
};

export type MutationLoginArgs = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type MutationRegisterArgs = {
  email: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

/** News category for rss database */
export type News = {
  __typename?: "News";
  description: Scalars["String"]["output"];
  heading: Scalars["String"]["output"];
  id: Scalars["Int"]["output"];
  newsDetail: Array<NewsDetail>;
  scope?: Maybe<Scope>;
};

export type NewsDetail = {
  __typename?: "NewsDetail";
  favorite: Scalars["Boolean"]["output"];
  id: Scalars["Int"]["output"];
  newsId: Scalars["Int"]["output"];
  published: Scalars["Boolean"]["output"];
  quote?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  url: Scalars["String"]["output"];
};

export type Query = {
  __typename?: "Query";
  allNews: Array<News>;
  allNewsDetail: Array<NewsDetail>;
  allUsers: Array<User>;
  publicNews: Array<News>;
  singleUser?: Maybe<User>;
};

export type User = {
  __typename?: "User";
  admin: Scalars["Boolean"]["output"];
  email: Scalars["String"]["output"];
  id: Scalars["Int"]["output"];
  name: Scalars["String"]["output"];
};

export enum Scope {
  Admin = "ADMIN",
  Authenticated = "AUTHENTICATED",
  Public = "PUBLIC",
}
