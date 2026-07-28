"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, Send, CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Failed to send message.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[200px]" />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-accent/5 border border-accent/10 text-accent text-xs font-medium mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Let&apos;s Build{" "}
            <span className="text-gradient-blue">Together</span>
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto">
            Ready to transform your idea into reality? Reach out and let&apos;s
            start a conversation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="p-5 rounded-2xl glass">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:we3.techinnovation@gmail.com"
                    className="text-sm text-muted hover:text-accent transition-colors"
                  >
                    we3.techinnovation@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl glass">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-1">Phone</h3>
                  <a
                    href="tel:+9771XXXXXXX"
                    className="text-sm text-muted hover:text-accent transition-colors"
                  >
                    +977 1-XXXXXXX
                  </a>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl glass">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-1">Location</h3>
                  <p className="text-sm text-muted">
                    Jhapa, Nepal
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">
                Follow Us
              </h3>
              <div className="flex gap-3">
                {["GitHub", "LinkedIn", "Twitter"].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="px-4 py-2 rounded-lg glass glass-hover text-xs text-muted hover:text-accent transition-all duration-300"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 sm:p-8 rounded-2xl glass"
          >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Message Sent!</h3>
              <p className="text-sm text-muted max-w-sm">
                Thank you for reaching out. We&apos;ll get back to you within 24
                hours.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium mb-1.5 text-muted"
                  >
                    Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm text-foreground placeholder:text-muted/40 focus:outline-none focus:border-accent/40 focus:bg-white/[0.06] transition-all duration-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium mb-1.5 text-muted"
                  >
                    Email <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm text-foreground placeholder:text-muted/40 focus:outline-none focus:border-accent/40 focus:bg-white/[0.06] transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-medium mb-1.5 text-muted"
                >
                  Subject <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="What are you looking to build?"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm text-foreground placeholder:text-muted/40 focus:outline-none focus:border-accent/40 focus:bg-white/[0.06] transition-all duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium mb-1.5 text-muted"
                >
                  Message <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm text-foreground placeholder:text-muted/40 focus:outline-none focus:border-accent/40 focus:bg-white/[0.06] transition-all duration-300 resize-none"
                />
              </div>

              {error && (
                <p className="text-sm text-red-400">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className={cn(
                  "group w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent text-black font-semibold text-sm transition-all duration-300",
                  loading
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:bg-accent/90"
                )}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
