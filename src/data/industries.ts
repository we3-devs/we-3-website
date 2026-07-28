import {
  UtensilsCrossed,
  BedDouble,
  HeartPulse,
  GraduationCap,
  Landmark,
  Building2,
  ShoppingBag,
  Factory,
  CreditCard,
  Truck,
  Rocket,
  Building,
} from "lucide-react";
import type { Industry } from "@/types/content";

export const industries: Industry[] = [
  { name: "Restaurants", icon: UtensilsCrossed },
  { name: "Hotels", icon: BedDouble },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Education", icon: GraduationCap },
  { name: "Government", icon: Landmark },
  { name: "Municipalities", icon: Building2 },
  { name: "Retail", icon: ShoppingBag },
  { name: "Manufacturing", icon: Factory },
  { name: "Finance", icon: CreditCard },
  { name: "Logistics", icon: Truck },
  { name: "Startups", icon: Rocket },
  { name: "Enterprises", icon: Building },
];
