import "./styles/About.css";

import HomeSection from "@components/Section";

const About = () => {
  return (
    <HomeSection id="about">
      <h1 className="heading unselectable">about</h1>

      <div className="about">
        <div className="description">
          21-year-old web development enthusiast.
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
