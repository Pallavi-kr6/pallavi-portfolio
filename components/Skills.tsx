"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Server,
  Brain,
  Wrench,
  Cpu,
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Java", "JavaScript", "C++", "C"],
  },
  {
    title: "Frontend",
    icon: Cpu,
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "MVC Architecture",
      "Authentication",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Supabase",
    ],
  },
  {
    title: "AI & ML",
    icon: Brain,
    skills: [
      "Machine Learning",
      "LLMs",
      "Prompt Engineering",
      "Information Retrieval",
      "Data Analysis",
      "AI Systems",
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "Linux",
      "VS Code",
      "Postman",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-6 py-24 border-t border-zinc-900"
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        viewport={{ once: true }}
      >
        <p className="text-sm uppercase tracking-widest text-zinc-500 mb-4">
          Skills
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Technologies I Work With
        </h2>

        <p className="text-zinc-400 mt-5 max-w-3xl leading-8">
          My toolkit spans software engineering, backend systems,
          databases, and applied AI. I enjoy learning new
          technologies and building products that solve
          meaningful problems.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center">
                  <Icon
                    size={24}
                    className="text-violet-400"
                  />
                </div>

                <h3 className="text-xl font-semibold text-white mt-5">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2 mt-5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full text-sm border border-zinc-800 bg-zinc-900 text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 text-center">
            <h3 className="text-3xl font-bold text-white">4+</h3>
            <p className="text-zinc-500 mt-2">
              Languages
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 text-center">
            <h3 className="text-3xl font-bold text-white">10+</h3>
            <p className="text-zinc-500 mt-2">
              Projects
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 text-center">
            <h3 className="text-3xl font-bold text-white">1+</h3>
            <p className="text-zinc-500 mt-2">
              Research Experience
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 text-center">
            <h3 className="text-3xl font-bold text-white">500+</h3>
            <p className="text-zinc-500 mt-2">
              DSA Problems
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}