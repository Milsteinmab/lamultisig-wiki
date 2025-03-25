import Link from "next/link";

const HERO_TEXT = {
  title: {
    start: "Tu puerta de entrada al mundo ",
    highlight: "Web3",
  },
  description:
    "Somos una comunidad enfocada en compartir contenido sobre DeFi, tecnología y más.",
  cta: "Ir a docs",
};

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 text-center">
      <section className="max-w-4xl w-full">
        <h1 className="mb-6 text-4xl font-bold sm:text-5xl md:text-6xl">
          {HERO_TEXT.title.start}
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            {HERO_TEXT.title.highlight}
          </span>
        </h1>

        <p className="mb-8 text-lg text-fd-muted-foreground sm:text-xl">
          {HERO_TEXT.description}
        </p>

        <Link
          href="/docs"
          className="inline-flex items-center rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-purple-700"
        >
          {HERO_TEXT.cta}
        </Link>
      </section>
    </main>
  );
}
