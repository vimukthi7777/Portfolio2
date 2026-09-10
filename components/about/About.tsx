"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { EASE, prefersReducedMotion } from "@/lib/animations";
import Counter from "@/components/ui/Counter";
import SplitMask from "@/components/ui/SplitMask";
import { site } from "@/data/site";

const whatIDo = [
  {
    title: "Full-Stack Development",
    text: "APIs, databases and authentication wired into clean, maintainable interfaces.",
  },
  {
    title: "Database Management",
    text: "Designing, managing and optimizing relational and NoSQL databases for secure and efficient data handling.",
  },
  {
    title: "Backend & API Development",
    text: "Scalable REST APIs, authentication, business logic and server side solutions built for real world applications.",
  },
  {
    title: "Frontend Engineering",
    text: "Component architectures, design systems and animations that stay fast and accessible at scale.",
  },
  {
    title: "UI/UX & Design",
    text: "Flows and interfaces grounded in usability, hierarchy and thoughtful motion.",
  },
];

const interests = [
"Full-Stack Development",
"Database Management",
"Backend & API Development",
"Database Management",
"UI/UX Design",
];

const stats = [
  { value: 14, suffix: "+", label: "Projects shipped" },
  { value: 12, suffix: "+", label: "Technologies" },
  { value: 2, suffix: "+", label: "Years of experience" },
];

export default function About() {
  const scope = useRef<HTMLElement>(null);
  const leadRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !scope.current) return;

      const fig = scope.current.querySelector("[data-about-fig]");
      const lead = leadRef.current;
      const rows = scope.current.querySelectorAll("[data-about-row]");
      const simples = scope.current.querySelectorAll("[data-about-simple]");

      if (fig) {
        gsap.fromTo(
          fig,
          { clipPath: "inset(100% 0% 0% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.1,
            ease: "power4.out",
            scrollTrigger: { trigger: fig, start: "top 80%" },
          },
        );
      }

      if (lead) {
        gsap.fromTo(
          lead,
          { yPercent: 118 },
          {
            yPercent: 0,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: { trigger: lead.closest("[data-about-lead]"), start: "top 78%" },
          },
        );
      }

      gsap.fromTo(
        rows,
        { x: -18, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: EASE,
          scrollTrigger: { trigger: rows[0] ?? scope.current, start: "top 85%" },
        },
      );

      gsap.fromTo(
        simples,
        { y: 14, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.55,
          stagger: 0.06,
          ease: EASE,
          scrollTrigger: { trigger: simples[0] ?? scope.current, start: "top 86%" },
        },
      );
    },
    { scope },
  );

  return (
    <section id="about" ref={scope} className="section relative">
      <div className="container-content">
        {/* Editorial lead */}
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-3" data-about-simple>
            <p className="eyebrow flex items-center gap-3">
              <span className="inline-block size-2 bg-accent" aria-hidden="true" />
              Chapter 01 — About
            </p>
            <span
              className="text-outline text-display mt-6 block select-none text-7xl"
              aria-hidden="true"
            >
              01
            </span>
          </div>
          <div className="lg:col-span-9" data-about-lead>
            <p className="text-display text-[clamp(1.9rem,3.2vw,2.9rem)] leading-[1.08]">
              <SplitMask innerClassName="!block">
                <span ref={leadRef}>
                  Software development is equal parts{" "}
                  <em className="italic !text-accent">craft</em> and curiosity —
                  it&apos;s the small details that turn a product into
                  something people enjoy <em className="italic !text-accent">using</em>.
                </span>
              </SplitMask>
            </p>
          </div>
        </div>

        {/* Figure + index */}
        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Portrait plate */}
          <div className="lg:col-span-5">
            <div className="relative border-2 border-foreground bg-paper p-2 shadow-[6px_6px_0_0_rgb(26_22_17)]">
                <Image
                  src="/images/me.png"
                  alt={`Portrait of ${site.name}, Software Developer`}
                  width={1254}
                  height={1254}
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  priority
                  className="h-auto w-full object-cover"
                />
                <span
                  className="absolute -right-3 -top-3 bg-accent px-2.5 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-paper"
                  aria-hidden="true"
                >
                  Open to work
                </span>
              </div>
            <figure data-about-fig className="relative">
              
              <figcaption className="mt-3 flex items-center justify-between gap-4 border-t border-border pt-2">
                <span className="eyebrow !text-muted">
                  Fig. 01 — Portrait, {site.name}
                </span>
                <span className="font-mono text-[0.6rem] text-accent">
                  ©{new Date().getFullYear()}
                </span>
              </figcaption>
            </figure>

            {/* Interests */}
            <div className="mt-8 border border-border p-6 sm:p-7" data-about-simple>
              <div className="flex items-baseline justify-between gap-4">
                <p className="eyebrow">Development interests</p>
                <span className="font-mono text-[0.6rem] uppercase tracking-widest text-accent">
                  ✱ focus
                </span>
              </div>
              <ul className="mt-4">
                {interests.map((item, i) => (
                  <li
                    key={item}
                    className="group flex items-center gap-4 border-t border-border py-3 last:border-b"
                  >
                    <span className="font-mono text-xs text-accent">0{i + 1}</span>
                    <span className="text-sm text-foreground">{item}</span>
                    <ArrowUpRight
                      className="ml-auto size-3.5 text-foreground/30 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                      aria-hidden="true"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* The rest */}
          <div className="lg:col-span-7">
            <div className="grid gap-6 sm:grid-cols-2" data-about-simple>
              <p className="text-base leading-relaxed text-muted">
                My interest in software started with a simple curiosity about
                how things work on the web ,it grew into a craft. Today I
                design and build end-to-end web experiences, paying close
                attention to behavior, motion and the small details that make
                a product feel considered.
              </p>
              <p className="text-base leading-relaxed text-muted">
                I work best where design and engineering overlap: turning rough
                ideas into interfaces that are fast, accessible and a pleasure
                to use and shipping them with the systems that keep them
                running.
              </p>
            </div>

            <h3 className="eyebrow mt-14 flex items-center gap-3">
              What I do
              <span className="h-px flex-1 bg-border" aria-hidden="true" />
            </h3>
            <ol className="mt-4 border-t-2 border-foreground">
              {whatIDo.map((item, i) => (
                <li
                  key={item.title}
                  data-about-row
                  className="group grid gap-1 border-b border-border py-6 sm:grid-cols-12 sm:gap-6 sm:py-7"
                >
                  <span className="font-mono text-xs font-bold text-accent sm:col-span-1 sm:pt-1">
                    0{i + 1}
                  </span>
                  <h4 className="sm:col-span-4">{item.title}</h4>
                  <p className="text-sm leading-relaxed text-muted sm:col-span-7">
                    {item.text}
                  </p>
                </li>
              ))}
            </ol>

            <div className="mt-12" data-about-simple>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="eyebrow">Technologies I work with</h3>
                <span className="font-mono text-[0.6rem] uppercase tracking-widest text-muted">
                  Inventory / 02
                </span>
              </div>
              <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3.5 border-t-2 border-foreground pt-5">
                {[
                  "Next.js",
                  "React",
                  "Springboot",
                  "TypeScript",
                  "JavaScript",
                  "Java",
                  "Tailwind CSS",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "PostgreSQL",
                  "Figma",
                ].map((tech) => (
                  <li
                    key={tech}
                    className="group flex items-center gap-3 font-mono text-sm text-foreground transition-colors duration-200 hover:text-accent"
                  >
                    <span
                      className="size-1.5 bg-border transition-colors duration-200 group-hover:bg-accent"
                      aria-hidden="true"
                    />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Facts band */}
        <dl
          className="mt-20 grid border-t-2 border-foreground pt-2 sm:grid-cols-3"
          data-about-simple
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col gap-1 border-b border-border py-8 sm:border-b-0 sm:py-10 ${
                i > 0 ? "sm:border-l sm:border-border sm:pl-10" : ""
              }`}
            >
              <dt className="eyebrow !text-muted">{stat.label}</dt>
              <dd className="text-display mt-2 text-6xl sm:text-7xl">
                <Counter target={stat.value} />
                <span className="italic !text-accent">{stat.suffix}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}