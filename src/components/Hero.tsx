import "./styles/Hero.css";

import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { FiArrowDown } from "react-icons/fi";
import ActionButton from "./buttons/ActionButton";

const Hero = () => {
  const [age, setAge] = useState<string>();

  useEffect(() => {
    const now = new Date();

    let elapsedYears = now.getFullYear() - 2003;
    if (now.getMonth() < 4 || (now.getMonth() == 4 && now.getDate() < 13)) {
      elapsedYears--;
    }

    setAge(elapsedYears.toString());
  }, []);

  return (
    <div className="home-section hero unselectable" id="aleganza">
      <Fade triggerOnce cascade duration={500} delay={1000} damping={0.1}>
        <div className="content">
          <h1>
            Hi! I'm <span>Alessio</span>,<br /> a full stack developer.
          </h1>
        </div>

        <p className="description">
          {age}-year-old web development enthusiast.
          <br />
          I've been working with JavaScript for years, building open-source
          projects and adding a touch of pixel art along the way.
        </p>

        <br />
        <br />

        <p className="description">
          Occasionally, I freelance, focusing on developing websites and
          applications.
          <br />I enjoy taking on challenges and continuously improving my
          skills.
        </p>

        {/* <div className="skills">
        <img
          src="https://skillicons.dev/icons?i=js,ts,css,svelte,react,electron,nextjs,tailwind,mysql,firebase,azure"
          alt="skill-icons"
          />
      </div> */}

        <br />
        <br />

        <a href="#web" className="no-underline">
          <ActionButton text="my stuff" iconRight={FiArrowDown} />
        </a>
      </Fade>
    </div>
  );
};

export default Hero;
