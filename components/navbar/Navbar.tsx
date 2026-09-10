"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/animations";
import { site } from "@/data/site";

const SECTION_IDS = ["home", "about", "services", "projects", "experience", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("home");
  const barRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => {
      const offset = window.innerHeight * 0.35;
      let current = "home";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !barRef.current) return;
      gsap.fromTo(
        barRef.current,
        { y: -28, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.6, ease: "power3.out", delay: 0.5 },
      );
      gsap.fromTo(
        progressRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
        },
      );
    },
    { scope: barRef },
  );

  useGSAP(
    () => {
      if (!menuRef.current || !menuOpen || prefersReducedMotion()) return;
      gsap.fromTo(
        menuRef.current.querySelectorAll("[data-menu-item]"),
        { yPercent: 30, autoAlpha: 0 },
        { yPercent: 0, autoAlpha: 1, duration: 0.5, stagger: 0.05, ease: "power3.out" },
      );
    },
    { dependencies: [menuOpen], scope: menuRef },
  );

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        ref={barRef}
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-border bg-background/92 backdrop-blur-sm"
            : "border-transparent bg-background/60 backdrop-blur-[2px]"
        }`}
      >
        {/* Masthead seam: ink rule + orange tab */}
        <div className="relative h-[3px] bg-foreground" aria-hidden="true">
          <div className="absolute inset-y-0 left-0 w-20 bg-accent" />
        </div>
        <div className="absolute inset-x-0 top-[3px] h-px" aria-hidden="true">
          <div
            ref={progressRef}
            className="h-full origin-left scale-x-0 bg-accent"
          />
        </div>

        <nav
          className="container-content flex h-16 w-full items-center justify-between gap-6"
          aria-label="Primary"
        >
          <a
            href="#home"
            onClick={closeMenu}
            className="focus-ring group flex items-end gap-2 rounded-[2px] font-mono text-sm font-bold tracking-tight text-foreground"
          >
            <span className="relative flex size-7 items-center justify-center overflow-hidden rounded-[2px] bg-foreground font-mono text-xs font-bold text-paper transition-colors duration-300 group-hover:bg-accent">
              V
              <span
                className="absolute -right-1 -top-1 size-2 rounded-full bg-accent transition-transform duration-300 group-hover:bg-paper"
                aria-hidden="true"
              />
            </span>
            Vimukthi<sup className="text-accent">©</sup>
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-0.5 lg:flex">
            {site.navigation.map((item, i) => {
              const isActive = active === item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`focus-ring group relative rounded-[2px] px-3 py-2 font-mono text-[0.72rem] uppercase tracking-[0.18em] transition-colors duration-200 ${
                      isActive
                        ? "text-foreground"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    {item.label === "Home" ? (
                      <span
                        className="mr-1.5 inline-block size-1.5 -translate-y-px bg-accent"
                        aria-hidden="true"
                      />
                    ) : (
                      <span className="mr-1.5 text-accent/80" aria-hidden="true">
                        0{i}
                      </span>
                    )}
                    {item.label}
                    <span
                      className={`absolute inset-x-3 bottom-0.5 h-0.5 origin-left bg-accent transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                      aria-hidden="true"
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <a
  href="/pdf/Sahan Vimukthi CV.pdf"
  download="Sahan Vimukthi CV.pdf"
  className="btn-primary hidden px-5 py-2.5 font-mono text-xs uppercase tracking-[0.14em] lg:inline-flex"
>
  Download CV
</a>

            {/* Mobile toggle */}
            <button
              type="button"
              className="focus-ring flex size-10 flex-col items-center justify-center gap-[7px] rounded-[2px] lg:hidden"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <span
                className={`h-0.5 w-7 bg-foreground transition-all duration-300 ${
                  menuOpen ? "translate-y-1 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-7 bg-foreground transition-all duration-300 ${
                  menuOpen ? "-translate-y-[3px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Full-screen mobile menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`fixed inset-0 z-40 flex flex-col overflow-y-auto bg-ink text-paper transition-all duration-300 ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="mt-[4.25rem] flex flex-1 flex-col px-6 pb-10">
          <p className="eyebrow !text-paper/50">
            Index — select a chapter
          </p>

          <ul className="mt-4 border-t border-paper/15">
            {site.navigation.map((item, i) => (
              <li key={item.href} className="border-b border-paper/15">
                <a
                  href={item.href}
                  data-menu-item
                  onClick={closeMenu}
                  className="focus-ring group flex items-center justify-between py-5"
                >
                  <span className="text-display flex items-center gap-4 text-4xl text-paper">
                    <span className="font-mono text-xs text-accent">
                      0{i + 1}
                    </span>
                    {item.label}
                  </span>
                  <ArrowUpRight
                    className="size-5 text-paper/40 transition-all duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>

          <div data-menu-item className="mt-8 flex flex-col gap-3 font-mono text-sm text-paper/70">
            <a href={`mailto:${site.email}`} className="focus-ring w-fit rounded-[2px]">
              {site.email}
            </a>
            <p className="text-xs uppercase tracking-[0.2em] text-paper/40">
              {site.location} · Open to remote
            </p>
          </div>

          <a href="/pdf/Sahan Vimukthi CV.pdf"
  download="Sahan Vimukthi CV.pdf" onClick={closeMenu} data-menu-item className="btn-primary mt-10 justify-center !bg-paper !text-ink hover:!bg-accent">
            Download CV
          </a>
        </div>
      </div>
    </>
  );
}