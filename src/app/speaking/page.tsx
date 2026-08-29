import type { Metadata } from "next";
import Container from "@/components/Container";
import ChevronRight from "@/components/icon/chevron-right";

export const metadata: Metadata = {
  title: "Speaking",
  description:
    "I’ve spoken at events all around the world and been interviewed for many podcasts.",
};

const conferences = [
  {
    title: "In space, no one can watch you stream — until now",
    event: "SysConf 2021",
    text: "A technical deep-dive into HelioStream, the real-time streaming library I wrote for transmitting live video back to Earth.",
    cta: "Watch video",
  },
  {
    title: "Lessons learned from our first product recall",
    event: "Business of Startups 2020",
    text: "They say that if you’re not embarassed by your first version, you’re doing it wrong. Well when you’re selling DIY space shuttle kits it turns out it’s a bit more complicated.",
    cta: "Watch video",
  },
];

const podcasts = [
  {
    title: "Using design as a competitive advantage",
    event: "Encoding Design, July 2022",
    text: "How we used world-class visual design to attract a great team, win over customers, and get more press for Planetaria.",
    cta: "Listen to podcast",
  },
  {
    title: "Bootstrapping an aerospace company to $17M ARR",
    event: "The Escape Velocity Show, March 2022",
    text: "The story of how we built one of the most promising space startups in the world without taking any capital from investors.",
    cta: "Listen to podcast",
  },
  {
    title: "Programming your company operating system",
    event: "How They Work Radio, September 2021",
    text: "On the importance of creating systems and processes for running your business so that everyone on the team knows how to make the right decision no matter the situation.",
    cta: "Listen to podcast",
  },
];

export default function Speaking() {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1>
          I’ve spoken at events all around the world and been interviewed for
          many podcasts.
        </h1>
        <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
          One of my favorite ways to share my ideas is live on stage, where
          there’s so much more communication bandwidth than there is in
          writing, and I love podcast interviews because they give me the
          opportunity to answer questions instead of just present my
          opinions.
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        <div className="space-y-20">
          <section className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
            <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
              <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                Conferences
              </h2>
              <div className="md:col-span-3">
                <div className="space-y-18">
                  {conferences.map((appearance) => (
                    <article key={appearance.title} className="group relative flex flex-col items-start ">
                      <h3 className="text-base font-semibold mt-1.5 tracking-tight text-zinc-800 dark:text-zinc-100">
                        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50" />
                        <a href="#">
                          <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                          <span className="relative z-10">{appearance.title}</span>
                        </a>
                      </h3>
                      <p className="relative z-10 order-first mb-2.5 flex items-center pl-3.5 text-sm text-zinc-400 dark:text-zinc-500">
                        <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                        </span>
                        {appearance.event}
                      </p>
                      <p className="relative z-10 mt-2.5 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{appearance.text}</p>
                      <div aria-hidden="true" className="relative z-10 mt-4.5 flex items-center text-sm font-medium text-teal-500">
                        {appearance.cta}
                        <ChevronRight />
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
            <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
              <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                Podcasts
              </h2>
              <div className="md:col-span-3">
                <div className="space-y-16">
                  {podcasts.map((appearance) => (
                    <article key={appearance.title} className="group relative flex flex-col items-start">
                      <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50" />
                        <a href="#">
                          <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                          <span className="relative z-10">{appearance.title}</span>
                        </a>
                      </h3>
                      <p className="relative z-10 order-first mb-3 flex items-center pl-3.5 text-sm text-zinc-400 dark:text-zinc-500">
                        <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                        </span>
                        {appearance.event}
                      </p>
                      <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">{appearance.text}</p>
                      <div aria-hidden="true" className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">
                        {appearance.cta}
                        <ChevronRight />
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Container>
  );
}
