"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/data/process";

const STEP_DURATION = 0.5;

const timelineVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: STEP_DURATION },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: STEP_DURATION } },
};

const MOBILE_STEP_DURATION = 0.4;

const mobileTimelineVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: MOBILE_STEP_DURATION },
  },
};

const mobileStepVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: MOBILE_STEP_DURATION } },
};

export function Process() {
  return (
    <section id="process" className="section-padding relative overflow-hidden">
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
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            How We <span className="text-gradient-blue">Deliver</span>
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto">
            A proven, transparent process that ensures predictable delivery and
            exceptional quality.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/20 via-accent/10 to-transparent" />

          <motion.div
            className="space-y-6 lg:space-y-12"
            variants={timelineVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              const isEven = i % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  variants={stepVariants}
                  className={`relative flex items-center gap-6 lg:gap-8 ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Card */}
                  <div
                    className={`flex-1 p-5 sm:p-6 rounded-2xl glass glass-hover ${
                      isEven ? "lg:text-right" : "lg:text-left"
                    }`}
                  >
                    <span className="text-xs font-mono text-accent mb-1 block">
                      Step {step.number}
                    </span>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Timeline Node */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full glass items-center justify-center z-10">
                    <Icon className="w-4 h-4 text-accent" />
                  </div>

                  {/* Spacer for alignment */}
                  <div className="hidden lg:block flex-1" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Mobile Timeline */}
        <motion.div
          className="lg:hidden mt-8 space-y-4"
          variants={mobileTimelineVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                variants={mobileStepVariants}
                className="flex items-start gap-4 pl-4 border-l border-white/[0.06]"
              >
                <div className="w-8 h-8 rounded-full glass flex items-center justify-center flex-shrink-0 -ml-[1.15rem]">
                  <Icon className="w-3.5 h-3.5 text-accent" />
                </div>
                <div>
                  <span className="text-xs font-mono text-accent">Step {step.number}</span>
                  <h3 className="text-sm font-semibold">{step.title}</h3>
                  <p className="text-xs text-muted mt-1">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
