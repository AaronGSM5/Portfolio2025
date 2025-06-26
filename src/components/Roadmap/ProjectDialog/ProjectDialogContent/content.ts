import ProjectDialogBody1 from "./DialogContent-1";
import ProjectDialogBody2 from "./DialogContent-2";
import ProjectDialogBody3 from "./DialogContent-3";

import {
  Code,
  Database,
  Smartphone,
  Monitor,
  Cloud,
  Zap,
  Palette,
  Settings,
  FileCode,
  Layers,
} from "lucide-react";

export const dialogBodies = [
  ProjectDialogBody1,
  ProjectDialogBody2,
  ProjectDialogBody3,
];

export const getIcon = (name: string) => {
  const iconMap: {
    [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  } = {
    // Languages
    javascript: Code,
    typescript: Code,
    python: Code,
    java: Code,
    cpp: Code,
    "c++": Code,
    html: FileCode,
    css: Palette,
    sql: Database,
    php: Code,
    ruby: Code,
    go: Code,
    rust: Code,
    swift: Smartphone,
    kotlin: Smartphone,

    // Technologies/Frameworks
    react: Layers,
    nextjs: Monitor,
    "next.js": Monitor,
    vue: Layers,
    angular: Layers,
    nodejs: Settings,
    "node.js": Settings,
    express: Settings,
    django: Settings,
    flask: Settings,
    mongodb: Database,
    postgresql: Database,
    mysql: Database,
    redis: Database,
    docker: Cloud,
    kubernetes: Cloud,
    aws: Cloud,
    azure: Cloud,
    gcp: Cloud,
    firebase: Cloud,
    tailwind: Palette,
    bootstrap: Palette,
    sass: Palette,
    webpack: Settings,
    vite: Zap,
    git: Code,
    github: Code,
    gitlab: Code,
    figma: Palette,
    photoshop: Palette,
  };

  const key = name.toLowerCase().replace(/\s+/g, "");
  return iconMap[key] || Code;
};