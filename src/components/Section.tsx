import { Fade } from "react-awesome-reveal";
import "./styles/Section.css";

const HomeSection: React.FC<{
  id?: string;
  children?: React.ReactNode;
}> = ({ id, children }) => {
  return (
    <Fade triggerOnce>
      <div id={id} className="home-section">
        {children}
      </div>
    </Fade>
  );
};

export default HomeSection;
