-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Answer" (
    "id" SERIAL NOT NULL,
    "user" TEXT NOT NULL,
    "questionaire" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Answer_user_questionaire_question_key" ON "Answer"("user", "questionaire", "question");
