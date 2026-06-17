"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "AI Code Reviewer & Repository Intelligence",
    description:
      "AI-powered platform for repository auditing, code review, security analysis, technical debt detection, and architecture intelligence using LLM-assisted workflows.",
    tech: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "AI",
      "LLMs",
      "PostgreSQL",
    ],
    live: "https://code-intel-omega.vercel.app/",
    github: "https://github.com/Pallavi-kr6",
    featured: true,
  },
  {
    title: "VowWear",
    description:
      "AI-powered wedding fashion recommendation platform that generates personalized outfit suggestions based on event type, budget, theme, and user preferences.",
    tech: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind",
    ],
    live: "https://vowwear.vercel.app/",
    github: "https://github.com/Pallavi-kr6",
  },
  {
    title: "Department Counselling Platform",
    description:
      "Full-stack counselling management platform with appointment scheduling, authentication, student workflows, and PostgreSQL-backed APIs.",
    tech: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "REST API",
      "Authentication",
    ],
    live: "https://counselling-1.onrender.com",
    github: "https://github.com/Pallavi-kr6",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-24 border-t border-zinc-900"
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        viewport={{ once: true }}
      >
        <p className="text-sm uppercase tracking-widest text-zinc-500 mb-4">
          Projects
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Things I&apos;ve Built
        </h2>

        <p className="text-zinc-400 mt-5 max-w-3xl leading-8">
          A collection of software engineering, AI, and research-driven
          projects focused on solving real-world problems through scalable
          systems and intelligent applications.
        </p>

        {/* Featured Project */}

        <div className="mt-14">
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ y: -5 }}
                className="rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-950 to-zinc-900 p-8"
              >
                <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-violet-400">
                      Featured Project
                    </span>

                    <h3 className="text-3xl font-bold text-white mt-3">
                      {project.title}
                    </h3>

                    <p className="text-zinc-400 mt-5 leading-8 max-w-3xl">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-sm text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <a
                      href={project.live}
                      target="_blank"
                      className="flex items-center gap-2 rounded-xl bg-white text-black px-5 py-3 font-medium"
                    >
                      Live Demo
                      <ArrowUpRight size={18} />
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-2 rounded-xl border border-zinc-800 px-5 py-3 text-zinc-300"
                    >
                      GitHub
                      <FaGithub size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Other Projects */}

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {projects
            .filter((p) => !p.featured)
            .map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ y: -4 }}
                className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="text-zinc-400 mt-4 leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-5 mt-6">
                  <a
                    href={project.live}
                    target="_blank"
                    className="text-violet-400 hover:text-violet-300 flex items-center gap-1"
                  >
                    Live
                    <ArrowUpRight size={16} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    className="text-zinc-400 hover:text-white flex items-center gap-1"
                  >
                    GitHub
                    <FaGithub size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
        </div>
      </motion.div>
    </section>
  );
}