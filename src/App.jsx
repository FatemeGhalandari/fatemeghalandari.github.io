import "./App.css";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Strengths from "./components/Strengths";
import Experience from "./components/Experience";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      {/* background layer */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(900px circle at 12% 10%, rgba(99,102,241,0.28), transparent 38%),
              radial-gradient(700px circle at 88% 18%, rgba(34,211,238,0.16), transparent 34%),
              radial-gradient(900px circle at 50% 85%, rgba(168,85,247,0.14), transparent 42%),
              linear-gradient(180deg, #0a1020 0%, #050816 100%)
            `,
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "46px 46px",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 55%, rgba(0,0,0,0.35) 100%)",
          }}
        />
      </div>

      {/* content */}
      <div className="relative z-10">
        <Navbar />

        <main className="pt-[92px]">
          <section id="Home" className="scroll-mt-[92px]">
            <Hero />
          </section>

          <section id="Strengths" className="scroll-mt-[92px]">
            <Strengths />
          </section>

          <section id="Projects" className="scroll-mt-[92px]">
            <Projects />
          </section>

          <section id="Experience" className="scroll-mt-[92px]">
            <Experience />
          </section>

          <section id="Contact" className="scroll-mt-[92px]">
            <Contact />
          </section>
        </main>
      </div>
    </div>
  );
}
