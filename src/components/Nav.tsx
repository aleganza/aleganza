import "./styles/Nav.css";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = ["aleganza", "web", "gamedev", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className={`nav-wrapper ${scrolled ? "bg" : ""}`}>
      <nav className="sidebar">
        <div className="items-group">
          <Fade direction="down" triggerOnce cascade damping={0.3}>
            <a
              href="#aleganza"
              className={`item logo ${
                activeSection === "aleganza" ? "active" : ""
              }`}
            >
              <span>aleganza</span>
            </a>

            <a
              href="#web"
              className={`item ${activeSection === "web" ? "active" : ""}`}
            >
              <span>web</span>
            </a>

            <a
              href="#gamedev"
              className={`item ${activeSection === "gamedev" ? "active" : ""}`}
            >
              <span>game dev</span>
            </a>

            <a
              href="#contact"
              className={`item ${activeSection === "contact" ? "active" : ""}`}
            >
              <span>contact</span>
            </a>
          </Fade>
        </div>

        <div className="links-group">
          <Fade direction="down" triggerOnce cascade damping={0.3}>
            <a
              href="https://www.linkedin.com/in/alessio-ganzarolli-87425a240"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin />
            </a>
            <a
              href="https://github.com/aleganza"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub />
            </a>
          </Fade>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
