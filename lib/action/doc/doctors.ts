"use server";
import prisma from "@/lib/prisma";

export const getSearchDoctor = async (searchTerm?: string) => {
  try {
    const doc = await prisma.user.findMany({
      where: {
        OR: [
          {
            firstname: {
              contains: searchTerm,
              mode: "insensitive",
            },
          },
          {
            lastname: {
              contains: searchTerm,
              mode: "insensitive",
            },
          },
        ],
      },
    });
    if (doc.length > 0) {
      // Return matching doc
      return doc;
    } else {
      // If there are no matching users, return all users
      const allDoc = await prisma.user.findMany({
        where: {
          role: "Doctor",
        },
      });
      return allDoc;
    }
  } catch (error) {
    return null;
  }
};
