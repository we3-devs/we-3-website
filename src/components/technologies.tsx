"use client";

import { motion } from "framer-motion";
import { techCategories } from "@/data/technologies";

const CARD_DURATION = 0.5;

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

export function Technologies() {
  return (
    <section
      id="technologies"
      className="section-padding relative overflow-hidden bg-surface/50"
    >
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
            Technology Stack
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Modern <span className="text-gradient-blue">Tech Stack</span>
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build scalable, secure, and
            performant solutions.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {techCategories.map((category) => (
            <motion.div
              key={category.name}
              variants={cardVariants}
              className="group p-5 rounded-2xl glass glass-hover"
            >
              <h3 className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs text-muted group-hover:text-foreground transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
