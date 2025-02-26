import { notFound } from "next/navigation";
import Quiz from "./quiz";

interface UserPageProps {
  params: { id: string; qn: string; qs: string };
}

async function getUser(id: string) {
  const res = await fetch(`http://localhost:3000/api/users/${id}`);
  if (!res.ok) return null;
  return res.json();
}

async function getAnswer(qn: string, user: string) {
  const res = await fetch(
    `http://localhost:3000/api/answer?qn=${qn}&user=${user}`
  );
  if (!res.ok) return null;
  return res.json();
}

function findAnswer(qs: string, asw: any[]) {
  for (let i = 0; i < asw.length; i++) {
    if (asw[i].question == qs) {
      return asw[i].answer;
    }
  }
  return "";
}

export default async function UserPage({ params }: UserPageProps) {
  // Await the params before accessing id
  const { id, qn, qs } = await params;

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
