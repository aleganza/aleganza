import { Fade } from "react-awesome-reveal";
import ActionButton from "./buttons/ActionButton";
import "./styles/Hero.css";
import { FiArrowDown } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="hero unselectable" id="aleganza">
      <div className="content">
        <Fade direction="down" triggerOnce>
          <h1>
            Hi, I'm <span>Alessio</span>,
          </h1>
          <h1 className="lower">a full stack developer.</h1>
        </Fade>
      </div>

      <Fade direction="up" triggerOnce>
        <a href="#projects" className="no-underline">
          <ActionButton text="my stuff" iconRight={FiArrowDown} />
        </a>
      </Fade>
    </div>
  );
};

export default Hero;
