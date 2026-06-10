"use client";

import { portfolio } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="section-shell">
        <p className="section-kicker">Skills</p>
        <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
          Tools I use to ship modern, animated products.
        </h2>
      </div>
      <div className="mt-10 overflow-hidden">
        <motion.div
          className="flex w-max gap-4 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        >
          {[...portfolio.skills, ...portfolio.skills].map((skill, index) => (
            <div
              key={`${skill}-${index}`}
              className="blue-badge skill-pill rounded-lg px-6 py-4 text-lg font-black"
            >
              <span className="text-cyan">#</span>
              {skill}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
