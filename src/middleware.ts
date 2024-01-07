/**
 * @see https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
 */

// Usage for github auth
import { withAuth } from "next-auth/middleware";
import { env } from "@/env.mjs";

export default withAuth({
  callbacks: {
    authorized: ({ token }) => {
      // if email address is ALLOWED_GITHUB_ACCOUNT_EMAIL, then allow.
      // FIXME: change to "is inside db" for more allowed accounts.
      return token?.email === env.ALLOWED_GITHUB_ACCOUNT_EMAIL;
    },
  },
});
export const config = {
  matcher: [
    "/",
    "/((?!experimental/no-auth|tech-stack/app.drawio.png|tech-stack/aws.drawio.png|tech-stack/infra.drawio.png|tech-stack/personal.drawio.png|api/graphql).*)",
  ],
};

/* Usage for basic auth
import { NextRequest, NextResponse } from "next/server";
export const config = {
  matcher: ["/:path*"],
};

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  if (!url.pathname.startsWith("/")) return;

  const basicAuth = req.headers.get("Authorization");

  if (basicAuth) {
    const authValue = basicAuth.split(" ")[1];
    const [user, pwd] = atob(authValue).split(":");

    if (
      user === env.NEXT_PUBLIC_BASIC_AUTH_NAME &&
      pwd === env.NEXT_PUBLIC_BASIC_AUTH_PASSWORD
    ) {
      return NextResponse.next();
    }
    return NextResponse.json(
      { error: "Invalid credentials" },
      {
        headers: { "WWW-Authenticate": 'Basic realm="Secure Area"' },
        status: 401,
      },
    );
  } else {
    return NextResponse.json(
      { error: "Please enter credentials" },
      {
        headers: { "WWW-Authenticate": 'Basic realm="Secure Area"' },
        status: 401,
      },
    );
  }
}
*/
