"use client";

import { useRef, useState, useLayoutEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { EASE, prefersReducedMotion } from "@/lib/animations";
import { projects, projectCategories, type ProjectCategory } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import SplitMask from "@/components/ui/SplitMask";

export default function Projects() {
  const scope = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState<"all" | ProjectCategory>("all");
  const isFirstRender = useRef(true);

  const filtered =
    active === "all"
      ? projects
      : projects.filter((project) => project.category === active);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !scope.current || !headingRef.current) return;

      const heading = headingRef.current;

      gsap.fromTo(
        heading,
        { yPercent: 118 },
        {
          yPercent: 0,
          duration: 0.95,
          ease: "power4.out",
          scrollTrigger: { trigger: scope.current, start: "top 74%" },
        },
      );
      gsap.fromTo(
        scope.current.querySelectorAll("[data-projects-meta]"),
        { y: -10, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.5,
          ease: EASE,
          scrollTrigger: { trigger: scope.current, start: "top 80%" },
        },
      );

      const cards = gsap.utils.toArray<HTMLElement>(
        scope.current.querySelectorAll("[data-project-card]"),
      );

      cards.forEach((card) => {
        const title = card.querySelector("[data-proj-title]");
        const fades = card.querySelectorAll("[data-proj-fade]");
        const figWrap = card.querySelector("[data-proj-fig]");

        const tl = gsap.timeline({
          defaults: { ease: "power4.out" },
          scrollTrigger: { trigger: card, start: "top 82%" },
        });
        if (figWrap) {
          tl.fromTo(figWrap, { clipPath: "inset(100% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.1 }, 0);
        }
        tl.fromTo(title, { yPercent: 118 }, { yPercent: 0, duration: 0.9 }, 0.15);
        tl.fromTo(
          fades,
          { y: 16, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.06, ease: EASE },
          0.55,
        );
      });
    },
    { scope },
  );

  useLayoutEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (prefersReducedMotion() || !gridRef.current) return;

    const cards = Array.from(
      gridRef.current.querySelectorAll("[data-project-card]"),
    );
    gsap.fromTo(
      cards,
      { y: 28, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.45, stagger: 0.04, ease: "power2.out" },
    );
  }, [active]);

  const handleFilter = (value: "all" | ProjectCategory) => {
    if (value === active) return;

    const cards = gridRef.current
      ? Array.from(gridRef.current.querySelectorAll("[data-project-card]"))
      : [];
    if (prefersReducedMotion() || cards.length === 0) {
      setActive(value);
      return;
    }

    gsap.to(cards, {
      y: 16,
      autoAlpha: 0,
      duration: 0.16,
      stagger: 0.02,
      ease: "power2.in",
      onComplete: () => setActive(value),
    });
  };

  return (
    <section id="projects" ref={scope} className="section relative">
      <div className="container-content">
        {/* Masthead + filters */}
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-3" data-projects-meta>
            <p className="eyebrow flex items-center gap-3">
              <span className="inline-block size-2 bg-accent" aria-hidden="true" />
              Chapter 03 — Projects
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Six case plates — selected work and experiments, numbered in the
              order I&apos;m most proud of them.
            </p>
          </div>

          <div className="lg:col-span-9">
            <h2 className="text-display text-[clamp(2.6rem,5.6vw,4.75rem)] uppercase">
              <SplitMask innerClassName="!block">
                <span ref={headingRef}>
                  Selected work &amp; <em className="italic !text-accent">experiments</em>
                </span>
              </SplitMask>
            </h2>

            <div
              className="mt-8 flex flex-wrap gap-2"
              role="tablist"
              aria-label="Filter projects by category"
              data-projects-meta
            >
              {projectCategories.map((category) => {
                const isActive = active === category.value;
                return (
                  <button
                    key={category.value}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => handleFilter(category.value)}
                    className={`focus-ring flex items-center gap-2 rounded-[2px] px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] transition-all duration-200 ${
                      isActive
                        ? "bg-foreground text-paper"
                        : "border border-border bg-transparent text-muted hover:border-foreground hover:text-foreground"
                    }`}
                  >
                    <span
                      className={`size-1.5 ${isActive ? "bg-accent" : "bg-border"}`}
                      aria-hidden="true"
                    />
                    {category.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Plates */}
        <div ref={gridRef} className="mt-8">
          {filtered.map((project, index) => (
            <div key={project.id} className="border-t-2 border-foreground first:border-t-2">
              <ProjectCard project={project} index={index} />
            </div>
          ))}
          <div className="border-t-2 border-foreground" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}