import "./styles/Footer.css";
import { Fade } from "react-awesome-reveal";
import { VscCoffee, VscHeart } from "react-icons/vsc";

const Footer = () => {
  return (
    <Fade triggerOnce>
      <footer>
        <div className="contact">
          <span className="credits">
            made with <VscHeart color="#c0392b" className="emoji" /> and{" "}
            <VscCoffee color="#8e735b" className="emoji" /> by{" "}
            <a href="https://github.com/aleganza" target="_blank">
              aleganza
            </a>
          </span>
        </div>
      </footer>
    </Fade>
  );
};

export default Footer;
