import { IconType } from "react-icons";
import { tagIcons } from "src/constants/utils";
import { ProjectName } from "src/models/types";

export const getProjectParsedName = (
  projectNames: ProjectName[],
  name: string
): string | undefined => {
  const repo = projectNames.find((obj) => obj.name === name);
  return repo ? repo.nameParsed : undefined;
};

export const getProjectTags = (
  projectNames: ProjectName[],
  name: string
): Array<string> | undefined => {
  const repo = projectNames.find((obj) => obj.name === name);
  return repo ? repo.tags : undefined;
};

export const getTagIcon = (tag: string): IconType | undefined => {
  const tagIcon = tagIcons.find((obj) => obj.tag === tag);
  return tagIcon ? tagIcon.icon : undefined;
};
