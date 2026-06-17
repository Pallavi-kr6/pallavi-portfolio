"use client";

import { motion } from "framer-motion";
import {
  Mail,
  ArrowUpRight,
  Code2,
  FileText,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const links = [
    {
      name: "Email",
      value: "pallavi6315@gmail.com",
      href: "mailto:pallavi6315@gmail.com",
      icon: Mail,
    },
    {
      name: "GitHub",
      value: "github.com/Pallavi-kr6",
      href: "https://github.com/Pallavi-kr6",
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/pallavi-kr6",
      href: "https://www.linkedin.com/in/pallavi-kr6/",
      icon: FaLinkedin,
    },
    {
      name: "LeetCode",
      value: "leetcode.com/u/pallavi_kr6",
      href: "https://leetcode.com/u/pallavi_kr6/",
      icon: Code2,
    },
    {
      name: "Resume",
      value: "View my resume",
      href: "https://drive.google.com/file/d/18rgZanlCqsoQWsfA0COIRkkjV6PZFhT6/view?usp=sharing",
      icon: FileText,
    },
  ];

  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 py-24 border-t border-zinc-900"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm uppercase tracking-widest text-zinc-500 mb-4">
          Contact
        </p>

        <h2 className="text-4xl md:text-6xl font-bold text-white">
          Let&apos;s build something
          <span className="text-violet-400"> impactful.</span>
        </h2>

        <p className="text-zinc-400 mt-6 max-w-2xl text-lg leading-8">
          I&apos;m always open to discussing software engineering,
          AI/ML projects, research opportunities, internships,
          and collaborations.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-14">
          {links.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -4,
                }}
                className="group"
              >
                <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 transition-all duration-300 hover:border-violet-500/40 hover:bg-zinc-900">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center">
                      <Icon
                        size={22}
                        className="text-violet-400"
                      />
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="text-zinc-500 group-hover:text-violet-400 transition"
                    />
                  </div>

                  <h3 className="text-white font-semibold mt-5">
                    {item.name}
                  </h3>

                  <p className="text-zinc-400 mt-2 break-all">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Bottom Section */}

        <div className="mt-20 border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Pallavi Kumari.
            Built with Next.js, TypeScript & Tailwind CSS.
          </p>

          <p className="text-zinc-600 text-sm">
            Software Engineering • AI/ML • Research
          </p>
        </div>
      </motion.div>
    </section>
  );
}