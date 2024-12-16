import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Option {
  code: string;
  label: string;
}

interface QuizQuestion {
  label: string;
  options: Option[];
  answer: string;
}

const quizDatas: QuizQuestion[] = [
  // {
  //   label: "Donde juega Mbape ahora?",
  //   options: [
  //     { code: "2", label: "Kenyi y Ben" },
  //     { code: "1", label: "Kenyi y Darius" },
  //     { code: "3", label: "Darius y Ben" },
  //     { code: "4", label: "Darius y Bruklin" },
  //   ],
  //   answer: "1",
  // },
  {
    label: "Donde juega Mbape ahora?",
    options: [
      { code: "2", label: "PSG" },
      { code: "1", label: "Barcelona" },
      { code: "3", label: "Real madrid" },
      { code: "4", label: "Juventus" },
    ],
    answer: "3",
  },
  {
    label: "Donde nacio Messi?",
    options: [
      { code: "2", label: "Argentina" },
      { code: "1", label: "Rusia" },
      { code: "3", label: "Dinamarca" },
      { code: "4", label: "Cuba" },
    ],
    answer: "2",
  },
  {
    label: "Donde nacio Cristiano Ronaldo?",
    options: [
      { code: "2", label: "Argentina" },
      { code: "1", label: "Peru" },
      { code: "3", label: "Portugal" },
      { code: "4", label: "Brazil" },
    ],
    answer: "3",
  },
  {
    label: "Donde nacio Neymar?",
    options: [
      { code: "2", label: "Argentina" },
      { code: "1", label: "Peru" },
      { code: "3", label: "Portugal" },
      { code: "4", label: "Brazil" },
    ],
    answer: "4",
  },
  {
    label: "Quien salto al recinto de los raptors?",
    options: [
      { code: "Roxy", label: "Ben" },
      { code: "Darius", label: "Darius" },
      { code: "Diana", label: "Bruklin" },
      { code: "Julia", label: "Sami" },
    ],
    answer: "Darius",
  },

  {
    label: "Quien le robo el telefono a Bruklin?",
    options: [
      { code: "Owen", label: "Darius" },
      { code: "Claire", label: "Kenyi" },
      { code: "Sami", label: "Sami" },
      { code: "Dr", label: "Ben" },
    ],
    answer: "Sami",
  },

  {
    label: "Cual es el hibrido mas grande?",
    options: [
      { code: "Africa", label: "Escorpion rex" },
      { code: "Europa", label: "Indoraptor" },
      { code: "Indominus", label: "Indominus rex" },
      { code: "Asia", label: "Gigantosaurius" },
    ],
    answer: "Indominus",
  },
  {
    label: "Quien murio en la pelicula de Jurassic World?",
    options: [
      { code: "Masrani", label: "Masrani" },
      { code: "Dr Bu", label: "Dr Bu" },
      { code: "Indominus", label: "Claire" },
      { code: "Asia", label: "Dani" },
    ],
    answer: "Masrani",
  },
  {
    label: "Quien es el dinosaurio mas fuerte de Jurassic World?",
    options: [
      { code: "Africa", label: "Terizinosaurus" },
      { code: "Giganotosaurus", label: "Giganotosaurus" },
      { code: "Indominus", label: "Escorpion Rex" },
      { code: "Asia", label: "Indominus Rex" },
    ],
    answer: "Giganotosaurus",
  },
  {
    label: "Como se llama el dinosaurio ciego  de Jurassic World?",
    options: [
      { code: "Terizinosaurus", label: "Terizinosaurus" },
      { code: "Giganotosaurus", label: "Giganotosaurus" },
      { code: "Indominus", label: "Escorpion Rex" },
      { code: "Asia", label: "Indominus Rex" },
    ],
    answer: "Terizinosaurus",
  },

  // {
  //   label: "Cuanto es 50 + 32?",
  //   options: [
  //     { code: "71", label: "71" },
  //     { code: "92", label: "92" },
  //     { code: "82", label: "82" },
  //     { code: "78", label: "78" },
  //   ],
  //   answer: "82",
  // },
  // {
  //   label: "Cuanto es 20 + 34?",
  //   options: [
  //     { code: "54", label: "54" },
  //     { code: "64", label: "64" },
  //     { code: "53", label: "53" },
  //     { code: "78", label: "78" },
  //   ],
  //   answer: "82",
  // },
  // {
  //   label: "Cuanto es 20 + 70?",
  //   options: [
  //     { code: "101", label: "101" },
  //     { code: "90", label: "90" },
  //     { code: "92", label: "92" },
  //     { code: "96", label: "96" },
  //   ],
  //   answer: "82",
  // },
];

// Function to shuffle an array
const shuffleArray = (array: QuizQuestion[]) => {
  return array.sort(() => Math.random() - 0.5);
};

const generateQuizData = (numQuestions: number) => {
  const questions = [];
  for (let i = 0; i < numQuestions; i++) {
    let num1 = Math.floor(Math.random() * 90) + 10; //
    let num2 = Math.floor(Math.random() * 90) + 10; // Two-digit number
    const isAddition = Math.random() > 0.5; // Randomly choose addition or subtraction
    if (num1 < num2) {
      // Swap the values if num1 is less than num2
      const temp = num1;
      num1 = num2;
      num2 = temp;
    }

    const label = isAddition
      ? `Cuánto es ${num1} + ${num2}`
      : `Cuánto es ${num1} - ${num2}`;
    const answer = isAddition ? num1 + num2 : num1 - num2;

    // Generate three options, including the correct one
    const options = [
      { code: answer.toString(), label: answer.toString() },
      {
        code: (answer + Math.floor(Math.random() * 10) + 1).toString(),
        label: (answer + Math.floor(Math.random() * 10) + 1).toString(),
      },
      {
        code: (answer - Math.floor(Math.random() * 10) - 1).toString(),
        label: (answer - Math.floor(Math.random() * 10) - 1).toString(),
      },
    ];

    // Shuffle the options
    const shuffledOptions = options.sort(() => Math.random() - 0.5);

    questions.push({
      label,
      options: shuffledOptions,
      answer: answer.toString(),
    });
  }
  return questions;
};

const Quiz = () => {
  const [quizData, setQuizData] = useState<QuizQuestion[]>([]); // State for the quiz data
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0); // Global counter

  const currentQuestion = quizData[currentQuestionIndex];

  const handleOptionClick = (selectedOption: string, isco: boolean) => {
    if (!isAnswered) {
      setSelectedAnswer(selectedOption);
      setIsAnswered(true);

      setIsCorrect(isco);
      if (!isco) {
        const audio = new Audio("/fartbumtrumpetpoop-99028.mp3"); // Path relative to the public folder
        audio.play().catch((err) => console.error("Error playing audio:", err)); // Handle any play errors
      } else {
        setCorrectAnswersCount((prevCount) => prevCount + 1);
        const audio = new Audio("/goodresult-82807.mp3"); // Path relative to the public folder
        audio.play().catch((err) => console.error("Error playing audio:", err)); // Handle any play errors
      }
    }
  };

  const handleNext = () => {
    setSelectedAnswer("");
    setIsAnswered(false);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };
  // Generate quiz data on component mount using useEffect
  useEffect(() => {
    const generatedData = generateQuizData(8); // Generate 5 math questions
    const allQuestions = shuffleArray([...generatedData, ...quizDatas]); // Merge and shuffle
    setQuizData(allQuestions); // Set shuffled data
  }, []); // Empty dependency array ensures this runs once

  return (
    <div className="container mx-auto mt-5">
      <div className="flex  w-full justify-center items-center mb-5">
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
      </div>
      {/* Display global counter */}
      {currentQuestion && (
        <div style={{ marginBottom: "20px" }}>
          <h3 className="text-2xl mb-5 font-bold">{currentQuestion.label}</h3>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {currentQuestion.options.map((option, optionIndex) => {
              const isSelected = selectedAnswer === option.code;
              const isCorrect = currentQuestion.answer === option.code;

              return (
                <li
                  key={optionIndex}
                  onClick={() => handleOptionClick(option.code, isCorrect)}
                  style={{
                    cursor: "pointer",
                    padding: "8px",
                    margin: "5px 0",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    backgroundColor: isAnswered
                      ? isSelected
                        ? isCorrect
                          ? "lightgreen"
                          : "lightcoral"
                        : "white"
                      : "white",
                  }}
                >
                  {option.label}
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <div className="flex items-center justify-center">
        {isAnswered && isCorrect && (
          <Image
            src="/trophy-with-face-1ax92djf4l4y2gv3.gif" // Path relative to the public folder
            alt="Example Image"
            width={250} // Specify width
            height={150} // Specify height
            priority // Optional: For preloading the image
          />
        )}

        {isAnswered && !isCorrect && (
          <Image
            src="/poop-pooping.gif" // Path relative to the public folder
            alt="Example Image"
            width={250} // Specify width
            height={150} // Specify height
            priority // Optional: For preloading the image
          />
        )}
      </div>
      {isAnswered && currentQuestionIndex < quizData.length - 1 && (
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

      {isAnswered && currentQuestionIndex === quizData.length - 1 && (
        <div className="w-full flex justify-center items-center bg-yellow-200 mt-10 p-2">
          <p className="mr-10 text-3xl">Juego terminado!</p>

          <p className="text-3xl">
            Puntuacion: {correctAnswersCount} / {quizData.length}
          </p>
          <Link
            href="/"
            type="button"
            className="ml-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Volver a jugar
          </Link>
        </div>
      )}
    </div>
  );
};

export default Quiz;
