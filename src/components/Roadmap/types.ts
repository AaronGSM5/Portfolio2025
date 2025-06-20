export interface ProjectData {
  title: string
  imageLink: string
  link: string
  description: string
  month: string
  year: string
}

export interface RoadmapProps {
  projectData: ProjectData
}

export interface ProjectCardProps {
  title: string
  imageLink: string
  link: string
  description: string
}