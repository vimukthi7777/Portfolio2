export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "GSAP",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "Spring Boot", "REST APIs"],
  },
  {
    category: "Database",
    items: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    category: "Design & Tools",
    items: ["Figma", "Git", "GitHub", "Vercel"],
  },
];