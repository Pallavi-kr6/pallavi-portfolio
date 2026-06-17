import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="grid-bg min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Research />
      <Skills />
      <Achievements />
      <Contact />
    </main>
  );
}