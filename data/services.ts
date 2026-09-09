import type { LucideIcon } from "lucide-react";
import {
  Palette,
  Code2,
  Layers,
  Smartphone,
  Wrench,
} from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Wireframes, prototypes and polished interfaces designed around user research, usability and visual hierarchy.",
  },
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Fast, accessible and maintainable frontends built with React, Next.js and TypeScript that perform beautifully.",
  },
  {
    icon: Layers,
    title: "Full-Stack Web Development",
    description:
      "End-to-end products connecting robust APIs, databases and authentication with clean, scalable frontends.",
  },
  {
    icon: Smartphone,
    title: "Responsive Web Development",
    description:
      "Mobile-first, fluid layouts that feel native on every screen size — no shrinking desktop designs.",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    description:
      "Performance monitoring, dependency updates, bug fixes and ongoing improvements to keep projects healthy.",
  },
];