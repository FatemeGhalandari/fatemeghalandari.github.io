import "./App.scss";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Parallax from "./components/Parallax/Parallax";
function App() {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <section>services</section>
      <section id="Skills">
        <Parallax type="skills" />
      </section>
      <section>portfolio1</section>
      <section>portfolio2</section>
      <section>portfolio3</section>
      <section id="Contact">contact</section>
    </div>
  );
}

export default App;
