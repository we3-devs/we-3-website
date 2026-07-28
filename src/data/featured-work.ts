import type { FeaturedProject } from "@/types/content";

export const featuredProjects: FeaturedProject[] = [
  {
    title: "Enterprise ERP System",
    category: "Enterprise",
    description:
      "A modular ERP solution with modules for finance, HR, inventory, procurement, and business intelligence for growing enterprises.",
    techs: ["Next.js", "NestJS", "PostgreSQL", "Redis", "Kubernetes"],
    gradient: "from-secondary/20 to-accent/20",
  },
  {
    title: "Cloud Migration Platform",
    category: "Cloud Infrastructure",
    description:
      "A comprehensive cloud migration toolkit enabling seamless transition of legacy systems to modern cloud infrastructure.",
    techs: ["AWS", "Docker", "Kubernetes", "Terraform", "Python"],
    gradient: "from-accent/20 to-accent-secondary/20",
  },
  {
    title: "AI Customer Support Agent",
    category: "AI Automation",
    description:
      "An intelligent multi-channel customer support automation platform with NLP understanding, ticket management, and analytics.",
    techs: ["Anthropic", "LangChain", "Next.js", "PostgreSQL", "Redis"],
    gradient: "from-accent-secondary/20 to-secondary/20",
  },
];
