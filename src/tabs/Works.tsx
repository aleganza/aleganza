// import "./styles/Works.css";
import HomeSection from "@components/Section";
import SectionCard from "@components/SectionCard";
import { works } from "src/constants/utils";

const Works = () => {
  return (
    <HomeSection id="works">
      <h1 className="heading unselectable">works</h1>

      <div className="cards-group">
        {works?.map((project) => (
          <SectionCard project={project} key={project.name} />
        ))}
      </div>
    </HomeSection>
  );
};

export default Works;
