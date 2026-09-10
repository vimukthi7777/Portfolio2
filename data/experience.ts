export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  current?: boolean;
}

export const experience: ExperienceItem[] = [
  {
    id: "uoc-itc",
    role: "Software Developer",
    company: "University of Peradeniya IT Center",
    period: "2026 — Present",
    summary:
      "Developing and maintaining academic and administrative web applications used across the university.",
    responsibilities: [
      "Building responsive frontend interfaces with React and Next.js",
      "Designing REST APIs and integrating them with existing systems",
      "Collaborating with cross-functional teams on feature planning and delivery",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Spring Boot", "MySQL"],
    current: true,
  },
  {
    id: "intern",
    role: "UI/UX Designer and Web Developer",
    company: "Aalpha Eye Technologies(Pvt)Ltd",
    period: "2024 — 2026",
    summary:
      "Contributed to a SaaS product used by 10k+ monthly users, focusing on core UI components.",
    responsibilities: [
      "Implemented reusable component libraries and design-system tokens",
      "Fixed cross-browser bugs and improved Lighthouse scores by 25 points",
      "Wrote unit tests for critical user flows",
    ],
    technologies: ["JavaScript", "React", "Tailwind css", "Figma", "Prototype", "Storybook", "Git"],
  },
  {
    id: "freelance",
    role: "Freelance Web Developer",
    company: "Self-employed",
    period: "2023 — 2026",
    summary:
      "Delivered UI/UX design and full-stack web solutions for small businesses and early-stage startups.",
    responsibilities: [
      "Owning projects from discovery and design through to deployment",
      "Turning Figma mockups into pixel-perfect, responsive React interfaces",
      "Shipping performance budgets and accessibility requirements on time",
    ],
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Figma"],
  },
];