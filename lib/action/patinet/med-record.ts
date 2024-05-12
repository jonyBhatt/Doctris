"use server";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { medRecordSchema } from "@/utils/schema";
import * as z from "zod";

export const uploadRecords = async (
  values: z.infer<typeof medRecordSchema>
) => {
  const session = await auth();
  if (!session || !session.user) return null;
  const validateFields = medRecordSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields" };
  }

  const { file } = validateFields.data;
  try {
    await prisma.medRecords.create({
      data: {
        file,
        userId: session.user.id as string,
      },
    });
    return { success: true };
  } catch (error) {
    return {
      error: error,
    };
  }
};

export const getRecords = async () => {
  try {
    const records = await prisma.medRecords.findMany({
      include: {
        user: true,
      },
    });
    return records;
  } catch (error) {
    return null;
  }
};
