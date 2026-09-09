"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { EASE, prefersReducedMotion } from "@/lib/animations";
import SplitMask from "@/components/ui/SplitMask";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const scope = useRef<HTMLDivElement>(null);
  const titleInnerRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !scope.current || !titleInnerRef.current) return;

      const eyebrowEl = scope.current.querySelector("[data-heading-eyebrow]");
      const descEl = scope.current.querySelector("[data-heading-desc]");
      const titleInner = titleInnerRef.current;

      gsap.fromTo(
        eyebrowEl,
        { y: -10, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.5,
          ease: EASE,
          scrollTrigger: { trigger: scope.current, start: "top 85%" },
        },
      );
      gsap.fromTo(
        titleInner,
        { yPercent: 118 },
        {
          yPercent: 0,
          duration: 0.95,
          ease: "power4.out",
          scrollTrigger: { trigger: scope.current, start: "top 82%" },
        },
      );
      if (descEl) {
        gsap.fromTo(
          descEl,
          { y: 18, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.6,
            delay: 0.2,
            ease: EASE,
            scrollTrigger: { trigger: scope.current, start: "top 78%" },
          },
        );
      }
    },
    { scope },
  );

  const centered = align === "center";

  return (
    <div
      ref={scope}
      className={`relative ${centered ? "mx-auto max-w-3xl text-center" : ""}`}
    >
      {/* Chapter rule */}
      <div
        data-heading-eyebrow
        className={`flex items-center gap-4 border-t-2 border-foreground pt-4 ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="font-mono text-sm font-bold text-accent">{index}</span>
        <span className="h-px w-10 bg-accent" aria-hidden="true" />
        <span className="eyebrow" data-heading-eyebrow>
          {eyebrow}
        </span>
        {centered ? null : <span className="h-px flex-1 bg-border" aria-hidden="true" />}
      </div>

      <h2
        className={`text-display mt-7 text-[clamp(2.5rem,5.4vw,4.5rem)] uppercase ${
          centered ? "" : "max-w-4xl"
        }`}
      >
        <SplitMask innerClassName="!block">
          <span ref={titleInnerRef}>{title}</span>
        </SplitMask>
      </h2>

      {description ? (
        <p
          data-heading-desc
          className={`mt-6 text-base leading-relaxed text-muted sm:text-lg ${
            centered ? "mx-auto max-w-xl" : "max-w-xl"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}