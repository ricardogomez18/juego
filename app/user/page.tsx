"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  return (
    <div className="container mt-5">
      <main className="mx-2 flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/minecraft_1.png"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-4xl text-green-600">OPCIDIANT COUNTRY</h1>
        <div className="text-3xl font-medium">
          Bienvenidos a Opcidiant!!! Tienes que responder algunas preguntas.{" "}
          <p className="text-red-600 mt-2">
            Al concluir este cuestionario usted estara firmando su contrato.{" "}
          </p>
          <p className="text-red-600 font-semibold mt-2">
            El presidente Lucas revisara todas las respuestas y arreglara lo que
            estime conveniente, incluido el SALARIO.{" "}
          </p>
        </div>
        {/* <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol> */}

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="bg-green-300 rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href={`${pathname}/QN1`}
            rel="noopener noreferrer"
          >
            RESPONDER
          </a>
        </div>
      </main>
    </div>
  );
}
