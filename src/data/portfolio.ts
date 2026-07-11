"use client";

import { portfolio } from "@/data/portfolio";
import { gsap } from "@/lib/gsap";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { ArrowUpRight, Braces, GitBranch } from "lucide-react";
import { useRef } from "react";

export default function Projects() {
  const root = useRef<HTMLElement>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        y: 70,
        opacity: 0,
        duration: 0.85,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 70%" }
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={root} className="section-shell py-24">
      <p className="section-kicker">Projects</p>
      <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <h2 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
          Selected work with fast UI and animated details.
        </h2>
        <a href="#contact" className="hover-lift rounded-md px-3 py-2 font-bold text-coral">
          Build something together
        </a>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {portfolio.projects.map((project, index) => {
          const hasLiveLink = Boolean(project.href) && project.href !== "#";

          return (
            <div
              key={project.title}
              className="project-card motion-card group flex flex-col rounded-lg p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <p className="tech-label flex items-center gap-2 text-sm font-black uppercase tracking-[0.14em]">
                  <GitBranch size={15} />
                  repo_0{index + 1} / {project.type}
                </p>
                <ArrowUpRight className="hover-icon" size={20} />
              </div>
              <div className="mt-10 flex items-center gap-2 text-cyan/75">
                <Braces size={18} />
                <span className="tech-label text-xs uppercase tracking-[0.18em]">
                  module.loaded
                </span>
              </div>
              <h3 className="mt-16 text-2xl font-black">{project.title}</h3>
              <p className="mt-4 leading-7 text-ink/65">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="blue-badge skill-pill rounded-md px-3 py-1 text-xs font-bold"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex-1" />

              {hasLiveLink ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blue-cta hover-lift mt-6 inline-flex w-fit items-center gap-2 rounded-md px-4 py-2 text-sm font-bold"
                >
                  <span>View Project</span>
                  <ArrowUpRight size={16} />
                </a>
              ) : (
                <span className="mt-6 inline-flex w-fit cursor-not-allowed items-center gap-2 rounded-md border border-ink/15 px-4 py-2 text-sm font-bold text-ink/45">
                  Coming Soon
                </span>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}