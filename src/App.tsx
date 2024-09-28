import "./styles/App.css";
import Footer from "@components/Footer";
import Hero from "@components/Hero";
import Nav from "@components/Nav";
import NavMobile from "@components/NavMobile";
import About from "@tabs/About";
import Projects from "@tabs/Projects";
import Works from "@tabs/Works";
import { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.addEventListener("load", () => {
      setIsLoading(false);
    });

    return () => {
      window.removeEventListener("load", () => {
        setIsLoading(false);
      });
    };
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <MoonLoader color="#f4ce34" loading size={30} speedMultiplier={1} />
      </div>
    );
  }

  return (
    <>
      <Nav />

      <NavMobile />

      <Hero />

      <About />

      <Projects />

      <Works />

      <Footer />
    </>
  );
}

export default App;
