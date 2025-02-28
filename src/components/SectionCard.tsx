import { FiDownload, FiExternalLink, FiStar, FiTool } from "react-icons/fi";
import { projectNames } from "src/constants/utils";
import { Project } from "src/models/types";
import {
  getProjectCustomLink,
  getProjectDownloads,
  getProjectIsWip,
  getProjectParsedName,
  getProjectSkills,
  getProjectTags,
  getProjectType,
  getTagColor,
  getTagIcon,
} from "src/modules/utils";

import ActionButton from "./buttons/ActionButton";

const SectionCard: React.FC<{ project: Project }> = ({ project }) => {
  const BANNER_PATH = `images/projects/banners/${project.name}.jpg`;

  const projectSkills = getProjectSkills(projectNames, project.name);
  const projectType = getProjectType(projectNames, project.name);
  const projectParsedName = getProjectParsedName(projectNames, project.name);
  const projectIsWip = getProjectIsWip(projectNames, project.name);
  const projectDownloads = getProjectDownloads(projectNames, project.name);
  const projectTags = getProjectTags(projectNames, project.name);
  const projectCustomLink = getProjectCustomLink(projectNames, project.name);

  return (
    <div className="card">
      <div className="left">
        <div className="overlay">
          <div className="icons">
            <img
              src={`https://skillicons.dev/icons?i=${projectSkills}`}
              alt="project-stack"
            />
          </div>
        </div>

        <img src={BANNER_PATH} alt="project banner" className="banner" />
      </div>

      <div className="right">
        <div className="type">{projectType}</div>

        <h1 className="name">{projectParsedName}</h1>

        <div className="tags-group">
          {projectIsWip && (
            <span className="tag wip">
              <FiTool />
              WIP
            </span>
          )}
          {project.stargazers && (
            <span className="tag stargazers">
              <FiStar />
              {project.stargazers}
            </span>
          )}
          {projectDownloads && (
            <span className="tag downloads">
              <FiDownload />
              {projectDownloads}
            </span>
          )}
          {projectTags?.map((tag) => {
            const TagIcon = getTagIcon(tag);
            return (
              <span
                className="tag"
                key={tag}
                style={{ color: getTagColor(tag) }}
              >
                {TagIcon && <TagIcon className="tag-icon" />}
                {tag}
              </span>
            );
          })}
        </div>

        <div className="description">{project.description}</div>

        {!projectIsWip && (
          <div className="link">
            <a
              href={projectCustomLink || project.link}
              className="no-underline"
              target="_blank"
            >
              <ActionButton text="view" iconRight={FiExternalLink} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionCard;
