import { Code2, BrainCircuit, Cloud, Compass, Package, LifeBuoy } from "lucide-react";
import type { Service } from "@/types/content";

export const services: Service[] = [
  {
    title: "Software Development",
    description:
      "Custom software engineered for scale, from web platforms to the systems enterprises run on.",
    subItems: [
      "Web Applications",
      "Mobile Applications",
      "Enterprise Software",
      "SaaS Platforms",
    ],
    icon: Code2,
  },
  {
    title: "AI & Automation",
    description:
      "Intelligent systems that reason over your data and automate the work around it.",
    subItems: [
      "AI Assistants",
      "Retrieval-Augmented Generation",
      "Computer Vision",
      "Workflow Automation",
    ],
    icon: BrainCircuit,
  },
  {
    title: "Cloud & DevOps",
    description:
      "Resilient infrastructure and delivery pipelines that keep software running and shipping.",
    subItems: ["Cloud Infrastructure", "Deployment", "CI/CD", "Monitoring"],
    icon: Cloud,
  },
  {
    title: "IT Consulting",
    description:
      "Strategic guidance on architecture and technology decisions that compound over time.",
    subItems: [
      "Technology Strategy",
      "Software Architecture",
      "Digital Transformation",
    ],
    icon: Compass,
  },
  {
    title: "Digital Products",
    description:
      "We also build and operate our own products — HireArchy, RMS, X-RAG, and our Municipality Platform.",
    subItems: ["HireArchy", "RMS", "X-RAG", "Municipality Platform"],
    icon: Package,
  },
  {
    title: "Support & Managed Services",
    description:
      "Ongoing care that keeps systems secure, monitored, and continuously improving.",
    subItems: [
      "Maintenance",
      "Security",
      "Monitoring",
      "Continuous Improvements",
    ],
    icon: LifeBuoy,
  },
];
