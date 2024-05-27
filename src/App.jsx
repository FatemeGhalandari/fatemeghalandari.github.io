import "./App.css";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Parallax from "./components/Parallax";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    let sections = document.querySelectorAll("section");
    let currentSection = 0;
    let isScrolling;

    const handleScroll = (e) => {
      clearTimeout(isScrolling);

      isScrolling = setTimeout(() => {
        if (e.deltaY > 0) {
          // Scrolling down
          currentSection = Math.min(sections.length - 1, currentSection + 1);
        } else {
          // Scrolling up
          currentSection = Math.max(0, currentSection - 1);
        }
        sections[currentSection].scrollIntoView({ behavior: "smooth" });
      },100);
    };
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="Skills">
        <Parallax type="skills" />
      </section>
      <section>
        <Skills />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
