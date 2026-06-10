"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const links = ["about", "skills", "projects", "experience", "contact"];

export default function Navbar() {
  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-50 px-4 py-4"
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-lg border border-ink/10 bg-panel/75 px-4 py-3 shadow-glow backdrop-blur-xl">
        <a
          href="#home"
          className="hover-lift rounded-md px-2 py-1 text-sm font-black uppercase tracking-[0.2em]"
        >
          Somesh
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="hover-lift rounded-md px-3 py-2 text-sm font-semibold capitalize text-ink/70 hover:bg-ink hover:text-night"
            >
              {link}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="blue-cta hover-lift inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-bold"
        >
          <span>Hire Me</span> <ArrowUpRight className="hover-icon" size={16} />
        </a>
      </nav>
    </motion.header>
  );
}
