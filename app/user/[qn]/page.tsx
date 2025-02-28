//import { notFound } from "next/navigation";

import Link from "next/link";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface User {
  id: number;
  name: string;
  email: string;
}

async function getUsers() {
  const res = await fetch(`${API_URL}api/users?`);
  if (!res.ok) return null;
  return res.json();
}

export default async function UserPage({
  params,
}: {
  params: Promise<{ qn: string }>;
}) {
  const users = await getUsers();
  const qn = (await params).qn;

  return (
    <div className="container mx-auto mt-5">
      <h3 className="text-2xl mb-5 font-bold">Quien eres?</h3>
      <div className=" mt-4 ">
        {users.map((key: User) => (
          <div key={key.id} className="mb-2">
            <Link
              className="text-blue-500"
              href={`/user/${qn}/${key.name}/QN1_1`}
            >
              {key.email}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
