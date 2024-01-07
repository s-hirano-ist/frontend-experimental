// Next.js Custom Route Handler: https://nextjs.org/docs/app/building-your-application/routing/router-handlers
import { createSchema, createYoga } from "graphql-yoga";
import prisma from "@/server/db";

const { handleRequest } = createYoga({
  schema: createSchema({
    typeDefs: /* GraphQL */ `
      type News {
        id: Int!
        heading: String!
        description: String!
        newsDetail: [NewsDetail!]!
      }
      type NewsDetail {
        favorite: Boolean!
        id: Int!
        newsId: Int!
        published: Boolean!
        quote: String
        title: String!
        url: String!
      }
      type Query {
        allNews: [News!]!
        allNewsDetail: [NewsDetail!]!
      }
    `,
    resolvers: {
      Query: {
        allNews: async () => {
          return await prisma.news.findMany();
        },
        allNewsDetail: async () => {
          return await prisma.newsDetail.findMany();
        },
      },
    },
  }),

  // While using Next.js file convention for routing, we need to configure Yoga to use the correct endpoint
  graphqlEndpoint: "/api/graphql",

  // Yoga needs to know how to create a valid Next response
  fetchAPI: { Response },
});

export {
  handleRequest as GET,
  handleRequest as POST,
  handleRequest as OPTIONS,
};
