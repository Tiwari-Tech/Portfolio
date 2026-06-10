"use client";

import { portfolio } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section className="section-shell py-24">
      <p className="section-kicker">Education</p>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {portfolio.education.map((item) => (
          <motion.article
            key={item.degree}
            className="motion-card rounded-lg p-6"
            whileHover={{ scale: 1.02, rotate: -0.5 }}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65 }}
          >
            <p className="tech-label text-sm uppercase tracking-[0.18em]">
              education.record
            </p>
            <p className="mt-4 font-bold text-coral">{item.period}</p>
            <h2 className="mt-3 text-3xl font-black">{item.degree}</h2>
            <p className="mt-2 text-lg font-bold text-ink/70">{item.school}</p>
            <p className="mt-5 leading-7 text-ink/62">{item.detail}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
