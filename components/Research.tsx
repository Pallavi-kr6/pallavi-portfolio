"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Microscope,
  Database,
  ArrowUpRight,
} from "lucide-react";

export default function Research() {
  return (
    <section
      id="research"
      className="max-w-6xl mx-auto px-6 py-24 border-t border-zinc-900"
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        viewport={{ once: true }}
      >
        <p className="text-sm uppercase tracking-widest text-zinc-500 mb-4">
          Research
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Research Experience
        </h2>

        <p className="text-zinc-400 mt-5 max-w-3xl leading-8">
          Exploring how artificial intelligence and intelligent systems can be
          applied to solve real-world challenges through research, data-driven
          analysis, and scalable software engineering.
        </p>

        {/* Main Research Card */}

        <div className="mt-14">
          <motion.div
            whileHover={{ y: -5 }}
            className="rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-950 to-zinc-900 p-8"
          >
            <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-violet-400">
                  Research Internship
                </span>

                <h3 className="text-3xl font-bold text-white mt-3">
                  Machine Vision Intelligence Lab
                </h3>

                <p className="text-zinc-500 mt-2">
                  Dec 2025 – Jan 2026
                </p>

                <p className="text-zinc-400 mt-6 leading-8 max-w-3xl">
                  Contributed to an AI-based Early Warning Disaster Detection
                  System under the ANRF (SERB-TARE) research initiative.
                  Worked with environmental datasets and intelligent monitoring
                  systems to identify abnormal patterns, generate actionable
                  insights, and support decision-making in critical scenarios.
                </p>
              </div>

              <div>
                <div className="rounded-2xl border border-zinc-800 bg-zinc-950 px-5 py-3">
                  <p className="text-sm text-zinc-500">
                    Research Domain
                  </p>

                  <p className="text-white font-medium mt-1">
                    AI + Environmental Intelligence
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Research Highlights */}

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6"
          >
            <Brain className="text-violet-400" size={28} />

            <h3 className="text-white text-lg font-semibold mt-5">
              Pattern Detection
            </h3>

            <p className="text-zinc-400 mt-3 leading-7">
              Explored techniques for identifying abnormal environmental
              conditions and generating meaningful alerts from incoming data.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6"
          >
            <Database className="text-violet-400" size={28} />

            <h3 className="text-white text-lg font-semibold mt-5">
              Data Analysis
            </h3>

            <p className="text-zinc-400 mt-3 leading-7">
              Worked with real-world datasets involving preprocessing,
              monitoring workflows, anomaly identification, and evaluation.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6"
          >
            <Microscope className="text-violet-400" size={28} />

            <h3 className="text-white text-lg font-semibold mt-5">
              Research Workflow
            </h3>

            <p className="text-zinc-400 mt-3 leading-7">
              Collaborated on experimentation, system evaluation, and
              research-oriented problem solving within an interdisciplinary
              team.
            </p>
          </motion.div>
        </div>

        {/* Research Interests */}

        <div className="mt-14">
          <h3 className="text-white text-2xl font-semibold">
            Current Research Interests
          </h3>

          <div className="flex flex-wrap gap-3 mt-6">
            {[
              "Machine Learning",
              "Large Language Models",
              "Information Retrieval",
              "AI Systems",
              "Computer Vision",
              "Recommendation Systems",
              "Distributed Systems",
              "Applied Research",
            ].map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full border border-zinc-800 bg-zinc-950 text-zinc-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Future Research */}

        <div className="mt-14 rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-zinc-500 text-sm uppercase tracking-wider">
                Looking Ahead
              </p>

              <h3 className="text-white text-2xl font-semibold mt-2">
                Interested in ML Research Opportunities
              </h3>

              <p className="text-zinc-400 mt-3 max-w-2xl">
                Actively exploring research opportunities in Machine Learning,
                AI Systems, Information Retrieval, and Large Language Models
                while strengthening both theoretical and practical foundations.
              </p>
            </div>

            <ArrowUpRight
              size={24}
              className="text-violet-400"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}