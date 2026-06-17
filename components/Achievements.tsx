"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Medal,
  Code2,
  Award,
  Brain,
} from "lucide-react";

const achievements = [
  {
    title: "Top 10 — HackLite 2026",
    description:
      "Secured a Top 10 position among competing teams by building an innovative technology solution.",
    icon: Trophy,
  },
  {
    title: "Top 11 — WEFO Hackathon",
    description:
      "Ranked among the Top 11 teams in the World Engineering Day Hackathon.",
    icon: Medal,
  },
  {
    title: "Research Intern",
    description:
      "Contributed to an AI-based Early Warning Disaster Detection System at Machine Vision Intelligence Lab.",
    icon: Brain,
  },
  {
    title: "GirlScript Summer of Code",
    description:
      "Contributed to open-source projects and collaborated with developers across the community.",
    icon: Code2,
  },
  {
    title: "LeetCode 50 Days Badge",
    description:
      "Maintained consistent problem-solving practice and strengthened DSA fundamentals.",
    icon: Award,
  },
  {
    title: "GitHub Achievements",
    description:
      "Earned Pull Shark, Quickdraw, Pair Extraordinaire, and YOLO achievements.",
    icon: Award,
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="max-w-6xl mx-auto px-6 py-24 border-t border-zinc-900"
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-sm uppercase tracking-widest text-zinc-500 mb-4">
          Achievements
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Highlights from my journey
        </h2>

        <p className="text-zinc-400 mt-5 max-w-3xl leading-7">
          A collection of research, hackathon, coding, and open-source
          achievements that reflect my passion for engineering, AI, and
          continuous learning.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;

            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                }}
                className="group"
              >
                <div className="h-full bg-zinc-950 border border-zinc-800 rounded-2xl p-6 transition-all duration-300 hover:border-violet-500/50 hover:bg-zinc-900">
                  <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mb-5">
                    <Icon
                      size={24}
                      className="text-violet-400"
                    />
                  </div>

                  <h3 className="text-white text-lg font-semibold">
                    {achievement.title}
                  </h3>

                  <p className="text-zinc-400 mt-3 leading-7">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-bold text-white">9.59</h3>
            <p className="text-zinc-500 mt-2">CGPA</p>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-bold text-white">10+</h3>
            <p className="text-zinc-500 mt-2">Projects</p>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-bold text-white">2+</h3>
            <p className="text-zinc-500 mt-2">Hackathons</p>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-bold text-white">1</h3>
            <p className="text-zinc-500 mt-2">Research Role</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}