"use client";

import { motion } from "framer-motion";
import { industries } from "@/data/industries";

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

export function Industries() {
  return (
    <section className="section-padding relative overflow-hidden bg-surface/50">
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
            Industries
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Solutions for Every{" "}
            <span className="text-gradient-blue">Industry</span>
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto">
            Deep domain expertise across sectors, delivering tailored solutions
            that drive real impact.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                variants={cardVariants}
                className="group relative p-4 rounded-xl glass glass-hover text-center cursor-default"
              >
                <Icon className="w-6 h-6 mx-auto mb-2 text-accent" strokeWidth={1.5} />
                <span className="text-xs font-medium text-muted group-hover:text-foreground transition-colors">
                  {industry.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
