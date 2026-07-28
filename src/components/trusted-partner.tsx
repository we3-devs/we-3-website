"use client";

import { motion } from "framer-motion";
import { Shield, Code2, Globe, Cpu } from "lucide-react";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "15+", label: "Team Members" },
];

const coreStrengths = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security protocols ensuring your data and systems remain protected at all times.",
  },
  {
    icon: Code2,
    title: "Modern Tech Stack",
    description: "Cutting-edge frameworks and tools that deliver performance, scalability, and maintainability.",
  },
  {
    icon: Globe,
    title: "Global Delivery",
    description: "Serving clients across time zones with seamless communication and reliable project management.",
  },
  {
    icon: Cpu,
    title: "AI-First Approach",
    description: "Intelligence embedded into every solution, from automation to advanced AI-powered features.",
  },
];

export function TrustedPartner() {
  return (
    <section className="section-padding relative overflow-hidden bg-surface/30">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/[0.02] rounded-full blur-[150px]" />

      <div className="container-wide relative z-10">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 md:mb-20"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl glass"
            >
              <div className="text-2xl sm:text-3xl font-bold text-accent mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-muted">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-accent/5 border border-accent/10 text-accent text-xs font-medium mb-4">
              Trusted Technology Partner
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Engineering Excellence,{" "}
              <span className="text-gradient-blue">Delivered Globally</span>
            </h2>
            <p className="text-muted text-sm sm:text-base leading-relaxed mb-6">
              Based in Jhapa, we partner with businesses worldwide to build
              intelligent, scalable software. Our team combines deep technical
              expertise with a commitment to quality, transparency, and
              long-term partnership.
            </p>
            <p className="text-muted text-sm sm:text-base leading-relaxed">
              We don&apos;t just write code — we engineer systems that drive
              growth, automate operations, and create competitive advantage for
              our clients.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {coreStrengths.map((strength) => {
              const Icon = strength.icon;
              return (
                <div
                  key={strength.title}
                  className="p-4 rounded-xl glass glass-hover"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/10 flex items-center justify-center text-accent mb-2">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="text-xs font-semibold mb-1">{strength.title}</h3>
                  <p className="text-[11px] text-muted leading-relaxed">
                    {strength.description}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
