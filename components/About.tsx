"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-24 border-t border-zinc-900"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-sm uppercase tracking-widest text-zinc-500 mb-4">
          About
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-4xl">
          Building software systems, AI-powered applications, and scalable
          backend services that solve real-world problems.
        </h2>

        <div className="mt-10 grid md:grid-cols-2 gap-10">
          {/* Left */}
          <div>
            <p className="text-zinc-400 leading-8 text-lg">
              I&apos;m{" "}
              <span className="text-white font-semibold">
                Pallavi Kumari
              </span>
              , a Computer Science undergraduate with a strong foundation in
              software engineering, backend development, databases, data
              structures, algorithms, and applied artificial intelligence.
            </p>

            <p className="text-zinc-400 leading-8 text-lg mt-6">
              My work focuses on building practical technology solutions that
              combine strong engineering principles with modern AI capabilities.
              I enjoy designing scalable systems, developing APIs, working with
              databases, and exploring how machine learning can be integrated
              into real-world applications.
            </p>

            <p className="text-zinc-400 leading-8 text-lg mt-6">
              Beyond academics, I actively participate in hackathons, research
              initiatives, open-source programs, and coding challenges to
              continuously improve my technical and problem-solving skills.
            </p>
          </div>

          {/* Right */}
          <div className="space-y-5">
            <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-2">
                🎓 Education
              </h3>

              <p className="text-zinc-400">
                B.Tech in Computer Science & Engineering (IT)
              </p>

              <p className="text-zinc-500 mt-1">
                SRM Institute of Science and Technology
              </p>

              <p className="text-violet-400 font-medium mt-3">
                CGPA: 9.59 / 10
              </p>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-2">
                🔬 Research
              </h3>

              <p className="text-zinc-400">
                Research Intern – Machine Vision Intelligence Lab
              </p>

              <p className="text-zinc-500 mt-2">
                Worked on an AI-based Early Warning Disaster Detection System
                under the ANRF (SERB-TARE) research initiative.
              </p>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-2">
                🚀 Interests
              </h3>

              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "Software Engineering",
                  "Machine Learning",
                  "AI Systems",
                  "Backend Development",
                  "Distributed Systems",
                  "Information Retrieval",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full text-sm bg-zinc-900 border border-zinc-700 text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}