"use client";

import { QN } from "@/app/model/questions";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto mt-5">
      <h3 className="text-2xl mb-5 font-bold">Cuestionarios?</h3>

      {Object.keys(QN).map((key) => (
        <div key={key}>
          <Link
            className="text-blue-500"
            href={`manager/questionnaire/${key}/lida`}
          >
            {key}
          </Link>
        </div>
      ))}
    </div>
  );
}
