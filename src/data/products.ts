import { Users, UtensilsCrossed, BrainCircuit, Landmark } from "lucide-react";
import type { Product } from "@/types/content";

export const products: Product[] = [
  {
    name: "HireArchy",
    category: "AI Hiring Platform",
    description:
      "An AI-powered recruitment platform that automates candidate matching, screening, and interview scheduling for modern hiring teams.",
    gradient: "from-secondary/20 to-accent/20",
    icon: Users,
  },
  {
    name: "RMS",
    category: "Restaurant Management System",
    description:
      "A cloud-based operations platform for restaurants covering POS, inventory, staff scheduling, and real-time analytics.",
    gradient: "from-accent/20 to-accent-secondary/20",
    icon: UtensilsCrossed,
  },
  {
    name: "X-RAG",
    category: "Enterprise RAG Platform",
    description:
      "A retrieval-augmented generation platform that lets organizations query and reason over their internal knowledge securely at scale.",
    gradient: "from-accent-secondary/20 to-secondary/20",
    icon: BrainCircuit,
  },
  {
    name: "Municipality Platform",
    category: "GovTech",
    description:
      "A digital governance platform automating citizen services, document management, and administrative workflows for municipalities.",
    gradient: "from-accent/20 to-secondary/20",
    icon: Landmark,
  },
];
