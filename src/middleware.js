import NextAuth from "next-auth";
import { authConfig } from "./lib/auth.config";

export default NextAuth(authConfig).auth;

export const config = {
  matcher: ["/((?!api[static].*\\..*|_next).*)"],
};

// matcher allow us to filter middleware to run or not run on specific paths, if we don't add any matcher. middleware will be invoked for every route in our project.
