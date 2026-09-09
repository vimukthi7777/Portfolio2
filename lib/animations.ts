import type { gsap as GsapType } from "gsap";

export const prefersReducedMotion = (): boolean =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const EASE = "power3.out";
export const EASE_IN_OUT = "power2.inOut";

export interface FadeUpOptions {
  y?: number;
  duration?: number;
  stagger?: number;
  delay?: number;
  ease?: string;
  start?: string;
  end?: string;
}

/**
 * Reveals targets with a fade + upward slide once they enter the viewport.
 * Respects prefers-reduced-motion by skipping the animation entirely.
 */
export function revealUp(
  gsap: typeof GsapType,
  raw: string | object,
  opts: FadeUpOptions = {},
) {
  if (prefersReducedMotion()) return () => undefined;

  const targets = gsap.utils.toArray(raw);
  if (targets.length === 0) return () => undefined;

  const {
    y = 32,
    duration = 0.9,
    stagger = 0.12,
    delay = 0,
    ease = EASE,
    start = "top 85%",
    end = "top 30%",
  } = opts;

  const tween = gsap.fromTo(
    targets,
    { y, autoAlpha: 0 },
    {
      y: 0,
      autoAlpha: 1,
      duration,
      delay,
      ease,
      stagger,
      scrollTrigger: {
        trigger: targets[0] as Element,
        start,
        end,
      },
    },
  );

  return () => {
    tween.scrollTrigger?.kill();
    tween.kill();
  };
}