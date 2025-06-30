import type { ReactNode } from 'react';

export interface ProjectCardProps {
  id: string;
  index: number;
  title: string;
  imageLink: string;
  description: string;
  month: string;
  year: string;
}

export interface ProjectDetail {
  coworkers: string[] | null;
  link: string | null;
  languages: string[];
  technologies: string[];
  longdescriptions: string[];
  images: string[];
}

export interface ProjectDialogContent extends ProjectDetail {
  title: string;
  description: string;
}

export interface ProjectDialogProps extends ProjectCardProps {
  children: ReactNode;
}
