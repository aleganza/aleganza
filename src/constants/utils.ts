import { CiDesktopMouse1 } from "react-icons/ci";
import { FaAndroid, FaApple, FaLinux, FaWindows } from "react-icons/fa";
import { FiSettings, FiSmartphone } from "react-icons/fi";
import { IoCubeOutline } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";
import { Project, ProjectData, TagIcons } from "src/models/types";

// static projects
export const web: Project[] = [
  {
    name: "pixel-dream-studios",
    description:
      "Developed a website for the Pixel Dream Studios modding team. The site showcases their story, features their custom wiki, and highlights the projects they've worked on. It's a way for them to share their journey and all the cool stuff they've created with the community.",
    icon: "https://static-cdn.jtvnw.net/jtv_user_pictures/98ff877a-7a9f-4615-b2c6-973c07ed84c8-profile_image-150x150.png",
    link: "https://pixeldreamstudios.net",
  },
  {
    name: "lc-training-center",
    description:
      "Developed an app for the LC Training Center gym to manage member bookings more efficiently. It simplifies the process, making it easier for users to reserve classes and for staff to organize schedules, improving both the gym's operations and the user experience.",
    icon: "",
    link: "https://apps.apple.com/it/app/lc-training-center/id6499268268",
  },
  {
    name: "zanini-piscine",
    description:
      "Developed an app for Zanini Piscine to simplify booking pool opening, closing, and maintenance services. It streamlines scheduling for homeowners and helps Zanini Piscine efficiently manage their service calendar, improving both operations and customer experience.",
    icon: "",
    link: "#",
  },
];

export const gamedev: Project[] = [
  {
    name: "salta-ebbasta",
    description:
      "The first game for App Store and Play Store featuring over 50 artists from the Italian Rap scene.\n1st place in App Store ranking\n1st place in Play Store ranking",
    icon: "",
    link: "https://apps.apple.com/it/app/lil-run/id1493271518",
  },
];

export const webData: ProjectData[] = [
  {
    name: "akuse",
    type: "personal",
    color: "#fe526e",
    darkColor: "#140709",
    nameParsed: "akuse",
    tags: ["desktop", "windows", "linux"],
    downloads: `300,000 +`,
    skills: "electron,react,ts",
  },
  {
    name: "lc-training-center",
    type: "paid",
    color: "#E53935",
    darkColor: "#1a0606",
    nameParsed: "LC Training Center",
    tags: ["app", "ios", "android"],
    skills: "firebase,react,ts",
  },
  {
    name: "zanini-piscine",
    type: "paid",
    color: "#0091e5",
    darkColor: "#000d14",
    wip: true,
    nameParsed: "Zanini Piscine",
    tags: ["app", "ios", "android"],
    skills: "firebase,react,ts",
  },
  {
    name: "pixel-dream-studios",
    type: "paid",
    color: "#f12b79",
    darkColor: "#120c2e",
    nameParsed: "Pixel Dream Studios",
    tags: ["website"],
    skills: "vite,react,ts",
  },
];

// projects data
export const gamedevData: ProjectData[] = [
  {
    name: "Plenty-Of-Armors",
    type: "personal",
    color: "#00b7d3",
    darkColor: "#00181c",
    nameParsed: "Plenty Of Armors",
    tags: ["minecraft", "fabric"],
    downloads: "2,000,000 +",
    skills: "java",
    customLink: "https://www.curseforge.com/minecraft/mc-mods/plenty-of-armors",
  },
  {
    name: "Galilei-The-Game",
    type: "academic",
    color: "#56a862",
    darkColor: "#0c170d",
    nameParsed: "Galilei: The Game",
    tags: ["windows", "macos", "linux"],
    skills: "unity",
  },
  {
    name: "salta-ebbasta",
    type: "personal",
    color: "#84b788",
    darkColor: "#0b1526",
    nameParsed: "Salta Ebbasta",
    tags: ["ios", "android"],
    downloads: `30,000 +`,
  },
];

export const tagIcons: TagIcons[] = [
  { tag: "app", icon: FiSmartphone, color: "#dbb69b" },
  { tag: "website", icon: TfiWorld, color: "#959eef" },
  { tag: "desktop", icon: CiDesktopMouse1, color: "#c796f9" },
  { tag: "minecraft", icon: IoCubeOutline },
  { tag: "fabric", icon: FiSettings },
  { tag: "windows", icon: FaWindows },
  { tag: "linux", icon: FaLinux },
  { tag: "macos", icon: FaApple },
  { tag: "ios", icon: FaApple },
  { tag: "android", icon: FaAndroid },
];

export const projectNames: ProjectData[] = [...webData, ...gamedevData];
