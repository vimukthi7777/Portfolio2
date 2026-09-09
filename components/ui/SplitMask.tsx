import type { ReactNode } from "react";

/**
 * Masked word-reveal wrapper: the outer span clips overflow while the inner
 * span is translated by GSAP, producing a clean line-by-line text reveal.
 */
export default function SplitMask({
  children,
  className,
  innerClassName,
}: {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <span className={`split-mask ${className ?? ""}`}>
      <span className={`split-inner ${innerClassName ?? ""}`}>{children}</span>
    </span>
  );
}