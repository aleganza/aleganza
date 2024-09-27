import { useEffect, useState } from "react";
import "./styles/About.css";

import HomeSection from "@components/Section";

const About = () => {
  const [age, setAge] = useState<string>();

  useEffect(() => {
    const now = new Date();

    let elapsedYears = now.getFullYear() - 2003;
    if (now.getMonth() < 4 || (now.getMonth() == 4 && now.getDate() < 13)) {
      elapsedYears--;
    }

    setAge(elapsedYears.toString());
  }, []);

  return (
    <HomeSection id="about">
      <h1 className="heading unselectable">about</h1>

      <div className="about">
        <div className="description">
          {age}-year-old web development enthusiast.
          <br />
          I've been working with JavaScript for years, building open-source
          projects and adding a touch of pixel art along the way.
          <br />
          Occasionally, I freelance, focusing on developing websites and
          applications.
          <br />I enjoy taking on challenges and continuously improving my
          skills.
        </div>

        <div className="skills">
          <img src="https://skillicons.dev/icons?i=js,ts,html,css,nodejs,react,electron,firebase,azure" />
        </div>
      </div>
    </HomeSection>
  );
};

export default About;
