import HomeSection from "@components/Section";
import SectionCard from "@components/SectionCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";
import { web, webData } from "src/constants/utils";
import { GithubRepo, Project } from "src/models/types";

const Web = () => {
  const [projects, setProjects] = useState<Project[]>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchRepos();
  }, []);

  const fetchRepos = async () => {
    setLoading(true);

    try {
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

      const fetchedRepos: GithubRepo[] = [
        ...akuseApp,
        ...aleganza,
        ...galileiTheGame,
      ].filter((repo) =>
        webData.some((repoName) => repoName.name === repo.name)
      );

      setProjects(
        fetchedRepos.map((repo) => ({
          name: repo.name,
          description: repo.description,
          icon: repo.owner.avatar_url,
          stargazers: repo.stargazers_count,
          link: repo.html_url,
        }))
      );
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

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
