import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { firstname, lastname, email, password, role } = body;

  if (!firstname || !lastname || !email || password)
    return Response.json({ messageL: "Invalid fields" }, { status: 403 });

  const genSalt = await bcrypt.genSalt(10);
  const hasPass = await bcrypt.hash(password, genSalt);

  try {
    const newUser = await prisma.user.create({
      data: {
        firstname,
        lastname,
        email,
        password: hasPass,
        role,
      },
    });
    console.log(newUser);

    return Response.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Something went wrong" }, { status: 500 });
  }
}
