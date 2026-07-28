"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ParticleField } from "@/components/particle-field";
import { useMagnetic } from "@/hooks/use-magnetic";

function MagneticButton({ children, href, className }: { children: React.ReactNode; href: string; className?: string }) {
  const { ref } = useMagnetic({ strength: 0.2 });

  return (
    <div ref={ref} className="inline-block">
      <a href={href} className={className}>
        {children}
      </a>
    </div>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <motion.div style={{ y }} className="absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 bg-noise" />
      </motion.div>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-[128px] animate-float" />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-secondary/10 rounded-full blur-[128px] animate-float"
        style={{ animationDelay: "-3s" }}
      />

      {/* Particles */}
      <ParticleField count={50} />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 container-wide text-center px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-none mb-6"
          >
            <span className="text-gradient">Engineering Intelligent</span>
            <br />
            <span className="text-gradient-blue">Software for the</span>
            <br />
            <span className="text-gradient">Modern World</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We build AI-powered platforms, enterprise systems, and digital
            products that transform businesses. From Jhapa to the global
            stage.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <MagneticButton
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-accent text-black font-semibold text-sm hover:bg-accent/90 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Let&apos;s Build Together
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-accent/40" />
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-white/10 text-foreground font-medium text-sm hover:bg-white/5 hover:border-accent/20 transition-all duration-300"
            >
              Book a Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 sm:mt-28"
        >
          <p className="text-xs text-muted/60 uppercase tracking-widest mb-6">
            Trusted by innovative companies worldwide
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-accent/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
