import type { FC, ReactNode } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import type { ProjectCardProps, ProjectDetail } from "../types";
import { projectDetails } from "@/lib/content";
import ProjectDialogBody1 from "./ProjectDialogContent/DialogContent-1";
import ProjectDialogBody2 from "./ProjectDialogContent/DialogContent-2";
import ProjectDialogBody3 from "./ProjectDialogContent/DialogContent-3";

interface ProjectDialogProps extends ProjectCardProps {
  children: ReactNode;
}

const ProjectDialog: FC<ProjectDialogProps> = ({
  index,
  children,
  title,
  description,
  id,
}) => {
  const projectDetailData: ProjectDetail =
    projectDetails[id as keyof typeof projectDetails];

  const dialogBodies = [
    ProjectDialogBody1,
    ProjectDialogBody2,
    ProjectDialogBody3,
  ];

  const DialogBodyComponent = dialogBodies[index % dialogBodies.length];

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-2xl border border-gray-700 text-white rounded-xl shadow-2xl p-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-600 hover:[&::-webkit-scrollbar-thumb]:bg-gray-500">
        <DialogBodyComponent
          title={title}
          description={description}
          {...projectDetailData}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;

