"use client";

import { portfolio } from "@/data/portfolio";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Cpu, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="section-shell flex min-h-screen items-center pt-28">
      <div className="grid w-full gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <motion.p
            className="section-kicker"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {portfolio.availability}
          </motion.p>
          <motion.div
            className="mt-5 flex flex-wrap gap-2 text-xs font-bold uppercase tracking-[0.16em]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
          >
            {["Next.js 14", "GSAP", "Framer", "Lenis", "Vercel"].map((item) => (
              <span
                key={item}
                className="blue-badge skill-pill rounded-md px-3 py-2 tech-label"
              >
                {item}
              </span>
            ))}
          </motion.div>
          <motion.h1
            className="hero-gradient mt-5 max-w-4xl text-5xl font-black leading-[0.95] tracking-normal sm:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            {portfolio.name} engineers high-speed digital interfaces.
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-lg leading-8 text-ink/68"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {portfolio.intro}
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            
              href="#projects"
              className="blue-cta hover-lift inline-flex items-center gap-2 rounded-md px-5 py-3 font-bold shadow-glow"
            >
              <span>View Work</span> <ArrowUpRight className="hover-icon" size={18} />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="motion-card relative overflow-hidden rounded-lg p-5"
          initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-night p-5 text-ink">
            <div className="circuit-line left-6 right-6 top-20 h-px" />
            <div className="circuit-line bottom-28 left-10 h-px w-32 rotate-90" />
            <div className="flex h-full flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex gap-2">
                    <span className="terminal-dot bg-coral" />
                    <span className="terminal-dot" />
                    <span className="terminal-dot bg-cyan" />
                  </div>
                  <p className="tech-label text-xs uppercase tracking-[0.2em]">
                    system.online
                  </p>
                </div>
                <div className="blue-badge mt-8 inline-flex items-center gap-2 rounded-md px-3 py-2 tech-label">
                  <Terminal size={16} />
                  portfolio.exe
                </div>
                <h2 className="mt-8 text-4xl font-black leading-tight">
                  {portfolio.title}
                </h2>
                <p className="mt-4 flex items-center gap-2 text-sm text-ink/58">
                  <Cpu className="text-cyan" size={16} />
                  Optimized animation pipeline
                </p>
                <div className="motion-card mt-6 rounded-lg border border-cyan/20 bg-blueSurface p-3">
                  <div className="flex items-center justify-between">
                    <span className="tech-label text-xs uppercase tracking-[0.18em]">
                      neural.core
                    </span>
                    <span className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_18px_#2979FF99]" />
                  </div>
                  <img
                    src="/images/animated-tech-core.gif"
                    alt="Animated scanning tech core"
                    className="mx-auto mt-3 h-36 w-36 rounded-full object-contain"
                  />
                </div>
              </div>
              <div className="grid gap-3">
                {portfolio.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="motion-card rounded-lg border border-ink/12 bg-ink/8 p-4"
                  >
                    <p className="text-3xl font-black text-coral">{stat.value}</p>
                    <p className="mt-1 text-sm text-ink/68">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.a
        href="#about"
        className="hover-lift absolute bottom-6 left-1/2 hidden -translate-x-1/2 rounded-full border border-ink/15 p-3 md:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.6 }}
        aria-label="Scroll to about"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}