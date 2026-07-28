"use client";

import { motion } from "framer-motion";
import { ArrowRight, Boxes } from "lucide-react";
import { products } from "@/data/products";

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

export function DigitalProducts() {
  return (
    <section id="products" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[128px]" />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/5 border border-accent/10 text-accent text-xs font-medium mb-4">
            <Boxes className="w-3 h-3" />
            Digital Products
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Products We <span className="text-gradient-blue">Build &amp; Operate</span>
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto">
            Beyond client work, we design, ship, and run our own software
            products.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.name}
                variants={cardVariants}
                className="group relative p-6 rounded-2xl glass glass-hover overflow-hidden"
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10 w-10 h-10 rounded-lg bg-accent/10 border border-accent/10 flex items-center justify-center text-accent mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>

                <span className="relative z-10 inline-block px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/[0.08] text-[10px] text-muted mb-3">
                  {product.category}
                </span>

                <h3 className="relative z-10 text-lg font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                  {product.name}
                </h3>

                <p className="relative z-10 text-sm text-muted leading-relaxed">
                  {product.description}
                </p>

                <a
                  href="#contact"
                  className="relative z-10 mt-4 inline-flex items-center gap-1 text-[11px] text-accent font-medium opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  Learn more
                  <ArrowRight className="w-3 h-3" />
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
