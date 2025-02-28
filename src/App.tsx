import "./styles/App.css";

import Footer from "@components/Footer";
import Hero from "@components/Hero";
import Nav from "@components/Nav";
import NavMobile from "@components/NavMobile";
import ParticlesBackground from "@components/ParticlesBackground";
import Gamedev from "@tabs/Gamedev";
import Web from "@tabs/Web";
import axios from "axios";
import { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";
import { gamedevData, webData } from "./constants/utils";
import { GithubRepo, Project } from "./models/types";
import Contact from "@components/Contact";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingRepos, setLoadingRepos] = useState(true);
  const [webProjects, setWebProjects] = useState<Project[]>([]);
  const [gamedevProjects, setGamedevProjects] = useState<Project[]>([]);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener("load", handleLoad);

    const interval = setInterval(() => {
      if (document.readyState === "complete") {
        setIsLoading(false);
        clearInterval(interval);
      }
    }, 100);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearInterval(interval);
    };
  }, []);

  const fetchRepos = async () => {
    setLoadingRepos(true);

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

      const fetchedWebRepos: GithubRepo[] = [
        ...akuseApp,
        ...aleganza,
        ...galileiTheGame,
      ].filter((repo) =>
        webData.some((repoName) => repoName.name === repo.name)
      );
      setWebProjects(
        fetchedWebRepos.map((repo) => ({
          name: repo.name,
          description: repo.description,
          icon: repo.owner.avatar_url,
          stargazers: repo.stargazers_count,
          link: repo.html_url,
        }))
      );

      const fetchedGamedevRepos: GithubRepo[] = [
        ...akuseApp,
        ...aleganza,
        ...galileiTheGame,
      ].filter((repo) =>
        gamedevData.some((repoName) => repoName.name === repo.name)
      );
      setGamedevProjects(
        fetchedGamedevRepos.map((repo) => ({
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

    setLoadingRepos(false);
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <MoonLoader color="#f4ce34" loading size={30} speedMultiplier={1} />
      </div>
    );
  }

  return (
    <>
      <ParticlesBackground />

      <Nav />

      <NavMobile />

      <Hero />

      {/* <About /> */}

      <Web projects={webProjects} loading={loadingRepos} />

      <Gamedev projects={gamedevProjects} loading={loadingRepos} />

      <Contact />

      <Footer />
    </>
  );
}

export default App;
