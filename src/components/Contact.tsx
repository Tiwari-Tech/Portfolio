"use client";

import { portfolio } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-shell py-24">
      <motion.div
        className="motion-card rounded-lg border border-ink/10 bg-panel p-6 text-ink shadow-glow sm:p-10"
        whileHover={{ scale: 1.01 }}
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.75 }}
      >
        <p className="text-sm font-black uppercase tracking-[0.16em] text-coral">
          Contact
        </p>
        <div className="mt-5 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <h2 className="max-w-3xl text-4xl font-black leading-tight sm:text-6xl">
              Let&apos;s build scalable digital products.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/68">
              I am open to software engineering and full-stack development opportunities.
            </p>
          </div>
          <div className="grid gap-3">
            <a
              href={`mailto:${portfolio.email}`}
              className="hover-lift flex items-center gap-3 rounded-lg border border-ink/12 p-4 hover:bg-ink hover:text-night"
            >
              <Mail className="hover-icon" size={20} />
              <span className="font-bold">{portfolio.email}</span>
            </a>
            <div className="motion-card flex items-center gap-3 rounded-lg border border-ink/12 p-4 text-ink/75">
              <MapPin size={20} />
              <span className="font-bold">{portfolio.location}</span>
            </div>
            <a
              href={`mailto:${portfolio.email}?subject=Portfolio%20Inquiry`}
              className="blue-cta hover-lift mt-2 inline-flex items-center justify-center gap-2 rounded-md px-5 py-4 font-black"
            >
              <span>Send Message</span> <Send className="hover-icon" size={18} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
