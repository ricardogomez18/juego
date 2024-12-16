import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/328833_22e7f.gif"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-8xl text-green-600">Gana o Caca</h1>
        <div className="text-3xl font-medium">
          Bienvenidos a Gana o Caca. Tienes que responder preguntas.{" "}
          <p className="text-red-600">Buena suerte!!!!</p>
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
            href="questionnaire"
            rel="noopener noreferrer"
          >
            Jugar
          </a>
        </div>
      </main>
    </div>
  );
}
