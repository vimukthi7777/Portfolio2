"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { revealUp } from "@/lib/animations";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
}: RevealProps) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!scope.current) return;
      revealUp(gsap, scope.current, {
        y,
        delay,
        duration: 1,
        start: "top 88%",
      });
    },
    { scope },
  );

  return (
    <div ref={scope} className={className}>
      {children}
    </div>
  );
}