export type ProjectCategory = "uiux" | "frontend" | "fullstack";

export const projectCategories: {
  value: "all" | ProjectCategory;
  label: string;
}[] = [
  { value: "all", label: "All" },
  { value: "uiux", label: "UI/UX" },
  { value: "frontend", label: "Frontend" },
  { value: "fullstack", label: "Full-Stack" },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  stack: string[];
  github: string;
  demo: string;
  image: string;
  /** Hex accent used by the generated thumbnail. */
  accent: string;
}

export const projects: Project[] = [
  {
    id: "orbit",
    title: "Orbit Analytics",
    description:
      "A full-stack dashboard for visualizing product analytics in real time, with role-based access and streaming charts.",
    category: "fullstack",
    stack: ["Next.js", "TypeScript", "Node.js", "MySQL"],
    github: "",
    demo: "https://www.ceit.pdn.ac.lk/",
    image: "/images/project-1.png",
    accent: "#2dd4bf",
  },
  {
    id: "pulse",
    title: "Pulse",
    description:
      "A mobile-first workout tracking app with local persistence, streak charts and a clean, gesture-driven UI.",
    category: "frontend",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/sahan/pulse",
    demo: "https://pulse-demo.sahan.dev",
    image: "/images/project-pulse.svg",
    accent: "#f59e0b",
  },
  {
    id: "lumen",
    title: "Lumen",
    description:
      "A design system with 40+ accessible components, dark mode theming and a living documentation site.",
    category: "uiux",
    stack: ["Figma", "React", "Storybook", "Tailwind CSS"],
    github: "https://github.com/sahan/lumen",
    demo: "https://lumen-demo.sahan.dev",
    image: "/images/project-lumen.svg",
    accent: "#a78bfa",
  },
  {
    id: "storefront",
    title: "Nova Storefront",
    description:
      "A headless e-commerce frontend with instant search, cart state, Stripe checkout and a 99 Lighthouse performance score.",
    category: "fullstack",
    stack: ["Next.js", "Express.js", "Stripe", "MySQL"],
    github: "https://github.com/sahan/nova-storefront",
    demo: "https://nova-demo.sahan.dev",
    image: "/images/project-nova.svg",
    accent: "#fb7185",
  },
  {
    id: "atlas",
    title: "Atlas Maps",
    description:
      "An interactive map explorer with animated tile transitions, custom markers and keyboard-first navigation.",
    category: "frontend",
    stack: ["TypeScript", "GSAP", "Mapbox", "Tailwind CSS"],
    github: "https://github.com/sahan/atlas-maps",
    demo: "https://atlas-demo.sahan.dev",
    image: "/images/project-atlas.svg",
    accent: "#38bdf8",
  },
  {
    id: "folio",
    title: "Folio",
    description:
      "A portfolio template with scroll-driven storytelling, reduced-motion support and a fully server-side rendered core.",
    category: "uiux",
    stack: ["Figma", "Next.js", "GSAP"],
    github: "https://github.com/sahan/folio",
    demo: "https://folio-demo.sahan.dev",
    image: "/images/project-folio.svg",
    accent: "#4ade80",
  },
];