import type { LucideIcon } from "lucide-react";

export interface Service {
  title: string;
  description: string;
  subItems: string[];
  icon: LucideIcon;
}

export interface Industry {
  name: string;
  icon: LucideIcon;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TechCategory {
  name: string;
  techs: string[];
}

export interface Product {
  name: string;
  category: string;
  description: string;
  gradient: string;
  icon: LucideIcon;
}

export interface FeaturedProject {
  title: string;
  category: string;
  description: string;
  techs: string[];
  gradient: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface NavLink {
  href: string;
  label: string;
}
