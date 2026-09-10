"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { Mail, Github, Linkedin, MapPin, ArrowUpRight } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { revealUp } from "@/lib/animations";
import { site } from "@/data/site";
import ContactForm from "@/components/contact/ContactForm";

export default function Contact() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!scope.current) return;
      revealUp(gsap, scope.current.querySelectorAll("[data-contact-reveal]"), {
        stagger: 0.1,
        start: "top 85%",
      });
    },
    { scope },
  );

  const channels = [
    {
      icon: Mail,
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/vimukthi7777",
      href: site.socials.github,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/vimukthi",
      href: site.socials.linkedin,
    },
  ];

  return (
    <section id="contact" ref={scope} className="section relative bg-ink text-paper">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-accent"
      />
      <div className="container-content">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          {/* CTA + channels */}
          <div className="lg:col-span-6">
            <p data-contact-reveal className="eyebrow !text-paper/60">
              <span className="flex items-center gap-3">
                <span className="inline-block size-2 bg-accent" aria-hidden="true" />
                Chapter 06 — Contact
              </span>
            </p>
            <h2
              data-contact-reveal
              className="text-display mt-8 text-[clamp(2.6rem,5.4vw,4.6rem)] uppercase"
            >
              Let&apos;s build something{" "}
              <em className="italic !text-accent">together</em>
            </h2>
            <p
              data-contact-reveal
              className="mt-6 max-w-md text-base leading-relaxed text-paper/70 sm:text-lg"
            >
              Have a project in mind, a role to fill, or just want to say hi?
              The inbox is open — expect a reply within 24 hours.
            </p>

            <ul data-contact-reveal className="mt-10 border-t border-paper/25">
              {channels.map((channel, i) => {
                const Icon = channel.icon;
                return (
                  <li key={channel.label} className="border-b border-paper/25">
                    <a
                      href={channel.href}
                      target={channel.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={
                        channel.href.startsWith("mailto:")
                          ? undefined
                          : "noopener noreferrer"
                      }
                      className="focus-ring group flex items-center gap-5 py-5 transition-colors duration-200 hover:bg-paper/5"
                    >
                      <span
                        className="flex size-10 items-center justify-center border border-paper/25 transition-colors duration-200 group-hover:border-accent group-hover:bg-accent group-hover:text-ink"
                        aria-hidden="true"
                      >
                        <Icon className="size-4" />
                      </span>
                      <span className="flex-1">
                        <span className="block font-mono text-[0.65rem] uppercase tracking-[0.22em] text-paper/50">
                          {String(i + 1).padStart(2, "0")} — {channel.label}
                        </span>
                        <span className="mt-1 block font-mono text-sm text-paper transition-colors duration-200 group-hover:text-accent">
                          {channel.value}
                        </span>
                      </span>
                      <ArrowUpRight
                        className="size-4 text-paper/40 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>

            <p
              data-contact-reveal
              className="mt-8 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-paper/60"
            >
              <MapPin className="size-4 text-accent" aria-hidden="true" />
              {site.location} · Open to remote
            </p>
          </div>

          {/* Form */}
          <div data-contact-reveal className="lg:col-span-6">
            <div className="border border-paper/25 p-6 sm:p-9">
              <div className="mb-7 flex items-center justify-between gap-4">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-paper/60">
                  Send a message
                </p>
                <span className="flex items-center gap-2 font-mono text-[0.62rem] text-accent">
                  <span className="size-1.5 bg-accent" aria-hidden="true" />
                  MSG / 01
                </span>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}