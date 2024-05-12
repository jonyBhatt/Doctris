"use server";
import { signIn, signOut } from "@/auth";
import { signInSchema } from "@/utils/schema";
import { AuthError } from "next-auth";
import * as z from "zod";

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


