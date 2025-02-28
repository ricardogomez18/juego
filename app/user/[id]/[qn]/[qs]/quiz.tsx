"use client";

import React, { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import { QN, QuizQuestion } from "@/app/model/questions";

interface Prop {
  qn: string;
  qs: string;
  answer: string;
  user: string;
}

const Quiz = (prop: Prop) => {
  const [quizData, setQuizData] = useState<QuizQuestion[]>([]); // State for the quiz data

  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [isAnswered, setIsAnswered] = useState(false);

  type QNKeys = keyof typeof QN; // 'QN1' | 'QN2' | ''
  const router = useRouter();

  //const currentQuestion = quizData[idx];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion>();

  const handleOptionClick = (selectedOption: string) => {
    if (!isAnswered) {
      setSelectedAnswer(selectedOption);
      setIsAnswered(true);
    }
  };
  console.log(currentQuestionIndex);
  console.log(prop.qs);

  const postAnswer = async (
    user: string,
    questionaire: string,
    question: string,
    answer: string
  ) => {
    const response = await fetch("/api/answerpost", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: user,
        questionaire: questionaire,
        question: question,
        answer: answer,
      }),
    });

    const data = await response.json();
    console.log(data);
  };

  const handleNext = () => {
    setIsAnswered(false);

    const nq = quizData[currentQuestionIndex + 1];
    router.push(nq.id);
    postAnswer(prop.user, prop.qn, prop.qs, selectedAnswer);
    setSelectedAnswer("");
  };

  const previous = () => {
    setIsAnswered(false);

    const nq = quizData[currentQuestionIndex - 1];
    router.push(nq.id);

    setSelectedAnswer("");
  };

  // Generate quiz data on component mount using useEffect
  useEffect(() => {
    //const generatedData = generateQuizData(8); // Generate 5 math questions

    function findQuestion(qs: string, qd: QuizQuestion[]) {
      for (let i = 0; i < qd.length; i++) {
        if (qd[i].id == qs) {
          return i;
        }
      }
      return 0;
    }

    const allQuestions = QN[prop.qn as QNKeys]; // This will work fine
    setQuizData(allQuestions); // Set shuffled data
    const idx = findQuestion(prop.qs, allQuestions);
    const currentQ = allQuestions[idx];
    setCurrentQuestion(currentQ);
    setCurrentQuestionIndex(idx);
    setSelectedAnswer(prop.answer);
  }, [prop]); // Empty dependency array ensures this runs once

  console.log(selectedAnswer, "selectedAnswer");

  return (
    <div className="container mx-auto mt-5">
      {/* <div className="flex  w-full justify-center items-center mb-5">
        {" "}
        <div className="flex-1">
          <h1 className="text-5xl mb-2 font-bold text-green-600">
            Gana o caca
          </h1>
        </div>
        <div className="block">
          <p className="text-lg mb-5">
            Respuestas correctas: {correctAnswersCount}
          </p>{" "}
        </div>
      </div> */}
      {/* Display global counter */}
      {currentQuestion && (
        <div style={{ marginBottom: "20px" }}>
          <h3 className="text-2xl mb-5 font-bold">{currentQuestion.label}</h3>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {currentQuestion.options.map((option, optionIndex) => {
              const isSelected = selectedAnswer === option.code;

              return (
                <li
                  key={optionIndex}
                  onClick={() => handleOptionClick(option.code)}
                  style={{
                    cursor: "pointer",
                    padding: "8px",
                    margin: "5px 0",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    backgroundColor: isSelected ? "lightgreen" : "white",
                  }}
                >
                  {option.label}
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <div className="w-full flex justify-between">
        {currentQuestionIndex > 0 && (
          <div className="w-full justify-center flex items-center mt-10">
            <button
              onClick={previous}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Anterior
            </button>
          </div>
        )}

        {selectedAnswer !== "" &&
          currentQuestionIndex < quizData.length - 1 && (
            <div className="w-full justify-center flex items-center mt-10">
              <button
                onClick={handleNext}
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Siguiente
              </button>
            </div>
          )}
      </div>
    </div>
  );
};

export default Quiz;
