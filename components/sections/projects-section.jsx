"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Rentify Tech",
    description:
      "Rentify Tech is a comprehensive rental management platform that streamlines gagdets rentals, tenant management, and payment processing.",
    tags: ["Next.js", "DaisyUI", "Stripe", "Tailwind"],
    image: "/rent.png",
    link: "https://rentechify.web.app/",
  },
  {
    title: "Lingo Bingo",
    description:
      "Lingo Bingo is a fun, engaging platform to expand vocabulary and improve Spanish communication skills.",
    tags: ["Next.js", "DaisyUI", "Stripe", "Tailwind"],
    image: "/lingo.gif",
    link: "https://assignment-009-cfd88.web.app/",
  },
  {
    title: "Visa",
    description:
      "Visa Navigator Portal simplifies the visa journey: check requirements, apply online, and track progress.",
    tags: ["React", "Storybook", "CSS", "Figma"],
    image: "/visa.png",
    link: "https://assignment-010-512d2.web.app/",
  },
  // {
  //   title: "Historical Artifacts Tracker",
  //   description:
  //     "Browse, add, update, like, and manage historical artifacts with auth and full CRUD workflows.",
  //   tags: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
  //   image: "/history.png",
  //   link: "https://job-portal-0001.web.app/",
  // },
 
];

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => setIsDesktop(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return isDesktop;
}

function motionIf(enabled, props) {
  return enabled ? props : {};
}

export default function ProjectsSection() {
  const isDesktop = useIsDesktop();
  const prefersReduced = useReducedMotion();
  const allowMotion = isDesktop && !prefersReduced;

  return (
    <section
      id="projects"
      className="relative min-w-screen   px-6 md:px-12 lg:px-16 py-24 flex items-center justify-center"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="hidden sm:block absolute left-[-15%] top-[-10%] h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" />
        <div className="hidden sm:block absolute right-[-15%] bottom-[-10%] h-[420px] w-[420px] rounded-full bg-foreground/10 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-7xl">
        <motion.h2
          {...motionIf(allowMotion, {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6, ease: "easeOut" },
            viewport: { once: true },
          })}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 lg:mb-14 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              {...motionIf(allowMotion, {
                initial: { opacity: 0, y: 40 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.5, delay: index * 0.1, ease: "easeOut" },
                viewport: { once: true },
              })}
              className="group flex flex-col h-full overflow-hidden rounded-2xl border border-border bg-card/70 backdrop-blur-lg transition-all hover:border-primary/40"
            >
              <div className="relative aspect-[34/12] w-full overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={`object-cover ${allowMotion ? "transition-transform duration-700 group-hover:scale-105" : ""}`}
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg lg:text-xl font-semibold">{project.title}</h3>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} link`}
                  >
                    <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                  </Link>
                </div>

                <p className="text-sm lg:text-base text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
