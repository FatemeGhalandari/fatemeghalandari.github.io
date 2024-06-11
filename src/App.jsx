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

    const handleScroll = () => {
      clearTimeout(isScrolling);

      isScrolling = setTimeout(() => {
        const scrollY = window.scrollY;
        const heights = Array.from(sections).map(
          (section) => section.offsetTop
        );
        const max = Math.max(...heights.filter((h) => h <= scrollY));

        currentSection = heights.indexOf(max);
        sections[currentSection].scrollIntoView({ behavior: "smooth" });
      }, 100);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
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
