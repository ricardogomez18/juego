import { notFound } from "next/navigation";
import Quiz from "./quiz";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
interface Answer {
  id: number;
  user: string;
  questionaire: string;
  question: string;
  answer: string;
}

async function getUser(id: string) {
  const res = await fetch(`${API_URL}api/users?name=${id}`);
  if (!res.ok) return null;
  return res.json();
}

async function getAnswer(qn: string, user: string) {
  const res = await fetch(`${API_URL}api/answer?qn=${qn}&user=${user}`);
  if (!res.ok) return null;
  return res.json();
}

function findAnswer(qs: string, asw: Answer[]) {
  for (let i = 0; i < asw.length; i++) {
    if (asw[i].question == qs) {
      return asw[i].answer;
    }
  }
  return "";
}

// interface UserPageProps {
//   params: { id: string; qn: string; qs: string };
// }

export default async function UserPage({
  params,
}: {
  params: Promise<{ id: string; qn: string; qs: string }>;
}) {
  const id = (await params).id;
  const qn = (await params).qn;
  const qs = (await params).qs;

  // export default async function UserPage({ params }: UserPageProps) {
  //   // ✅ Just destructure `params`, no need for `await`
  //   const { id, qn, qs } = params;

  const user = await getUser(id);
  const answer = await getAnswer(qn, id);
  const as = findAnswer(qs, answer);
  console.log(as, "ANSWER");

  if (!user) return notFound();
  const prop = { qn: qn, qs: qs, answer: as, user: id };

  return (
    <div>
      <div className=" flex space-x-4 sm:space-x-0">
        <Quiz {...prop}></Quiz>
      </div>
      {/* <h1>User Profile</h1>
      <p>
        <strong>ID:</strong> {user.id}
      </p>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p> */}
    </div>
  );
}
