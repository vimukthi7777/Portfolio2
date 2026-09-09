"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { revealUp } from "@/lib/animations";
import { skillGroups } from "@/data/skills";
import SplitMask from "@/components/ui/SplitMask";

export default function Skills() {
  const scope = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (!scope.current) return;
      revealUp(gsap, scope.current.querySelectorAll("[data-skill-group]"), {
        stagger: 0.12,
        start: "top 85%",
      });
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { yPercent: 118 },
          {
            yPercent: 0,
            duration: 0.95,
            ease: "power4.out",
            scrollTrigger: { trigger: scope.current, start: "top 74%" },
          },
        );
      }
    },
    { scope },
  );

  return (
    <section id="skills" ref={scope} className="section relative">
      <div className="container-content">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left rail */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow flex items-center gap-3">
                <span className="inline-block size-2 bg-accent" aria-hidden="true" />
                Chapter 04 — Skills
              </p>
              <span
                className="text-outline text-display mt-6 block select-none text-8xl"
                aria-hidden="true"
              >
                04
              </span>
              <h2 className="text-display mt-6 text-[clamp(2.4rem,4.6vw,3.9rem)] uppercase">
                <SplitMask innerClassName="!block">
                  <span ref={titleRef}>My tech inventory</span>
                </SplitMask>
              </h2>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
                The languages, frameworks and tools I reach for daily — a
                working inventory measured in shipped projects, not badges.
              </p>
              <p className="mt-8 flex items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted">
                <span className="size-1.5 bg-accent" aria-hidden="true" />
                Inventory updated · {new Date().getFullYear()}
              </p>
            </div>
          </div>

          {/* Spec sheet */}
          <div className="lg:col-span-8">
            <div className="border-t-2 border-foreground">
              {skillGroups.map((group, i) => (
                <div
                  key={group.category}
                  data-skill-group
                  className="border-b border-border py-9"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-4">
                    <h3 className="font-mono text-sm font-bold uppercase tracking-[0.2em]">
                      <span className="text-accent">0{i + 1} /</span>{" "}
                      {group.category}
                    </h3>
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted">
                      Group / {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
                    {group.items.map((item, j) => (
                      <li key={item}>
                        <span className="group inline-flex cursor-default items-center gap-2 font-mono text-sm text-foreground transition-colors duration-200 hover:text-accent">
                          <span
                            className="font-mono text-[0.6rem] text-accent/70 transition-colors duration-200 group-hover:text-accent"
                            aria-hidden="true"
                          >
                            0{j + 1}
                          </span>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p
              className="mt-8 flex items-center gap-4 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted"
              data-skill-group
            >
              <span className="text-accent">↳</span>
              New tools are added as they earn a place in production.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}