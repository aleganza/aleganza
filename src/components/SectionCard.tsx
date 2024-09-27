import { useEffect, useState } from "react";
import { FiStar } from "react-icons/fi";
import { projectNames } from "src/constants/utils";
import { Project } from "src/models/types";
import {
  getProjectParsedName,
  getProjectTags,
  getTagIcon,
} from "src/modules/utils";

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
        <div className="overlay" />

        <img src={BANNER_PATH} alt="project banner" className="banner" />

        <img src={iconSrc} alt="project logo" className="logo" />
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
      </div>
    </div>
  );
};

export default SectionCard;
