"use client";

import { QN } from "@/app/model/questions";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto mt-5">
      <h1>Preguntas</h1>

      {Object.keys(QN).map((key) => (
        <div key={key}>
          <Link href={`manager/questionnaire/${key}/lida`}>{key}</Link>
        </div>
      ))}
    </div>
  );
}
