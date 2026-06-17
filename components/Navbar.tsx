"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";

const navItems = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Research",
    href: "#research",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Achievements",
    href: "#achievements",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-zinc-800 bg-black/70 backdrop-blur-xl px-5 py-4">

          {/* Logo */}

          <Link href="/" className="group">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-white text-black flex items-center justify-center font-bold">
                P
              </div>

              <div>
                <p className="font-semibold text-white">
                  Pallavi Kumari
                </p>

                <p className="text-xs text-zinc-500">
                  Software Engineer • AI/ML
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Resume Button */}

          <div className="hidden md:flex items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              className="flex items-center gap-2 rounded-xl bg-white text-black px-4 py-2 text-sm font-medium hover:scale-105 transition"
            >
              Resume
              <Download size={16} />
            </a>
          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}

        {open && (
          <div className="md:hidden mt-3 rounded-2xl border border-zinc-800 bg-zinc-950 backdrop-blur-xl overflow-hidden">
            <div className="flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-6 py-4 border-b border-zinc-800 text-zinc-300 hover:bg-zinc-900"
                >
                  {item.name}
                </a>
              ))}

              <a
                href="/resume.pdf"
                target="_blank"
                className="m-4 flex items-center justify-center gap-2 rounded-xl bg-white text-black py-3 font-medium"
              >
                Resume
                <Download size={16} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}