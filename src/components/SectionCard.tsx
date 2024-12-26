import { FiDownload, FiExternalLink, FiStar } from "react-icons/fi";
import { projectNames } from "src/constants/utils";
import { Project } from "src/models/types";
import {
  getProjectCustomLink,
  getProjectDownloads,
  getProjectParsedName,
  getProjectSkills,
  getProjectTags,
  getProjectType,
  getTagColor,
  getTagIcon,
} from "src/modules/utils";

import ActionButton from "./buttons/ActionButton";

const SectionCard: React.FC<{ project: Project }> = ({ project }) => {
  // const ICON_PATH = `images/projects/icons/${project.name}.png`;
  const BANNER_PATH = `images/projects/banners/${project.name}.jpg`;

  // const [iconSrc, setIconSrc] = useState<string>(ICON_PATH);

  // useEffect(() => {
  //   const img = new Image();
  //   img.src = ICON_PATH;

  //   img.onload = () => {
  //     setIconSrc(ICON_PATH);
  //   };

  //   img.onerror = () => {
  //     setIconSrc(project.icon);
  //   };
  // }, [ICON_PATH, project.icon]);

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
              alt="project-stack"
            />
            {/* <img src={iconSrc} alt="project_logo" className="logo" /> */}
          </div>
        </div>

        <img src={BANNER_PATH} alt="project banner" className="banner" />
      </div>

      <div className="right">
        <div className="type">{getProjectType(projectNames, project.name)}</div>

        <h1 className="name">
          {getProjectParsedName(projectNames, project.name)}
        </h1>

        <div className="tags-group">
          {project.stargazers && (
            <span className="tag stargazers">
              <FiStar />
              {project.stargazers}
            </span>
          )}
          {getProjectDownloads(projectNames, project.name) && (
            <span className="tag downloads">
              {<FiDownload />}
              {getProjectDownloads(projectNames, project.name)}
            </span>
          )}
          {getProjectTags(projectNames, project.name)?.map((tag) => {
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

        <div className="link">
          <a
            href={
              getProjectCustomLink(projectNames, project.name) || project.link
            }
            className="no-underline"
            target="_blank"
          >
            <ActionButton text="view" iconRight={FiExternalLink} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SectionCard;
