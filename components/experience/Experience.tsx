"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/animations";
import { experience } from "@/data/experience";

export default function Experience() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!scope.current || prefersReducedMotion()) return;

      const heads = scope.current.querySelectorAll("[data-exp-head]");
      const items = gsap.utils.toArray<HTMLElement>(
        scope.current.querySelectorAll("[data-exp-item]"),
      );

      gsap.fromTo(
        heads,
        { y: 16, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: { trigger: scope.current, start: "top 78%" },
        },
      );

      items.forEach((el) => {
        const stamp = el.querySelector("[data-exp-stamp]");
        gsap.fromTo(
          el,
          { clipPath: "inset(100% 0% 0% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1,
            ease: "power4.out",
            scrollTrigger: { trigger: el, start: "top 84%" },
          },
        );
        if (stamp) {
          gsap.fromTo(
            stamp,
            { yPercent: 120 },
            {
              yPercent: 0,
              duration: 0.9,
              delay: 0.2,
              ease: "power4.out",
            },
          );
        }
      });
    },
    { scope },
  );

  return (
    <section id="experience" ref={scope} className="section relative">
      <div className="container-content">
        {/* Masthead */}
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-3" data-exp-head>
            <p className="eyebrow flex items-center gap-3">
              <span className="inline-block size-2 bg-accent" aria-hidden="true" />
              Chapter 05 — Experience
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              A registry of the places I&apos;ve worked — sorted, stamped and
              signed.
            </p>
          </div>
          <div className="lg:col-span-9">
            <h2
              className="text-display text-[clamp(2.6rem,5.6vw,4.75rem)] uppercase"
              data-exp-head
            >
              Where I&apos;ve <em className="italic !text-accent">worked</em>
            </h2>
            <p
              className="mt-3 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-muted"
              data-exp-head
            >
              03 records on file
            </p>
          </div>
        </div>

        {/* Registry */}
        <div className="mt-14">
          {experience.map((item, i) => (
            <article
              key={item.id}
              data-exp-item
              className="relative grid gap-8 border-t-2 border-foreground py-10 sm:py-14 lg:grid-cols-12 lg:gap-12"
            >
              {/* Stamp */}
              <span
                data-exp-stamp
                aria-hidden="true"
                className="text-outline text-display absolute right-0 top-6 hidden select-none text-8xl lg:block"
              >
                0{i + 1}
              </span>

              <div className="lg:col-span-3">
                <p className="text-display text-[clamp(1.7rem,2.8vw,2.6rem)] leading-none sm:leading-none">
                  {item.period}
                </p>
                {item.current ? (
                  <p className="mt-4 inline-flex items-center gap-2 border border-accent bg-accent/10 px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-accent">
                    <span className="size-1.5 animate-pulse bg-accent" aria-hidden="true" />
                    Current post
                  </p>
                ) : (
                  <p className="mt-4 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted">
                    Record closed
                  </p>
                )}
              </div>

              <div className="lg:col-span-6">
                <h3 className="sr-only">{item.role}</h3>
                <p className="text-display text-3xl uppercase sm:text-4xl">
                  {item.role}
                </p>
                <p className="mt-2 font-mono text-sm text-accent">{item.company}</p>
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted">
                  {item.summary}
                </p>
                <ul className="mt-6 space-y-2.5 border-l-2 border-border pl-4">
                  {item.responsibilities.map((responsibility) => (
                    <li
                      key={responsibility}
                      className="flex gap-3 text-sm leading-relaxed text-muted"
                    >
                      <span className="text-accent" aria-hidden="true">
                        —
                      </span>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-3 lg:border-l lg:border-border lg:pl-8">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted">
                  Stack on file
                </p>
                <ul className="mt-4 space-y-2.5">
                  {item.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="flex items-center gap-3 font-mono text-sm text-foreground transition-colors duration-200 hover:text-accent"
                    >
                      <span className="size-1 bg-accent" aria-hidden="true" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
          <div className="border-t-2 border-foreground" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}