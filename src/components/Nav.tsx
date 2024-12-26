import './styles/Nav.css';

import { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaItchIo } from 'react-icons/fa';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
      setScrolled(scrollTop > 50);

      const sections = ["aleganza", "web", "gamedev"];
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
            <span>gamedev</span>
          </a>
        </Fade>
      </div>

      <div className="links-group">
        <Fade direction="down" triggerOnce cascade damping={0.3}>
          <a
            href="https://aleganza.itch.io/"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaItchIo />
          </a>
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
  );
};

export default Nav;
