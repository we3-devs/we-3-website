import type { TechCategory } from "@/types/content";

export const techCategories: TechCategory[] = [
  {
    name: "Frontend",
    techs: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    name: "Backend",
    techs: ["Node.js", "NestJS", "Express", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    name: "Mobile",
    techs: ["React Native", "Flutter", "Android", "iOS"],
  },
  {
    name: "Cloud & DevOps",
    techs: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Vercel"],
  },
  {
    name: "AI & ML",
    techs: ["OpenAI", "Anthropic", "Gemini", "LangChain", "Vector DB", "RAG"],
  },
];
