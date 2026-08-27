import Container from "@/components/Container";
import ChevronRight from "@/components/icon/chevron-right";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles",
};

const articles = [
  {
    slug: "crafting-a-design-system-for-a-multiplanetary-future",
    date: "September 5, 2022",
    dateISO: "2022-09-05",
    title: "Crafting a design system for a multiplanetary future",
    text: "Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.",
  },
  {
    slug: "introducing-animaginary",
    date: "September 2, 2022",
    dateISO: "2022-09-02",
    title: "Introducing Animaginary: High performance web animations",
    text: "When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself.",
  },
  {
    slug: "rewriting-the-cosmos-kernel-in-rust",
    date: "July 14, 2022",
    dateISO: "2022-07-14",
    title: "Rewriting the cosmOS kernel in Rust",
    text: "When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language, but it’s been a while since I’ve seen an article on the front page of Hacker News about rewriting some important tool in Go and I see articles on there about rewriting things in Rust every single week.",
  },
];

export default function Articles() {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1>Writing on software design, company building, and the aerospace industry.</h1>
        <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.</p>
      </header>
      <div className="mt-16 sm:mt-20">
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-17">
            {articles.map((article) => (
              <article key={article.slug} className="md:grid md:grid-cols-4 md:items-baseline">
                <div className="md:col-span-3 group relative flex flex-col items-start">
                  <h2 className="h2-var">
                    <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50" />
                    <a href={`/articles/${article.slug}`}>
                      <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                      <span className="relative z-10">{article.title}</span>
                    </a>
                  </h2>
                  <time dateTime={article.dateISO} className="md:hidden relative z-10 order-first mb-3 flex items-center pl-3.5 text-sm text-zinc-400 dark:text-zinc-500">
                    <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                      <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                    </span>
                    {article.date}
                  </time>
                  <p className="relative z-10 mt-2.5 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{article.text}</p>
                  <div aria-hidden="true" className="relative z-10 mt-4.5 flex items-center text-sm font-medium text-teal-500">
                    Read article
                    <ChevronRight />
                  </div>
                </div>
                <time dateTime={article.dateISO} className="mt-1 max-md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500">
                  {article.date}
                </time>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
