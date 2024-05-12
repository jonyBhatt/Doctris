import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./lib/prisma";
import bcrypt from "bcryptjs";
import { getUserById } from "./lib/action/user-action";
import { User, UserRole } from "@prisma/client";
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        email: { type: "email" },
        password: {},
      },
      authorize: async (credential) => {
        // check is email and password fields are empty
        if (credential.email === "" || credential.password === "") {
          throw new CredentialsSignin({
            cause: "Email or Password are required",
          });
        }
        // find the user
        const user = await prisma.user.findUnique({
          where: {
            email: credential.email as string,
          },
        });
        if (!user) {
          throw new CredentialsSignin({
            cause: "User does not exits ",
          });
        }
        const matchPassword = await bcrypt.compare(
          credential.password as string,
          user.password!
        );

        if (!matchPassword) {
          throw new CredentialsSignin({
            cause: "Invalid password",
          });
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/sign-in",
  },
  session: { strategy: "jwt" },
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }
      if (token.firstname && session.user) {
        session.user.firstname = token.firstname as string;
      }
      // session.user.role = user.role;
      // console.log({ user });

      return session;
    },
    async jwt({ token, account, user }) {
      // Persist the OAuth access_token to the token right after signin

      if (!token.sub) return token;

      const exitUser = await getUserById(token.sub);

      if (!exitUser) return token;

      // token.role = exitUser.user?.role;
      token.role = exitUser.role;
      token.firstname = exitUser.firstname
      // console.log({ token: token });
      return token;
    },
  },
});
