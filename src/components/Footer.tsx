import "./styles/Footer.css";

import { VscCoffee, VscHeart } from "react-icons/vsc";

const Footer = () => {
  return (
    <footer>
      <span className="credits">
        made with <VscHeart color="#c0392b" className="emoji" /> and{" "}
        <VscCoffee color="#8e735b" className="emoji" /> by{" "}
        <a href="https://github.com/aleganza" target="_blank">
          aleganza
        </a>
      </span>
    </footer>
  );
};

export default Footer;
