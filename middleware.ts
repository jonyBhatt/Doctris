import { auth } from "@/auth";
import { authRoutes } from "./utils/routes";
export default auth((req) => {
  // req.auth
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const isAuthRoutes = authRoutes.includes(nextUrl.pathname);
  const isApiRoute = nextUrl.pathname.startsWith("/api");
  if (isApiRoute) {
    return;
  }
  if (isAuthRoutes) {
    if (isLoggedIn) {
      return Response.redirect(new URL("/", nextUrl));
    }
    return;
  }
  if (!isLoggedIn) {
    return Response.redirect(new URL("/sign-in", nextUrl));
  }
  return;
});
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
