// app/api/answers/route.ts

import { getAnswers } from "@/app/services/answerService";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const user = url.searchParams.get("user");
  const questionnaire = url.searchParams.get("qn");

  if (!user || !questionnaire) {
    return NextResponse.json(
      { error: "User and questionnaire are required" },
      { status: 400 }
    );
  }

  try {
    const answers = await getAnswers(user, questionnaire);
    console.log(answers);
    return NextResponse.json(answers);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Error fetching answers" },
      { status: 500 }
    );
  }
}
