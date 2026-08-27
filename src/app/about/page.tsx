import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import X from "@/components/icon/x";
import Instagram from "@/components/icon/instagram";
import Github from "@/components/icon/github";
import Linkedin from "@/components/icon/linkedin";
import Mail from "@/components/icon/mail";

export const metadata: Metadata = {
  title: "About",
};

const iconClassName = "h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500";

const socials = [
  { logo: <X className={iconClassName} />, name: "Follow on X", link: "#" },
  { logo: <Instagram className={iconClassName} />, name: "Follow on Instagram", link: "#" },
  { logo: <Github className={iconClassName} />, name: "Follow on GitHub", link: "#" },
  { logo: <Linkedin className={iconClassName} />, name: "Follow on LinkedIn", link: "#" },
];

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src="/about-image.webp"
              alt=""
              width={800}
              height={800}
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1>
            I’m Spencer Sharp. I live in New York City, where I design the future.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p className="subtitle">I’ve loved making things for as long as I can remember, and wrote my first program when I was 6 years old, just two weeks after my mom brought home the brand new Macintosh LC 550 that I taught myself to type on.</p>
            <p className="subtitle">The only thing I loved more than computers as a kid was space. When I was 8, I climbed the 40-foot oak tree at the back of our yard while wearing my older sister’s motorcycle helmet, counted down from three, and jumped — hoping the tree was tall enough that with just a bit of momentum I’d be able to get to orbit.</p>
            <p className="subtitle">I spent the next few summers indoors working on a rocket design, while I recovered from the multiple surgeries it took to fix my badly broken legs. It took nine iterations, but when I was 15 I sent my dad’s Blackberry into orbit and was able to transmit a photo back down to our family computer from space.</p>
            <p className="subtitle">Today, I’m the founder of Planetaria, where we’re working on civilian space suits and manned shuttle kits you can assemble at home so that the next generation of kids really <em>can</em> make it to orbit — from the comfort of their own backyards.</p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            {socials.map((social, index) => (
              <li key={social.name} className={`flex ${index > 0 ? "mt-4" : ""}`}>
                <a className="group flex items-center text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500" href={social.link}>
                  {social.logo}
                  <span className="ml-4">{social.name}</span>
                </a>
              </li>
            ))}
            <li className="mt-8 flex border-t border-zinc-100 pt-8 dark:border-zinc-700/40">
              <a className="group flex items-center text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500" href="mailto:spencer@planetaria.tech">
                <Mail className={iconClassName} />
                <span className="ml-4">spencer@planetaria.tech</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
