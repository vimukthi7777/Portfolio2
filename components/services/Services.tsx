"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { EASE, prefersReducedMotion } from "@/lib/animations";
import { services } from "@/data/services";
import SplitMask from "@/components/ui/SplitMask";

export default function Services() {
  const scope = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !scope.current) return;

      const meta = scope.current.querySelectorAll("[data-services-meta]");
      const rows = scope.current.querySelectorAll("[data-service-row]");
      const title = titleRef.current;

      gsap.fromTo(
        meta,
        { y: -10, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.5,
          stagger: 0.06,
          ease: EASE,
          scrollTrigger: { trigger: scope.current, start: "top 80%" },
        },
      );

      if (title) {
        gsap.fromTo(
          title,
          { yPercent: 118 },
          {
            yPercent: 0,
            duration: 0.95,
            ease: "power4.out",
            scrollTrigger: { trigger: scope.current, start: "top 78%" },
          },
        );
      }

      gsap.fromTo(
        rows,
        { y: 30, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
          stagger: 0.09,
          ease: EASE,
          scrollTrigger: { trigger: rows[0], start: "top 86%" },
        },
      );
    },
    { scope },
  );

  return (
    <section id="services" ref={scope} className="section relative overflow-hidden">
      <div className="container-content">
        {/* Masthead */}
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-3" data-services-meta>
            <p className="eyebrow flex items-center gap-3">
              <span className="inline-block size-2 bg-accent" aria-hidden="true" />
              Chapter 02 — Services
            </p>
            <p className="mt-4 max-w-[16rem] text-sm leading-relaxed text-muted">
              A typographic index of what I do — from the first sketch to the
              last deploy.
            </p>
          </div>
          <div className="lg:col-span-9">
            <h2 className="text-display text-[clamp(2.6rem,5.6vw,4.75rem)] uppercase">
              <SplitMask innerClassName="!block">
                <span ref={titleRef}>
                  What I can help <em className="italic !text-accent">you</em> build
                </span>
              </SplitMask>
            </h2>
          </div>
        </div>

        {/* Index rows */}
        <div className="mt-14 border-b-2 border-foreground">
          {services.map((service, i) => (
            <div
              key={service.title}
              data-service-row
              className="group relative border-t border-border last:border-b last:border-b-foreground/40"
            >
              {/* Ink sweep */}
              <span
                className="absolute inset-x-0 bottom-0 top-0 origin-bottom scale-y-0 bg-foreground transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100"
                aria-hidden="true"
              />
              <div className="relative grid gap-4 px-1 py-9 transition-colors duration-300 sm:grid-cols-12 sm:gap-8 sm:py-11 group-hover:text-paper">
                <span className="font-mono text-xs font-bold text-accent sm:col-span-1 sm:pt-2">
                  0{i + 1}
                </span>
                <div className="sm:col-span-7">
                  <h3 className="text-display text-3xl uppercase sm:text-[2.6rem]">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted transition-colors duration-300 group-hover:!text-paper/75">
                    {service.description}
                  </p>
                </div>
                <div className="flex items-end justify-between gap-4 sm:col-span-4 sm:flex-col sm:items-start sm:justify-start sm:pl-6">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-muted transition-colors duration-300 group-hover:!text-paper/60">
                    Service / 0{i + 1}
                  </p>
                  <span
                    className="flex size-10 items-center justify-center border border-border text-foreground transition-all duration-300 group-hover:border-paper/40 group-hover:text-accent"
                    aria-hidden="true"
                  >
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* CTA plate */}
          <div data-service-row className="border-t-2 border-foreground">
            <a
              href="#contact"
              className="focus-ring group flex flex-col gap-3 bg-accent px-1 py-8 text-paper transition-colors duration-300 hover:bg-foreground sm:flex-row sm:items-center sm:justify-between sm:py-10"
            >
              <span className="text-display text-2xl uppercase sm:text-3xl">
                Something custom? Let&apos;s talk
              </span>
              <span className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em]">
                <span className="text-paper/70">kick off a project</span>
                <span className="flex size-10 items-center justify-center border border-paper/40 text-xl transition-transform duration-300 group-hover:rotate-45">
                  +
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}