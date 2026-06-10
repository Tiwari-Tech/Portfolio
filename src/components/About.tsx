"use client";

import { portfolio } from "@/data/portfolio";
import { gsap } from "@/lib/gsap";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { useRef } from "react";

export default function About() {
  const root = useRef<HTMLElement>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-reveal", {
        y: 48,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 70%" }
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={root} className="section-shell py-24">
      <p className="section-kicker about-reveal">About</p>
      <div className="mt-5 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <h2 className="about-reveal text-4xl font-black leading-tight sm:text-5xl">
          Developer with a taste for smooth motion and sharp interfaces.
        </h2>
        <div className="about-reveal motion-card rounded-lg p-6 text-lg leading-8 text-ink/70">
          <div className="mb-5 flex items-center justify-between border-b border-cyan/10 pb-4">
            <span className="tech-label text-sm">about.config.ts</span>
            <span className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_18px_#2979FF99]" />
          </div>
          <p>{portfolio.about}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {portfolio.socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover-lift rounded-md border border-ink/12 px-4 py-2 text-sm font-bold hover:bg-ink hover:text-night"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
