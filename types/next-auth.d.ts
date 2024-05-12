import { UserRole } from "@prisma/client";
import NextAuth, { type DefaultSession } from "next-auth";

export type ExtendUser = DefaultSession["user"] & {
  firstname: string;
  role: UserRole;
};

declare module "next-auth" {
  interface Session {
    user: ExtendUser;
  }
}
