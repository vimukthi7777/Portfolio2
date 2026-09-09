import { ArrowUpRight, MapPin } from "lucide-react";
import { site } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t-2 border-foreground bg-ink text-paper">
      {/* Giant watermark */}
      <div
        aria-hidden="true"
        className="text-outline-paper pointer-events-none absolute inset-x-0 bottom-[-6vw] select-none whitespace-nowrap text-center text-[clamp(7rem,23vw,20rem)] leading-none"
      >
        Sahan.
      </div>

      <div className="container-content relative z-10">
        <div className="grid gap-14 py-16 lg:grid-cols-12 lg:gap-10 lg:py-20">
          {/* Identity */}
          <div className="lg:col-span-5">
            <a
              href="#home"
              className="focus-ring inline-flex items-baseline gap-2 text-display text-3xl uppercase"
            >
              sahan<span className="italic !text-accent">.</span>
            </a>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-paper/70">
              Software Developer crafting fast, accessible, thoughtfully
              designed web experiences. Based in Peradeniya, Sri Lanka.
            </p>
            <p className="mt-6 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-paper/50">
              <MapPin className="size-4 text-accent" aria-hidden="true" />
              {site.location}
            </p>
          </div>

          {/* Navigate */}
          <nav aria-label="Footer" className="lg:col-span-3">
            <h2 className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-paper/50">
              Navigate
            </h2>
            <ul className="mt-5 space-y-3 border-t border-paper/20 pt-5">
              {site.navigation.slice(1).map((item, i) => (
                <li key={item.href} className="group flex items-center gap-3">
                  <span className="font-mono text-[0.6rem] text-accent/70">
                    0{i + 2}
                  </span>
                  <a
                    href={item.href}
                    className="focus-ring text-sm text-paper/80 transition-colors duration-200 group-hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <div className="lg:col-span-4">
            <h2 className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-paper/50">
              Connect
            </h2>
            <ul className="mt-5 space-y-3 border-t border-paper/20 pt-5">
              <li className="group flex items-center gap-3">
                <span className="font-mono text-[0.6rem] text-accent/70">01</span>
                <a
                  href={`mailto:${site.email}`}
                  className="focus-ring group inline-flex items-center gap-2 text-sm text-paper/80 transition-colors duration-200 hover:text-accent"
                >
                  {site.email}
                  <ArrowUpRight
                    className="size-3.5 text-paper/40 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                    aria-hidden="true"
                  />
                </a>
              </li>
              <li className="group flex items-center gap-3">
                <span className="font-mono text-[0.6rem] text-accent/70">02</span>
                <a
                  href={site.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex items-center gap-2 font-mono text-sm text-paper/80 transition-colors duration-200 hover:text-accent"
                >
                  github.com/sahan
                  <ArrowUpRight
                    className="size-3.5 text-paper/40 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                    aria-hidden="true"
                  />
                </a>
              </li>
              <li className="group flex items-center gap-3">
                <span className="font-mono text-[0.6rem] text-accent/70">03</span>
                <a
                  href={site.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex items-center gap-2 font-mono text-sm text-paper/80 transition-colors duration-200 hover:text-accent"
                >
                  linkedin.com/in/sahan
                  <ArrowUpRight
                    className="size-3.5 text-paper/40 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                    aria-hidden="true"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-paper/20 py-7 sm:flex-row">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-paper/50">
            © {year} {site.name}. Designed &amp; built by me.
          </p>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-paper/40">
            SET — Ink on Paper · v{year % 100}
          </p>
          <a
            href="#home"
            aria-label="Back to top"
            className="focus-ring group inline-flex items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-paper/70 transition-colors duration-200 hover:text-accent"
          >
            <span className="text-paper/40 transition-colors duration-200 group-hover:text-accent">
              Back to top
            </span>
            <span className="flex size-8 items-center justify-center border border-paper/30 transition-colors duration-200 group-hover:border-accent">
              ↑
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}