import './styles/NavMobile.css';

import React, { useState } from 'react';
import { FaItchIo } from 'react-icons/fa';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

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
          <a href="#web" className="item">
            web
          </a>
          <a href="#gamedev" className="item">
            gamedev
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
