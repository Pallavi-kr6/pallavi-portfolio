"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  FileText,
  Code2,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import BorderGlow from './BorderGlow';
import PixelCard from './PixelCard';
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="max-w-6xl mx-auto w-full">

        {/* Status Badge */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2"
        >
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />

          <span className="text-sm text-zinc-400">
            Open to Internships • Software Engineering • AI/ML
          </span>
        </motion.div>

        {/* Main Content */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="mt-8"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white">
            Pallavi
            <br />
            Kumari
          </h1>

          <p className="mt-8 max-w-3xl text-lg md:text-xl text-zinc-400 leading-relaxed">
            Computer Science undergraduate focused on
            <span className="text-white font-medium">
              {" "}Software Engineering
            </span>,
            <span className="text-white font-medium">
              {" "}Artificial Intelligence
            </span>,
            and
            <span className="text-white font-medium">
              {" "}Scalable Backend Systems
            </span>.
            <br />
            Building AI-powered products, research-driven solutions,
            and production-ready applications.
          </p>
        </motion.div>

        {/* CTA Buttons */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-4 mt-10"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            className="group flex items-center gap-2 rounded-xl bg-white text-black px-6 py-3 font-medium transition hover:scale-105"
          >
            Resume
            <FileText size={18} />
          </a>

          <a
            href="https://github.com/Pallavi-kr6"
            target="_blank"
            className="group flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950 px-6 py-3 text-zinc-300 hover:border-zinc-700 transition"
          >
            GitHub
            <FaGithub size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/pallavi-kr6/"
            target="_blank"
            className="group flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950 px-6 py-3 text-zinc-300 hover:border-zinc-700 transition"
          >
            LinkedIn
            <FaLinkedin size={18} />
          </a>

          <a
            href="https://leetcode.com/u/pallavi_kr6/"
            target="_blank"
            className="group flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950 px-6 py-3 text-zinc-300 hover:border-zinc-700 transition"
          >
            LeetCode
            <Code2 size={18} />
          </a>
        </motion.div>

        {/* Stats */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-20"
        >
            <BorderGlow
  edgeSensitivity={30}
  glowColor="40 80 80"
  backgroundColor="#120F17"
  borderRadius={28}
  glowRadius={40}
  glowIntensity={1}
  coneSpread={25}
  animated={false}
  colors={['#c084fc', '#f472b6', '#38bdf8']}
> 
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"   style={{ padding: '2em' }}>
            <h3 className="text-3xl font-bold text-white">9.59</h3>
            <p className="text-zinc-500 mt-2">CGPA</p>
          </div>
</BorderGlow>

   <BorderGlow
  edgeSensitivity={30}
  glowColor="40 80 80"
  backgroundColor="#120F17"
  borderRadius={28}
  glowRadius={40}
  glowIntensity={1}
  coneSpread={25}
  animated={false}
  colors={['#c084fc', '#f472b6', '#38bdf8']}
> 
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"   style={{ padding: '2em' }}> 
            <h3 className="text-3xl font-bold text-white">10+</h3>
            <p className="text-zinc-500 mt-2">Projects</p>
          </div>
</BorderGlow>


          <BorderGlow
  edgeSensitivity={30}
  glowColor="40 80 80"
  backgroundColor="#120F17"
  borderRadius={28}
  glowRadius={40}
  glowIntensity={1}
  coneSpread={25}
  animated={false}
  colors={['#c084fc', '#f472b6', '#38bdf8']}
> 
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"   style={{ padding: '2em' }}> 
        
            <h3 className="text-3xl font-bold text-white">2+</h3>
            <p className="text-zinc-500 mt-2">Hackathons</p>
          </div>
</BorderGlow>


              <BorderGlow
  edgeSensitivity={30}
  glowColor="40 80 80"
  backgroundColor="#120F17"
  borderRadius={28}
  glowRadius={40}
  glowIntensity={1}
  coneSpread={25}
  animated={false}
  colors={['#c084fc', '#f472b6', '#38bdf8']}
> 
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"   style={{ padding: '2em' }}> 
            <h3 className="text-3xl font-bold text-white">1</h3>
            <p className="text-zinc-500 mt-2">Research Internship</p>
          </div>
          </BorderGlow>
        </motion.div>
 
        {/* Featured Highlight */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-950 to-zinc-900 p-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-zinc-500 text-sm uppercase tracking-wider">
                Featured Work
              </p>

              <h3 className="text-2xl font-semibold text-white mt-2">
                AI Code Reviewer & Repository Intelligence Platform
              </h3>

              <p className="text-zinc-400 mt-3 max-w-2xl">
                Built an AI-powered platform for repository auditing,
                code review, security analysis, and architecture
                intelligence using modern AI workflows.
              </p>
            </div>

            <a
              href="https://code-intel-omega.vercel.app/"
              target="_blank"
              className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300"
            >
              View Project
              <ArrowUpRight size={18} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}