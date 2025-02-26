import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(
  req: Request,
  { params }: { params: { name: string } }
) {
  // Check if params.id exists
  const { name } = await params;
  if (!name) {
    return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
  }

  // Fetch the user using Prisma
  const user = await prisma.user.findFirst({
    where: { name: name },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user);
}
