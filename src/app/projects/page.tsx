import Image from "next/image";
import type { Metadata } from "next";
import Container from "@/components/Container";
import LinkIcon from "@/components/icon/link";

export const metadata: Metadata = {
  title: "Projects",
};

const projects = [
  {
    name: "Planetaria",
    description: "Creating technology to empower civilians to explore space on their own terms.",
    link: { href: "http://planetaria.tech", label: "planetaria.tech" },
    logo: "/planetaria.svg",
  },
  {
    name: "Animaginary",
    description: "High performance web animation library, hand-written in optimized WASM.",
    link: { href: "#", label: "github.com" },
    logo: "/animaginary.svg",
  },
  {
    name: "HelioStream",
    description: "Real-time video streaming library, optimized for interstellar transmission.",
    link: { href: "#", label: "github.com" },
    logo: "/helio-stream.svg",
  },
  {
    name: "cosmOS",
    description: "The operating system that powers our Planetaria space shuttles.",
    link: { href: "#", label: "github.com" },
    logo: "/cosmos.svg",
  },
  {
    name: "OpenShuttle",
    description: "The schematics for the first rocket I designed that successfully made it to orbit.",
    link: { href: "#", label: "github.com" },
    logo: "/open-shuttle.svg",
  },
];

export default function Projects() {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1>Things I’ve made trying to put my dent in the universe.</h1>
        <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
          I’ve worked on tons of little projects over the years but these are the ones that
          I’m most proud of. Many of them are open-source, so if you see something that
          piques your interest, check out the code and contribute if you have ideas for how
          it can be improved.
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.name} className="group relative flex flex-col items-start">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image src={project.logo} alt="" width={32} height={32} className="h-8 w-8" />
              </div>
              <h2 className="mt-6.5 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50" />
                <a href={project.link.href}>
                  <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative z-10">{project.name}</span>
                </a>
              </h2>
              <p className="relative z-10 mt-2.5 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
              <p className="relative z-10 mt-6 flex items-center text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
