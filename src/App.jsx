import "./App.scss";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Parallax from "./components/Parallax/Parallax";
import Skills from "./components/Skills/Skills";
function App() {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="Portfolio">
        <Parallax type="skills" />
      </section>
      <section>
        <Skills />
      </section>
      <section id="Skills">
        <Parallax type="portfolio" />
      </section>
      <section>portfolio1</section>
      <section>portfolio2</section>
      <section>portfolio3</section>
      <section id="Contact">contact</section>
    </div>
  );
}

export default App;
