"use client";

import { portfolio } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="section-shell py-24">
      <p className="section-kicker">Experience</p>
      <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
        Practical work across interface, performance, and product polish.
      </h2>
      <div className="mt-10 grid gap-5">
        {portfolio.experience.map((item) => (
          <motion.article
            key={`${item.role}-${item.company}`}
            className="motion-card rounded-lg p-6"
            whileHover={{ scale: 1.015, rotateX: 1.5, rotateY: -1.5 }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex flex-col justify-between gap-3 md:flex-row">
              <div>
                <p className="tech-label mb-2 text-xs uppercase tracking-[0.18em]">
                  runtime.experience
                </p>
                <h3 className="text-2xl font-black">{item.role}</h3>
                <p className="mt-1 font-bold text-coral">{item.company}</p>
                <p className="mt-1 text-sm font-bold text-ink/45">{item.location}</p>
              </div>
              <p className="font-bold text-ink/55">{item.period}</p>
            </div>
            <ul className="mt-6 grid gap-3 text-ink/68">
              {item.points.map((point) => (
                <li key={point} className="leading-7 before:mr-3 before:text-cyan before:content-['>']">
                  {point}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
