import './styles/Footer.css';

import { VscCoffee, VscHeart } from 'react-icons/vsc';

const Footer = () => {
  return (
    <footer>
      <div className="contact">
        {/* <a href="mailto:ganzarolli.alessio@gmail.com">
          <div className="email">
            <FiMail />
              contact me!
          </div>
        </a> */}

        {/* <div className="links-group">
          <a
            href="mailto:ganzarolli.alessio@gmail.com"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiMail />
          </a>

          <a
            href="https://github.com/aleganza"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub />
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
            href="https://www.instagram.com/aleganza_"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiInstagram />
          </a>

          <a
            href="https://aleganza.itch.io/"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaItchIo />
          </a>
        </div> */}
      </div>

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
