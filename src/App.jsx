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
    let startTouchY;

    const handleLinkClick = (e) => {
      const clickedSection = e.target.getAttribute("href").substring(1); // remove the '#' from the href
      const clickedSectionIndex = Array.from(sections).findIndex(
        (section) => section.id === clickedSection
      );
      if (clickedSectionIndex !== -1) {
        currentSection = clickedSectionIndex;
      }
    };

    const links = document.querySelectorAll(".menu-link, .nav-btn");
    links.forEach((link) => link.addEventListener("click", handleLinkClick));

    const handleScroll = (e) => {
      clearTimeout(isScrolling);
      isScrolling = setTimeout(() => {
        let deltaY;
        if (e.type === "wheel") {
          deltaY = e.deltaY;
        } else if (e.type === "touchmove") {
          deltaY = startTouchY - e.touches[0].clientY;
          startTouchY = e.touches[0].clientY - startTouchY;
        }

        if (deltaY > 0) {
          // Scrolling down
          currentSection = Math.min(sections.length - 1, currentSection + 1);
        } else {
          // Scrolling up
          currentSection = Math.max(0, currentSection - 1);
        }
        sections[currentSection].scrollIntoView({ behavior: "smooth" });
      }, 100);
    };

    const handleTouchStart = (e) => {
      startTouchY = e.touches[0].clientY;
    };

    window.addEventListener("wheel", handleScroll);
    window.addEventListener("touchmove", handleScroll);
    window.addEventListener("touchstart", handleTouchStart);

    return () => {
      window.addEventListener("wheel", handleScroll);
      window.addEventListener("touchmove", handleScroll);
      window.addEventListener("touchstart", handleTouchStart);
      links.forEach((link) =>
        link.removeEventListener("click", handleLinkClick)
      );
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
