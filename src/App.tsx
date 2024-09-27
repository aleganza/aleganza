import Footer from "@components/Footer";
import "./styles/App.css";

import Hero from "@components/Hero";
import Nav from "@components/Nav";
import About from "@tabs/About";
import Projects from "@tabs/Projects";
import Contact from "@tabs/Contact";
import Works from "@tabs/Works";

function App() {
  return (
    <>
      <Nav />

      <Hero />

      <About />

      <Works />

      <Projects />

      <Contact />

      <Footer />
    </>
  );
}

export default App;
