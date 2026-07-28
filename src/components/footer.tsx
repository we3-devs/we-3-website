import Image from "next/image";
import { Sparkles } from "lucide-react";
import logo from "@/public/logo.png";

const footerLinks = {
  company: [
    { label: "About", href: "#" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Products", href: "#products" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    { label: "Software Development", href: "#services" },
    { label: "AI & Automation", href: "#services" },
    { label: "Cloud & DevOps", href: "#services" },
    { label: "IT Consulting", href: "#services" },
    { label: "Digital Products", href: "#services" },
    { label: "Support & Managed Services", href: "#services" },
  ],
  products: [
    { label: "HireArchy", href: "#products" },
    { label: "RMS", href: "#products" },
    { label: "X-RAG", href: "#products" },
    { label: "Municipality Platform", href: "#products" },
  ],
  technologies: [
    { label: "Next.js & React", href: "#technologies" },
    { label: "Node.js & NestJS", href: "#technologies" },
    { label: "PostgreSQL & MongoDB", href: "#technologies" },
    { label: "AWS & Docker", href: "#technologies" },
    { label: "AI & LLM", href: "#technologies" },
  ],
};

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-surface">
      <div className="container-wide px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 group mb-4">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
                <Image src={logo} alt="WE-3 logo" fill className="object-contain" />
              </div>
              <span className="font-semibold text-sm tracking-tight">
                WE-3
                <span className="text-muted font-normal"> Tech & Innovation</span>
              </span>
            </a>
            <p className="text-xs text-muted leading-relaxed mb-6 max-w-xs">
              Engineering intelligent software for the modern world. Based in
              Jhapa, serving clients globally.
            </p>
            <div className="flex gap-3">
              {["GitHub", "LinkedIn", "Twitter"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-[10px] text-muted hover:text-accent hover:border-accent/20 transition-all duration-300"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-muted mb-4 capitalize">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-muted/60 hover:text-accent transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.06]">
        <div className="container-wide px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-muted/40">
            &copy; {new Date().getFullYear()} WE-3 Tech &amp; Innovation. All
            rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px] text-muted/40">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
