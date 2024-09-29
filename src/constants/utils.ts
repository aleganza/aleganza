import { FaAndroid, FaApple, FaLinux, FaWindows } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { IoCubeOutline } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";
import { Project, ProjectData, TagIcons } from "src/models/types";

// static projects
export const works: Project[] = [
  {
    name: "pixel-dream-studios",
    description:
      "Developed a website for the Pixel Dream Studios modding team. The site showcases their story, features their custom wiki, and highlights the projects they've worked on. It's a way for them to share their journey and all the cool stuff they've created with the community.",
    icon: "https://static-cdn.jtvnw.net/jtv_user_pictures/98ff877a-7a9f-4615-b2c6-973c07ed84c8-profile_image-150x150.png",
    link: "https://pixeldreamstudios.net",
  },
];

export const repos: Project[] = [
  {
    name: "salta-ebbasta",
    description:
      "The first game for App Store and Play Store featuring over 50 artists from the Italian Rap scene.\n1st place in App Store ranking\n1st place in Play Store ranking",
    icon: "",
    link: "https://apps.apple.com/it/app/lil-run/id1493271518",
  },
];

export const workData: ProjectData[] = [
  {
    name: "pixel-dream-studios",
    nameParsed: "Pixel Dream Studios",
    tags: ["website"],
    skills: "vite,react,ts",
  },
];

// projects data
export const repoData: ProjectData[] = [
  {
    name: "Plenty-Of-Armors",
    nameParsed: "Plenty Of Armors",
    tags: ["minecraft", "fabric"],
    downloads: "1,700,000 +",
    skills: "java",
    customLink: "https://www.curseforge.com/minecraft/mc-mods/plenty-of-armors"
  },
  {
    name: "akuse",
    nameParsed: "akuse",
    tags: ["windows", "linux"],
    downloads: `110,000 +`,
    skills: "electron,react,ts",
  },
  {
    name: "Galilei-The-Game",
    nameParsed: "Galilei The Game",
    tags: ["windows", "macos", "linux"],
    skills: "unity",
  },
  {
    name: "salta-ebbasta",
    nameParsed: "Salta Ebbasta",
    tags: ["ios", "android"],
    downloads: `30,000 +`,
  },
];

export const tagIcons: TagIcons[] = [
  { tag: "website", icon: TfiWorld },
  { tag: "minecraft", icon: IoCubeOutline },
  { tag: "fabric", icon: FiSettings },
  { tag: "windows", icon: FaWindows },
  { tag: "linux", icon: FaLinux },
  { tag: "macos", icon: FaApple },
  { tag: "ios", icon: FaApple },
  { tag: "android", icon: FaAndroid },
];

export const projectNames: ProjectData[] = [...workData, ...repoData];
