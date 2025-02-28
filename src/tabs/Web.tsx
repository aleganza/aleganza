import HomeSection from "@components/Section";
import SectionCard from "@components/SectionCard";
import { MoonLoader } from "react-spinners";
import { web } from "src/constants/utils";
import { Project } from "src/models/types";

const Web: React.FC<{
  projects: Project[];
  loading: boolean;
}> = ({ projects, loading }) => {
  return (
    <HomeSection id="web">
      <h1 className="heading unselectable">Web Projects</h1>

      <div className="cards-group">
        {loading ? (
          <MoonLoader color="#f4ce34" loading size={30} speedMultiplier={1} />
        ) : (
          projects
            ?.concat(web)
            ?.map((project) => (
              <SectionCard project={project} key={project.name} />
            ))
        )}
      </div>
    </HomeSection>
  );
};

export default Web;
