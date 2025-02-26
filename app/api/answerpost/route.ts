import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { user, questionaire, question, answer } = body;

    // ✅ Validate required fields
    if (!user || !questionaire || !question || !answer) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const existingAnswer = await prisma.answer.findFirst({
      where: { user, questionaire, question },
    });

    if (existingAnswer) {
      await prisma.answer.updateMany({
        where: { user, questionaire, question },
        data: { answer },
      });
    } else {
      await prisma.answer.create({
        data: { user, questionaire, question, answer },
      });
    }

    return NextResponse.json({ result: "done" }, { status: 200 });
  } catch (error) {
    console.error("Error saving answer:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
