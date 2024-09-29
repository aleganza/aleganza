import React, { useState } from "react";
import "./styles/NavMobile.css";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { FaItchIo } from "react-icons/fa";

const NavMobile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="mobile">
        <a href="#aleganza" className="logo">
          <span>aleganza</span>
        </a>

        <div className="hamburger" onClick={toggleMenu}>
          <div className={isOpen ? "bar bar1 open" : "bar bar1"}></div>
          <div className={isOpen ? "bar bar2 open" : "bar bar2"}></div>
          <div className={isOpen ? "bar bar3 open" : "bar bar3"}></div>
        </div>
      </nav>

      <div className={isOpen ? "mobile-menu open" : "mobile-menu"}>
        <div className="items-group">
          <a href="#about" className="item">
            about
          </a>
          <a href="#projects" className="item">
            projects
          </a>
          <a href="#works" className="item">
            works
          </a>
        </div>

        <div className="links-group">
          <a
            href="https://aleganza.itch.io/"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaItchIo />
          </a>
          <a
            href="https://www.instagram.com/aleganza_"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiInstagram />
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
        </div>
      </div>
    </>
  );
};

export default NavMobile;
