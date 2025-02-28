//import { notFound } from "next/navigation";

import Link from "next/link";
import { Option, QN, QuizQuestion } from "@/app/model/questions";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface User {
  id: number;
  name: string;
  email: string;
}

interface Answer {
  id: number;
  user: string;
  questionaire: string;
  question: string;
  answer: string;
}
type QNKeys = keyof typeof QN; // 'QN1' | 'QN2' | ''

async function getUsers() {
  const res = await fetch(`${API_URL}api/users?`);
  if (!res.ok) return null;
  return res.json();
}

async function getAnswer(qn: string, user: string) {
  const res = await fetch(`${API_URL}api/answer?qn=${qn}&user=${user}`);
  if (!res.ok) return null;
  return res.json();
}

// interface UserPageProps {
//   params: { id: string; qn: string; qs: string };
// }

function findAnswer(qs: string, asw: Answer[]) {
  for (let i = 0; i < asw.length; i++) {
    if (asw[i].question == qs) {
      return asw[i].answer;
    }
  }
  return "";
}

export default async function UserPage({
  params,
}: {
  params: Promise<{ qn: QNKeys; user: string }>;
}) {
  const users = await getUsers();
  const qn = (await params).qn;
  const user = (await params).user;
  const answers = await getAnswer(qn, user);
  console.log(answers);

  const quizDatas = JSON.parse(JSON.stringify(QN[qn]));

  for (let df = 0; df <= quizDatas.length - 1; df++) {
    const el = quizDatas[df];
    console.log(el, "hhhhhhhhhhhhh");
    const answer = findAnswer(el.id, answers);
    el.answer = answer;
    console.log(answer, "ANSWER");
  }

  return (
    <div className="container mx-auto mt-5 flex">
      <div className=" border-2 border-red-100 p-4">
        {users.map((key: User) => (
          <div
            key={key.id}
            className={
              user == key.name ? "text-red-500 p-2" : "text-blue-500 p-2"
            }
          >
            <Link className="" href={key.name}>
              {key.email}
            </Link>
          </div>
        ))}
      </div>
      <div className=" border-2 border-red-100 p-4">
        {" "}
        <div className="overflow-x-auto p-4">
          <table className="min-w-full border border-gray-300 shadow-lg">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Pregunta</th>
                <th className="border p-2">Respuesta</th>
              </tr>
            </thead>
            <tbody>
              {quizDatas.map((question: QuizQuestion) => (
                <tr key={question.id} className="text-center">
                  <td className="border p-2">{question.label}</td>

                  <td className="border p-2 font-bold">
                    {
                      question.options.find(
                        (opt: Option) => opt.code === question.answer
                      )?.label
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
