import { FaWindows, FaLinux, FaApple } from "react-icons/fa";
import { FiLoader } from "react-icons/fi";
import { IoCubeOutline } from "react-icons/io5";
import { SiMinecraft } from "react-icons/si";
import { TbBrandMinecraft } from "react-icons/tb";
import { ProjectName, TagIcons } from "src/models/types";

export const workNames: ProjectName[] = [];

export const repoNames: ProjectName[] = [
  {
    name: "Plenty-Of-Armors",
    nameParsed: "Plenty Of Armors",
    tags: ["minecraft", "fabric"],
  },
  { name: "akuse", nameParsed: "akuse", tags: ["windows", "linux"] },
  {
    name: "Galilei-The-Game",
    nameParsed: "Galilei The Game",
    tags: ["windows", "macos", "linux"],
  },
];

export const tagIcons: TagIcons[] = [
  { tag: "minecraft", icon: SiMinecraft },
  { tag: "fabric", icon: IoCubeOutline },
  { tag: "windows", icon: FaWindows },
  { tag: "linux", icon: FaLinux },
  { tag: "macos", icon: FaApple },
];

export const projectNames: ProjectName[] = [...workNames, ...repoNames];
