import {
  type NextAuthOptions,
  getServerSession,
  type DefaultSession,
} from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { env } from "@/env.mjs";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  //eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Session {
    user: {
      sampleString: string;
    } & DefaultSession["user"];
  }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: ({ token, account }) => {
      /*
       * token: includes what has been returned in the previous jwt function execution (default with name, email, and picture).
       * account: Contains information about the provider that was used to sign in. Includes the access_token.
       * returned value of this function is the values to pass to token on session function.
       */
      if (account) token.sampleString = "sample-string";
      return token;
    },
    session: ({ session, token }) => {
      /*
         * Session = {
            user?: {
              name?: string | null
              email?: string | null
              image?: string | null
            }
            expires: ISODateString
           }
         * Token = {
            // WHAT HAS BEEN SET IN THE JWT FUNCTION
           }
         * returned value of this function is the values which will be returned to the client side.
         */
      return {
        ...session,
        user: {
          ...session.user,
          sampleString: token.sampleString,
        },
      };
    },
  },
  secret: env.NEXTAUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    }),
  ],
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);
