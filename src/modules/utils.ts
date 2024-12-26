import { IconType } from "react-icons";
import { tagIcons } from "src/constants/utils";
import { ProjectData } from "src/models/types";

export const getProjectParsedName = (
  projectNames: ProjectData[],
  name: string
): string | undefined => {
  const repo = projectNames.find((obj) => obj.name === name);
  return repo ? repo.nameParsed : undefined;
};

export const getProjectType = (
  projectNames: ProjectData[],
  name: string
): string | undefined => {
  const repo = projectNames.find((obj) => obj.name === name);
  return repo ? repo.type : undefined;
};

export const getProjectTags = (
  projectNames: ProjectData[],
  name: string
): Array<string> | undefined => {
  const repo = projectNames.find((obj) => obj.name === name);
  return repo ? repo.tags : undefined;
};

export const getProjectDownloads = (
  projectNames: ProjectData[],
  name: string
): string | undefined => {
  const repo = projectNames.find((obj) => obj.name === name);
  return repo?.downloads ? repo.downloads : undefined;
};

export const getProjectSkills = (
  projectNames: ProjectData[],
  name: string
): string | undefined => {
  const repo = projectNames.find((obj) => obj.name === name);
  return repo ? repo.skills : undefined;
};

export const getProjectCustomLink = (
  projectNames: ProjectData[],
  name: string
): string | undefined => {
  const repo = projectNames.find((obj) => obj.name === name);
  return repo?.customLink ? repo.customLink : undefined;
};

export const getTagIcon = (tag: string): IconType | undefined => {
  const tagIcon = tagIcons.find((obj) => obj.tag === tag);
  return tagIcon ? tagIcon.icon : undefined;
};

export const getTagColor = (tag: string): string | undefined => {
  const tagIcon = tagIcons.find((obj) => obj.tag === tag);
  return tagIcon ? tagIcon.color : undefined;
};
