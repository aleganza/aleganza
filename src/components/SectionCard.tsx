import { useEffect, useState } from "react";
import { FiDownload, FiExternalLink, FiStar } from "react-icons/fi";
import { projectNames } from "src/constants/utils";
import { Project } from "src/models/types";
import {
  getProjectDownloads,
  getProjectParsedName,
  getProjectSkills,
  getProjectTags,
  getTagIcon,
} from "src/modules/utils";

import ActionButton from "./buttons/ActionButton";

const SectionCard: React.FC<{ project: Project }> = ({ project }) => {
  const ICON_PATH = `images/projects/icons/${project.name}.png`;
  const BANNER_PATH = `images/projects/banners/${project.name}.jpg`;

  const [iconSrc, setIconSrc] = useState<string>(ICON_PATH);

  useEffect(() => {
    const img = new Image();
    img.src = ICON_PATH;

    img.onload = () => {
      setIconSrc(ICON_PATH);
    };

    img.onerror = () => {
      setIconSrc(project.icon);
    };
  }, [ICON_PATH, project.icon]);

  return (
    <div className="card">
      <div className="left">
        <div className="overlay">
          <div className="icons">
            <img
              src={`https://skillicons.dev/icons?i=${getProjectSkills(
                projectNames,
                project.name
              )}`}
              alt="project_logo"
            />
            {/* <img src={iconSrc} alt="project_logo" className="logo" /> */}
          </div>
        </div>

        <img src={BANNER_PATH} alt="project banner" className="banner" />
      </div>

      <div className="right">
        <div className="title">
          <h1 className="name">
            {getProjectParsedName(projectNames, project.name)}
          </h1>

          {project.stargazers && (
            <span className="stargazers">
              <FiStar />
              {project.stargazers}
            </span>
          )}
        </div>

        <div className="tags-group">
          {getProjectDownloads(projectNames, project.name) && (
            <span className="tag downloads">
              {<FiDownload />}
              {getProjectDownloads(projectNames, project.name)}
            </span>
          )}
          {getProjectTags(projectNames, project.name)?.map((tag) => {
            const TagIcon = getTagIcon(tag);
            return (
              <span className="tag" key={tag}>
                {TagIcon && <TagIcon className="tag-icon" />}
                {tag}
              </span>
            );
          })}
        </div>

        <div className="description">{project.description}</div>

        <div className="link">
          <a href={project.link} className="no-underline" target="_blank">
            <ActionButton text="view" iconRight={FiExternalLink} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SectionCard;
