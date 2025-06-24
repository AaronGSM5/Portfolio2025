export interface ProjectData {
  id: string
  title: string
  imageLink: string
  description: string
  month: string
  year: string
}

export interface RoadmapProps {
  projectData: ProjectData
}

export interface ProjectCardProps {
  id: string
  index: number
  title: string
  imageLink: string
  description: string
  month: string
  year: string
}

export interface ProjectDetail {
  coworkers: string[] | null
  link: string | null
  languages: string[]
  technologies: string[]
  longdescriptions: string[]
  images: string[]
}