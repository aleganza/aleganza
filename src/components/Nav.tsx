import { useEffect, useState } from "react";
import "./styles/Nav.css";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
      setScrolled(scrollTop > 50);

      const sections = ["aleganza", "about", "works", "projects", "contact"];
      const scrollPositions = sections.map((id) => ({
        id,
        offset: document.getElementById(id)?.offsetTop || 0,
      }));

      const currentSection = scrollPositions
        .reverse()
        .find(({ offset }) => scrollTop >= offset)?.id;

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <nav className={`sidebar ${scrolled ? "bg" : ""}`}>
      <div className="items-group">
        <a href="#aleganza" className={`item logo ${activeSection === "aleganza" ? "active" : ""}`}>
          <span>aleganza</span>
        </a>

        <a href="#about" className={`item ${activeSection === "about" ? "active" : ""}`}>
          <span>about</span>
        </a>

        <a href="#works" className={`item ${activeSection === "works" ? "active" : ""}`}>
          <span>works</span>
        </a>

        <a href="#projects" className={`item ${activeSection === "projects" ? "active" : ""}`}>
          <span>projects</span>
        </a>

        <a href="#contact" className={`item ${activeSection === "contact" ? "active" : ""}`}>
          <span>contact</span>
        </a>
      </div>

      <div className="links-group">
        <a href="https://github.com/aleganza" className="link" target="_blank" rel="noopener noreferrer">
          <FiGithub />
        </a>
        <a href="https://www.linkedin.com/in/alessio-ganzarolli-87425a240" className="link" target="_blank" rel="noopener noreferrer">
          <FiLinkedin />
        </a>
        <a href="https://www.instagram.com/aleganza_" className="link" target="_blank" rel="noopener noreferrer">
          <FiInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
