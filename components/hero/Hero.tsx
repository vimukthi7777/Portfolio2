"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { EASE, prefersReducedMotion } from "@/lib/animations";
import SplitMask from "@/components/ui/SplitMask";
import { site } from "@/data/site";

const year = new Date().getFullYear();

export default function Hero() {
  const scope = useRef<HTMLElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !scope.current) return;

      const line1 = line1Ref.current;
      const line2 = line2Ref.current;
      const meth = scope.current.querySelectorAll("[data-hero-meta]");
      const below = scope.current.querySelectorAll("[data-hero-below]");

      const tl = gsap.timeline({ defaults: { ease: EASE } });

      tl.fromTo(meth, { y: -14, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.08 }, 0.1)
        .fromTo(
          [line1, line2],
          { yPercent: 118 },
          { yPercent: 0, duration: 1.05, stagger: 0.14, ease: "power4.out" },
          0.35,
        )
        .fromTo(
          below,
          { y: 22, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.65, stagger: 0.1 },
          0.85,
        );

      // Scroll-driven drift of the outlined watermark.
      gsap.to("[data-hero-watermark]", {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: scope.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Scroll progress line in the indicator.
      gsap.fromTo(
        "[data-hero-scrollline]",
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          transformOrigin: "left",
          scrollTrigger: {
            trigger: scope.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.4,
          },
        },
      );
    },
    { scope },
  );

  return (
    <section
      id="home"
      ref={scope}
      className="relative flex min-h-[100svh] flex-col overflow-hidden"
      aria-label="Introduction"
    >
      {/* Editorial background: hairline grid + outlined nameplate */}
      <div
        className="pointer-events-none absolute inset-0 bg-grid-editorial"
        aria-hidden="true"
      />
      <div
        data-hero-watermark
        aria-hidden="true"
        className="text-display pointer-events-none absolute -bottom-[0.16em] -right-8 select-none whitespace-nowrap text-[clamp(6rem,22vw,20rem)] leading-none"
      >
        <span className="text-outline">Vimukthi</span>
      </div>

      <div className="container-content relative z-10 flex flex-1 flex-col pt-[4.25rem]">
        {/* Masthead meta strip */}
        <div className="grid grid-cols-2 border-b border-border pb-4 pt-6 sm:grid-cols-4 sm:pb-5" data-hero-meta>
          <p className="eyebrow">Portfolio — ©{year}</p>
          <p className="eyebrow hidden sm:block">No. 01 / Hero</p>
          <p className="eyebrow hidden sm:block">Kandy, Sri Lanka</p>
          <p className="eyebrow text-right">
            <span className="text-accent">Vimukthi</span>
          </p>
        </div>

        {/* Headline */}
        <div className="pt-10 sm:pt-16 lg:pt-20">
          <p className="eyebrow mb-7 flex items-center gap-3" data-hero-meta>
            <span className="inline-block size-2 bg-accent" aria-hidden="true" />
            Hi, I&apos;m Vimukthi
          </p>

          <h1 className="text-display text-[clamp(4.4rem,15vw,13rem)] uppercase">
            <SplitMask innerClassName="!block">
              <span ref={line1Ref}>Software</span>
            </SplitMask>
            <SplitMask innerClassName="!block !font-serif italic !text-accent">
              <span ref={line2Ref}>Developer</span>
            </SplitMask>
          </h1>
        </div>

        {/* Below-the-fold strip */}
        <div className="mt-auto grid gap-x-10 gap-y-10 pb-14 pt-14 lg:grid-cols-12 lg:pb-16">
          <div className="lg:col-span-5" data-hero-below>
            <p className="max-w-md text-base leading-relaxed text-muted sm:text-lg" data-hero-below>
              I build fast, accessible and thoughtfully designed web
              applications from pixel-perfect frontends to the APIs and
              infrastructure that power them. Currently focused on React,
              Next.js and TypeScript and Springboot.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 lg:col-span-5" data-hero-below>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#projects" className="btn-primary">
                View Projects
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>
            </div>

            <div className="mt-4 hidden h-px w-full max-w-xs bg-border sm:block" aria-hidden="true" />
            <p className="eyebrow !text-muted/80">
              Capacity — taking on new work for {year}
            </p>
          </div>

          <div className="lg:col-span-2" data-hero-below>
            <ul className="flex flex-wrap gap-x-6 gap-y-3 lg:flex-col lg:gap-2">
              {[
                { label: "GitHub", href: site.socials.github },
                { label: "LinkedIn", href: site.socials.linkedin },
              ].map((social, i) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted transition-colors duration-200 hover:text-foreground"
                  >
                    <span className="text-accent">0{i + 1}</span>
                    {social.label}
                    <ArrowUpRight
                      className="size-3 text-foreground/40 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="flex items-center gap-4 border-t border-border pb-7 pt-4"
          data-hero-below
        >
          <span className="eyebrow !text-muted">Scroll</span>
          <div className="relative h-1.5 w-32 overflow-hidden" aria-hidden="true">
            <div className="absolute inset-0 bg-border" />
            <div
              data-hero-scrollline
              className="absolute inset-0 origin-left bg-accent"
            />
          </div>
          <span className="font-mono text-xs text-muted">↓</span>
        </div>
      </div>
    </section>
  );
}