import X from "@/components/icon/x";
import Instagram from "@/components/icon/instagram";
import Github from "@/components/icon/github";
import Linkedin from "@/components/icon/linkedin";
import ChevronRight from "@/components/icon/chevron-right";
import Image from "next/image";
import Container from "@/components/Container";

const socials = [
  { logo: <X />, name: "x", label: "Follow on X", link: "#" },
  { logo: <Instagram />, name: "instagram", label: "Follow on Instagram", link: "#" },
  { logo: <Github />, name: "github", label: "Follow on GitHub", link: "#" },
  { logo: <Linkedin />, name: "linkedin", label: "Follow on LinkedIn", link: "#" },
];
const carousel = [
  { image: "/carousel-1.webp", width: 640, height: 960, rotation: "right", },
  { image: "/carousel-2.webp", width: 640, height: 427, rotation: "left", },
  { image: "/carousel-3.webp", width: 640, height: 427, rotation: "right", },
  { image: "/carousel-4.webp", width: 640, height: 800, rotation: "right", },
  { image: "/carousel-5.webp", width: 640, height: 360, rotation: "left", },
];
const timeline = [
  { date: "September 5, 2022",dateinnumbers:"2022-09-05", title: "Crafting a design system for a multiplanetary future", text: "Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.", link: "#" },
  { date: "September 2, 2022", title: "Introducing Animaginary: High performance web animations", text: "When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself.", link: "#" },
  { date: "July 14, 2022", title: "Rewriting the cosmOS kernel in Rust", text: "When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language with a lot of benefits, but it’s been a while since I’ve seen an article on the front page of Hacker News about rewriting some important tool in Go and I see articles on there about rewriting things in Rust every single week.", link: "#" },
];
const resume = [
  { company: "Planetaria", title: "CEO", logo: "/planetaria.svg", logoSize: 32, start: "2019", end: "Present" },
  { company: "Airbnb", title: "Product Designer", logo: "/airbnb.svg", logoSize: 28, start: "2014", end: "2019" },
  { company: "Facebook", title: "iOS Software Engineer", logo: "/facebook.svg", logoSize: 28, start: "2011", end: "2014" },
  { company: "Starbucks", title: "Shift Supervisor", logo: "/starbucks.svg", logoSize: 28, start: "2008", end: "2011" },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-16 sm:gap-20">
      <Container className="mt-9">
        <div className="max-w-2xl flex flex-col gap-6">
          <h1>Software designer, founder, and amateur astronaut.</h1>
          <p className="subtitle">I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.</p>
          <div className="flex flex-row gap-6">
            {
              socials.map((social) => (
                <a href={social.link} key={social.name} aria-label={social.label} className="group -m-1 p-1">
                  {social.logo}
                </a>
              ))
            }
          </div>
        </div>
      </Container>

      
      <div className="py-4 -my-4 flex flex-row justify-center gap-5 sm:gap-8 overflow-hidden">
        {
          carousel.map((carousel, index) => (
            <div key={index} className={`relative w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 ${carousel.rotation === "left" ? "-rotate-2" : "rotate-2" }`}>
              <div className="aspect-9/10">
                <Image alt="" width={carousel.width} height={carousel.height} src={carousel.image} loading="lazy" sizes="(min-width: 640px) 18rem, 11rem" className="absolute inset-0 h-full w-full object-cover" />
              </div>
            </div>
          ))
        }
      </div>
      <Container className="mt-8">
        <div className="mx-auto max-w-xl grid grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-17">
            {
              timeline.map((time) => (
                <article key={time.date} className="group relative flex flex-col items-start">
                  <h2 className="h2-var mt-1">
                    <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50" />
                    <a href={time.link}>
                      <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                      <span className="relative z-10">{time.title}</span>
                    </a>
                  </h2>
                  <time dateTime={time.dateinnumbers} className="date relative z-10 order-first mb-3 flex items-center pl-3.5">
                    <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                      <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                    </span>
                    {time.date}
                  </time>
                  <p className="relative z-10 mt-2.5 text-sm text-zinc-600 dark:text-zinc-400 leading-6">{time.text}</p>
                  <div aria-hidden="true" className="relative z-10 mt-5 flex items-center text-sm font-medium text-teal-500">
                    Read article
                    <ChevronRight />
                  </div>
                </article>
              ))
              }
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <form action="/thank-you" className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
              <h2 className="flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6 flex-none">
                  <path d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z" className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"></path>
                  <path d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6" className="stroke-zinc-400 dark:stroke-zinc-500"></path>
                </svg>
                <span className="ml-3">Stay up to date</span>
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">Get notified when I publish something new, and unsubscribe at any time.</p>
              <div className="mt-6 flex items-center">
                <span className="flex min-w-0 flex-auto p-px">
                  <input placeholder="Email address" aria-label="Email address" required className="w-full appearance-none rounded-[calc(var(--radius-md)-1px)] bg-white px-3 py-[calc(--spacing(2.5)-1px)] shadow-md shadow-zinc-800/5 outline outline-zinc-900/10 placeholder:text-zinc-400 focus:ring-4 focus:ring-teal-500/10 focus:outline-teal-500 sm:text-sm dark:bg-zinc-700/15 dark:text-zinc-200 dark:outline-zinc-700 dark:placeholder:text-zinc-500 dark:focus:ring-teal-400/10 dark:focus:outline-teal-400" type="email" />
                </span>
                <button className="inline-flex items-center gap-2 justify-center rounded-md py-2.5 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 ml-4 flex-none" type="submit">Join</button>
              </div>
            </form>
            <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
              <h2 className="flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6 flex-none">
                  <path d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z" className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"></path>
                  <path d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5" className="stroke-zinc-400 dark:stroke-zinc-500"></path>
                </svg>
                <span className="ml-3">Work</span>
              </h2>
              <ol className="mt-6.5 space-y-5">
                {resume.map((role) => (
                  <li key={role.company} className="flex gap-4">
                    <div className="relative mt-0.5 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                      <Image src={role.logo} alt="" width={role.logoSize} height={role.logoSize} className="h-7 w-7" />
                    </div>
                    <dl className="flex items-center flex-auto flex-wrap gap-x-2">
                      <dt className="sr-only">Company</dt>
                      <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">{role.company}</dd>
                      <dt className="sr-only">Role</dt>
                      <dd className="text-[13px] mt-1 text-zinc-500 dark:text-zinc-400">{role.title}</dd>
                      <dt className="sr-only">Date</dt>
                      <dd className="ml-auto text-[13px] mt-1  text-zinc-400 dark:text-zinc-500" aria-label={`${role.start} until ${role.end}`}>
                        <time dateTime={role.start}>{role.start}</time> <span aria-hidden="true">—</span> <time dateTime={role.end}>{role.end}</time>
                      </dd>
                    </dl>
                  </li>
                ))}
              </ol>
              <a className="inline-flex items-center gap-2 justify-center rounded-md py-2.5 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6.5 w-full" href="#">
                Download CV
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50">
                  <path d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
