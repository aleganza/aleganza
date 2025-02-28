// import "./styles/Works.css";
import HomeSection from '@components/Section';
import SectionCard from '@components/SectionCard';
import { MoonLoader } from 'react-spinners';
import { gamedev } from 'src/constants/utils';
import { Project } from 'src/models/types';

const Gamedev: React.FC<{
  projects: Project[];
  loading: boolean;
}> = ({ projects, loading }) => {
  return (
    <HomeSection id="gamedev">
      <h1 className="heading unselectable">Game Development Projects</h1>

      <div className="cards-group">
        {loading ? (
          <MoonLoader color="#f4ce34" loading size={30} speedMultiplier={1} />
        ) : (
          projects
            ?.concat(gamedev)
            ?.map((project) => (
              <SectionCard project={project} key={project.name} />
            ))
        )}
      </div>
    </HomeSection>
  );
};

export default Gamedev;
