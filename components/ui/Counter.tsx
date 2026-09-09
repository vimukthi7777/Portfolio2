"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/animations";

interface CounterProps {
  target: number;
  duration?: number;
  className?: string;
}

export default function Counter({
  target,
  duration = 1.8,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !ref.current) {
        if (ref.current) ref.current.textContent = String(target);
        return;
      }

      const el = ref.current;
      const state = { value: 0 };

      gsap.to(state, {
        value: target,
        duration,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
        onUpdate: () => {
          el.textContent = String(Math.round(state.value));
        },
      });
    },
    { scope: ref },
  );

  return (
    <span ref={ref} className={className}>
      0
    </span>
  );
}