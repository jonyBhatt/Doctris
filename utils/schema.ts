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
    email: z.string().email({
      message: "Must be a valid email",
    }),
    password: z.string(),
    confirmpassword: z.string(),
    role: z.enum(USERROLE).default("Patient"),
  })
  .refine((data) => data.password === data.confirmpassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // path of error
  });

export const signInSchema = z.object({
  email: z.string().email({ message: "Please provide valid email!" }),
  password: z.string(),
});
