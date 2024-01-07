import { PrismaClient } from "@prisma/client";
import { env } from "@/env.mjs";

// REF: https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

export default prisma;
if (env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
