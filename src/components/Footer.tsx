import "./styles/Footer.css";

import { VscCoffee, VscHeart } from "react-icons/vsc";

const Footer = () => {
  return (
    <footer>
      <div className="contact">
        <span className="credits contact-me">
          <a href="mailto:ganzarolli.alessio@gmail.com">
            ganzarolli.alessio@gmail.com
          </a>
        </span>

        <span className="credits">
          made with <VscHeart color="#c0392b" className="emoji" /> and{" "}
          <VscCoffee color="#8e735b" className="emoji" /> by{" "}
          <a href="https://github.com/aleganza" target="_blank">
            aleganza
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
