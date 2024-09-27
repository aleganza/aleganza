import './styles/App.css';

import Footer from '@components/Footer';
import Hero from '@components/Hero';
import Nav from '@components/Nav';
import About from '@tabs/About';
import Projects from '@tabs/Projects';
import Works from '@tabs/Works';

function App() {
  return (
    <>
      <Nav />

      <Hero />

      <About />

      <Projects />

      <Works />

      <Footer />
    </>
  );
}

export default App;
