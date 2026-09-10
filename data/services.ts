import type { LucideIcon } from "lucide-react";
import {
  Layers,
  Code2,
  Database,
  Monitor,
  Palette,
} from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: Layers,
    title: "Full-Stack Development",
    description:
      "End-to-end web applications combining modern frontends, backend services, databases, authentication and APIs.",
  },

  {
    icon: Code2,
    title: "Backend & API Development",
    description:
      "REST APIs, authentication, business logic and server-side solutions built with technologies such as Node.js, Express.js and Spring Boot.",
  },

  {
    icon: Database,
    title: "Database Management",
    description:
      "Designing and managing relational and NoSQL databases with structured data models, efficient queries and reliable data handling.",
  },

  {
    icon: Monitor,
    title: "Frontend Engineering",
    description:
      "Responsive and maintainable interfaces built with React, Next.js and Tailwind CSS, focused on performance and usability.",
  },

  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-focused interfaces, wireframes and prototypes designed with clear visual hierarchy, usability and thoughtful interactions.",
  },
];