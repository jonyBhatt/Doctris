"use server";
import { signIn, signOut } from "@/auth";
import { signInSchema, signUpSchema } from "@/utils/schema";
import bcrypt from "bcryptjs";
import { AuthError } from "next-auth";
import prisma from "../prisma";
import * as z from "zod";

export const register = async (values: z.infer<typeof signUpSchema>) => {
  const validateFields = signUpSchema.safeParse(values);
  if (!validateFields.success) {
    return { error: "Invalid fields" };
  }

  const { email, password, firstname, lastname } = validateFields.data;
  const genSalt = await bcrypt.genSalt(10);
  const hashPass = await bcrypt.hash(password, genSalt);
  try {
    const newUser = await prisma.user.create({
      data: {
        firstname,
        lastname,
        email,
        password: hashPass,
      },
    });
    return newUser;
  } catch (error) {
    return null;
  }
};

export const login = async (values: z.infer<typeof signInSchema>) => {
  const validateFields = signInSchema.safeParse(values);
  if (!validateFields.success) {
    return { error: "Invalid fields" };
  }

  const { email, password } = validateFields.data;
  try {
    await signIn("credentials", {
      email,
      password,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid Credentials" };
        default:
          return { error: "Something went wrong" };
      }
    }
    throw error;
  }
};

export const signout = async () => {
  await signOut();
};
