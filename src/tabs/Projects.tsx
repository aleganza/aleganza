import HomeSection from '@components/Section';
import SectionCard from '@components/SectionCard';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { repoData, repos } from 'src/constants/utils';
import { GithubRepo, Project } from 'src/models/types';

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>();

  useEffect(() => {
    fetchRepos();
  }, []);

  const fetchRepos = async () => {
    const response1 = await axios.get(
      "https://api.github.com/users/aleganza/repos"
    );
    const aleganza: GithubRepo[] = response1.data;

    const response2 = await axios.get(
      "https://api.github.com/users/akuse-app/repos"
    );
    const akuseApp: GithubRepo[] = response2.data;

    const response3 = await axios.get(
      "https://api.github.com/users/The-Galilei-Project/repos"
    );
    const galileiTheGame: GithubRepo[] = response3.data;

    const repos: GithubRepo[] = [
      ...akuseApp,
      ...aleganza,
      ...galileiTheGame,
    ].filter((repo) =>
      repoData.some((repoName) => repoName.name === repo.name)
    );

    setProjects(
      repos.map((repo) => ({
        name: repo.name,
        description: repo.description,
        icon: repo.owner.avatar_url,
        stargazers: repo.stargazers_count,
        link: repo.html_url,
      }))
    );
  };

  return (
    <HomeSection id="projects">
      <h1 className="heading unselectable">projects</h1>

      <div className="cards-group">
        {projects?.concat(repos)?.map((project) => (
          <SectionCard project={project} key={project.name} />
        ))}
      </div>
    </HomeSection>
  );
};

export default Projects;
