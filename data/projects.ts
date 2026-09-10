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
  id: "itcpdn",
  title: "IT Center Portal | University of Peradeniya",
  description:
    "A full-stack web application for the Center for Distance and Continuing Education / IT Center at the University of Peradeniya, designed to deliver essential academic resources, course announcements, and administrative services to students and staff.",
  category: "fullstack",
  stack: ["Next.js", "TypeScript", "Node.js", "MySQL"],
  github: "",
  demo: "https://www.ceit.pdn.ac.lk/",
  image: "/images/project-1.png",
  accent: "#2dd4bf",
},
  {
  id: "pdnnote",
  title: "Digital Noticeboard | University of Peradeniya",
  description:
    "A desktop and web solution designed to display real-time lab reservations and upcoming course announcements, paired with an administrative dashboard for seamless scheduling and content management.",
  category: "fullstack",
  stack: ["Electron.js", "React", "TypeScript", "Google Apps Script"],
  github: "https://github.com/vimukthi7777/NoticePDN",
  demo: "",
  image: "/images/project-2.png",
  accent: "#f59e0b",
},
 {
  id: "riselk",
  title: "Rise Gaming Esports Platform",
  description:
    "A full-stack gaming tournament management platform for Rise LK, featuring automated team registrations, live match brackets, schedule updates, and dynamic leaderboard tracking.",
  category: "fullstack",
  stack: ["Next.js", "TypeScript", "Tailwind CSS", "Google Apps Script"],
  github: "https://github.com/vimukthi7777/riseweb",
  demo: "https://www.risegaming.online/",
  image: "/images/project-3.png",
  accent: "#f59e0b",
},
{
  id: "ncp-gov-noticeboard",
  title: "Governor Secretariat Meeting Portal | N.C.P",
  description:
    "A full-stack administrative management portal and digital display system built for the Governor's Secretariat Office of the North Central Province. Streamlines conference room reservations, official schedules, and real-time public announcements.",
  category: "fullstack",
  stack: ["Electron.js", "React", "TypeScript", "Tailwind CSS"],
  github: "https://github.com/vimukthi7777/ncp-gov-noticeboard",
  demo: "https://governor.nc.gov.lk/",
  image: "/images/project-4.png",
  accent: "#0284c7",
},
  {
  id: "alpha-eye",
  title: "Alpha Eye Software Solutions | UI/UX & Prototype",
  description:
    "A clean, enterprise-grade UI/UX design and interactive prototype developed for Alpha Eye Software Solutions, tailored for complex software workflows, intuitive user navigation, and scalable design system architecture.",
  category: "uiux",
  stack: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"],
  github: "",
  demo: "https://www.figma.com/",
  image: "/images/project-5.png",
  accent: "#8b5cf6",
},
 {
  id: "overland-auto",
  title: "Overland Automobiles | Web & UI Design",
  description:
    "A responsive frontend showcase and modern UI/UX design built for an automotive dealership, featuring interactive vehicle catalogs, sleek animations, and an intuitive service booking flow.",
  category: "frontend",
  stack: ["Figma", "Ui/Ux","Prototype", "Next.js"],
  github: "https://github.com/vimukthi7777/overland-auto",
  demo: "https://www.overlandautomobiles.lk/",
  image: "/images/project-6.png",
  accent: "#38bdf8",
},
  {
  id: "baron-luxury",
  title: "Baron Luxury Boutique | UI/UX & Prototype",
  description:
    "An elegant UI/UX design and interactive prototype crafted for an high-end luxury fashion brand, emphasizing minimalist aesthetics, premium product presentation, and a seamless checkout experience.",
  category: "uiux",
  stack: ["Figma","Ui/Ux", "Prototyping"],
  github: "",
  demo: "https://www.figma.com/",
  image: "/images/project-7.png",
  accent: "#fb7185",
}
];