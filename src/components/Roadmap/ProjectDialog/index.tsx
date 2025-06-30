import type { FC } from 'react';
import type { ProjectDialogProps } from '../types';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { projectDetails } from '@/lib/content';
import { dialogBodies } from './ProjectDialogContent/content';

const ProjectDialog: FC<ProjectDialogProps> = ({ index, children, title, description, id }) => {
  const projectDetailData = projectDetails[id as keyof typeof projectDetails];

  const DialogBodyComponent = dialogBodies[index % dialogBodies.length];

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-2xl sm:max-w-4xl max-h-[90vh] overflow-y-auto  border border-gray-700 text-white rounded-xl shadow-2xl p-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-600 hover:[&::-webkit-scrollbar-thumb]:bg-gray-500">
        <DialogBodyComponent title={title} description={description} {...projectDetailData} />
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;
