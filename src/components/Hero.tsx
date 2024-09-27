import ActionButton from "./buttons/ActionButton";
import "./styles/Hero.css";
import { FiArrowDown } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="hero" id="aleganza">
      <div className="content">
        <h1>
          Hi, I'm <span>Alessio</span>,
        </h1>
        <h1 className="lower">a full stack developer.</h1>
      </div>
        <ActionButton text="my stuff" iconRight={FiArrowDown} />
    </div>
  );
};

export default Hero;
