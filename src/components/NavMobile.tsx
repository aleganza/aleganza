import React, { useState } from "react";
import "./styles/NavMobile.css";

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
        <a href="#about" className="menu-link">
          about
        </a>
        <a href="#projects" className="menu-link">
          projects
        </a>
        <a href="#works" className="menu-link">
          works
        </a>
      </div>
    </>
  );
};

export default NavMobile;
