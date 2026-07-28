"use client";

import { motion } from "framer-motion";
import {
  Users,
  Zap,
  Cpu,
  Shield,
  TrendingUp,
  Clock,
  HeadphonesIcon,
  MessageSquare,
  Target,
} from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Experienced Engineering Team",
    description: "Senior engineers with deep expertise across the full stack.",
  },
  {
    icon: Zap,
    title: "Modern Technologies",
    description: "Cutting-edge tools and frameworks for peak performance.",
  },
  {
    icon: Cpu,
    title: "AI-First Development",
    description: "Intelligence baked into every solution we build.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Architecture",
    description: "Systems designed to grow with your business.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security protocols and best practices.",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Agile methodology ensuring rapid, predictable releases.",
  },
  {
    icon: HeadphonesIcon,
    title: "Long-Term Support",
    description: "We stand by our work with dedicated ongoing support.",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description: "Regular updates, clear documentation, honest timelines.",
  },
  {
    icon: Target,
    title: "Business-Focused Solutions",
    description: "Technology that drives measurable business outcomes.",
  },
];

const CARD_DURATION = 0.4;

const gridVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: CARD_DURATION },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: CARD_DURATION } },
};

export function WhyChooseUs() {
  return (
    <section className="section-padding relative overflow-hidden bg-surface/30">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-accent/5 border border-accent/10 text-accent text-xs font-medium mb-4">
            Why WE-3
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Built to <span className="text-gradient-blue">Deliver</span>
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto">
            What sets us apart in a world of technology partners.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                variants={cardVariants}
                className="group p-5 rounded-2xl glass glass-hover"
              >
                <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/10 flex items-center justify-center text-accent mb-3 group-hover:bg-accent/20 transition-colors duration-300">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold mb-1.5 group-hover:text-accent transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
