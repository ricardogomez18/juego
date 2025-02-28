export interface Option {
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
    label: "Cual es tu profesión?",
    options: [
      { code: "2", label: "Enfermero" },
      { code: "1", label: "Consejera del presidente" },
      { code: "3", label: "Segundo ayudante del presidente" },
      { code: "4", label: "Profesor de matematica" },
      { code: "5", label: "Minero" },
      { code: "6", label: "Heladero" },
      { code: "7", label: "Bibliotecario" },
      { code: "8", label: "Doctor(a)" },
      { code: "9", label: "Profesora de Espannol, Ingles y KREA" },
      { code: "10", label: "Presidente del banco" },
      { code: "11", label: "Informatico" },
      // { code: "12", label: "Presidente" },
    ],
    answer: "4",
  },
  {
    id: "QN1_2",
    label: "Cual es su salario?",
    options: [
      { code: "2", label: "100 000 euros al mes" },
      { code: "1", label: "200 000 euros al mes" },
      { code: "3", label: "300 000 euros al mes" },
      { code: "4", label: "500 000 euros al mes" },
      { code: "5", label: "1 000 000 euros al mes" },
      { code: "6", label: "3 000 000 euros al mes" },
      { code: "7", label: "5 000 000 euros al mes" },
      { code: "8", label: "10 000 000 euros al mes" },
    ],
    answer: "2",
  },
  {
    id: "QN1_5",
    label: "Donde desea vivir en Opcidiant?",
    options: [
      { code: "2", label: "Hotel de los trabajadores" },
      { code: "1", label: "Casa independiente" },
    ],
    answer: "2",
  },

  {
    id: "QN1_3",
    label: "Donde vive actualmente?",
    options: [
      { code: "2", label: "Europa" },
      { code: "1", label: "America" },
      { code: "3", label: "Asia" },
      { code: "4", label: "Africa" },
    ],
    answer: "3",
  },
  {
    id: "QN1_4",
    label: "Que cree de Diaz Canel?",
    options: [
      { code: "2", label: "Es bueno" },
      { code: "1", label: "Es malo" },
      { code: "3", label: "Es regular" },
      { code: "4", label: "No me importa" },
    ],
    answer: "4",
  },
  {
    id: "QN1_6",
    label: "Acepta trabajar en Opcidiant?",
    options: [
      { code: "2", label: "Si" },
      { code: "1", label: "No" },
    ],
    answer: "4",
  },
];

export const QN = {
  QN1: quizDatas,
};
