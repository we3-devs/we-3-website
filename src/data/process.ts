import {
  Search,
  ClipboardList,
  Palette,
  Code2,
  TestTube,
  Rocket,
  HeartHandshake,
} from "lucide-react";
import type { ProcessStep } from "@/types/content";

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We dive deep into your vision, goals, and challenges to understand what truly matters.",
    icon: Search,
  },
  {
    number: "02",
    title: "Planning",
    description:
      "Crafting a detailed roadmap with clear milestones, architecture, and timelines.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Design",
    description:
      "Creating intuitive, beautiful interfaces that delight users and drive engagement.",
    icon: Palette,
  },
  {
    number: "04",
    title: "Development",
    description:
      "Building with modern technologies, clean code, and continuous integration.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Testing",
    description:
      "Rigorous quality assurance, security audits, and performance optimization.",
    icon: TestTube,
  },
  {
    number: "06",
    title: "Deployment",
    description:
      "Smooth launch with CI/CD pipelines, monitoring, and rollback strategies.",
    icon: Rocket,
  },
  {
    number: "07",
    title: "Support",
    description:
      "Ongoing maintenance, updates, and dedicated support to ensure long-term success.",
    icon: HeartHandshake,
  },
];
