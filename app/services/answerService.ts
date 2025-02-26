// services/answerService.ts

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAnswers(user: string, questionnaire: string) {
  try {
    const answers = await prisma.answer.findMany({
      where: {
        user,
        questionaire: questionnaire,
      },
    });
    return answers;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching answers from Prisma");
  }
}
