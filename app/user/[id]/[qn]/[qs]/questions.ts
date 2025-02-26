interface Option {
  code: string;
  label: string;
}

export interface QuizQuestion {
  id: string;
  label: string;
  options: Option[];
  answer: string;
}

const quizDatas: QuizQuestion[] = [
  {
    id: "QN1_1",
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
    id: "QN1_2",
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
    id: "QN1_3",
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
    id: "QN1_4",
    label: "Donde nacio Neymar?",
    options: [
      { code: "2", label: "Argentina" },
      { code: "1", label: "Peru" },
      { code: "3", label: "Portugal" },
      { code: "4", label: "Brazil" },
    ],
    answer: "4",
  },
];

export const QN = {
  QN1: quizDatas,
  QN2: quizDatas,
  "": quizDatas,
};
