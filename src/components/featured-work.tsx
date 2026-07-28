"use client";

import { motion } from "framer-motion";
import { featuredProjects } from "@/data/featured-work";

const CARD_DURATION = 0.5;

const gridVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: CARD_DURATION },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: CARD_DURATION } },
};

export function FeaturedWork() {
  return (
    <section id="work" className="section-padding relative overflow-hidden">
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
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Solutions We&apos;ve <span className="text-gradient-blue">Built</span>
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto">
            Showcasing our diverse portfolio of AI-powered platforms and
            enterprise systems built for clients.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="group relative rounded-2xl overflow-hidden glass glass-hover"
            >
              {/* Project Header */}
              <div
                className={`h-32 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
              >
                <span className="text-xs text-white/40 font-mono">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <span className="text-xs text-accent font-mono mb-1 block">
                  {project.category}
                </span>
                <h3 className="text-base font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techs.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-[10px] text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techs.length > 3 && (
                    <span className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-[10px] text-muted">
                      +{project.techs.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-accent/[0.03] to-transparent" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
