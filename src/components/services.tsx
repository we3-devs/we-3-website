"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-accent/5 border border-accent/10 text-accent text-xs font-medium mb-4">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Full-Scale{" "}
            <span className="text-gradient-blue">Engineering</span>
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto">
            From concept to deployment, we deliver enterprise-grade software
            solutions powered by modern AI.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="group relative p-6 rounded-2xl glass glass-hover cursor-default"
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/10 flex items-center justify-center text-accent mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-base font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Sub-items */}
                <div className="flex flex-wrap gap-1.5">
                  {service.subItems.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-[10px] text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/[0.03] to-transparent" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
