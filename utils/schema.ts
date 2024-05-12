import { z } from "zod";

export const enum UserType {
  Admin = "Admin",
  Doctor = "Doctor",
  Patient = "Patient",
  Nurse = "Nurse",
  Radiologist = "Radiologist",
  Pharmacist = "Pharmacist",
  FinanceOfficer = "Finance Officer",
  Laboratory = "Laboratory",
  Technician = "Technician",
  Receptionist = "Receptionist",
}

export const USERROLE = [
  "Doctor",
  "Patient",
  "Nurse",
  "Radiologist",
  "Pharmacist",
  "Finance Officer",
  "Laboratory",
  "Technician",
  "Receptionist",
] as const;

export const signUpSchema = z
  .object({
    firstname: z.string().min(2, {
      message: "First name required!",
    }),
    lastname: z.string().min(2, {
      message: "Last name required!",
    }),
    email: z
      .string({ required_error: "Email is required" })
      .min(1, "Email is required")
      .email("Invalid email"),
    password: z
      .string({ required_error: "Password is required" })
      .min(1, "Password is required")
      .min(4, "Password must be more than 4 characters")
      .max(32, "Password must be less than 32 characters"),
    confirmpassword: z
      .string({ required_error: "Password is required" })
      .min(1, "Password is required")
      .min(4, "Password must be more than 4 characters")
      .max(32, "Password must be less than 32 characters"),
    role: z.enum(USERROLE).default("Patient"),
  })
  .refine((data) => data.password === data.confirmpassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // path of error
  });

export const signInSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: z
    .string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(4, "Password must be more than 4 characters")
    .max(32, "Password must be less than 32 characters"),
});

export const medRecordSchema = z.object({
  file: z.string(),
});
