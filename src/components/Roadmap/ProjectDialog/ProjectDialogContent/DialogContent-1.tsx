import type { FC } from 'react';
import type { ProjectDialogContent } from '../../types';

import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

import { DialogHeader, DialogTitle, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

import { getIcon } from './content';

const ProjectDialogBody: FC<ProjectDialogContent> = ({
  title,
  coworkers,
  longdescriptions,
  link,
  languages,
  technologies,
  images
}) => {
  return (
    <>
      <DialogHeader className="space-y-4 p-6">
        {/* Coworkers Section */}
        {coworkers && coworkers.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
              Team Collaborators
            </h3>
            <div className="flex flex-wrap gap-3">
              {coworkers.map((coworker, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-gray-700/50 rounded-full px-3 py-1"
                >
                  <Avatar className="w-6 h-6">
                    <AvatarImage src={`/placeholder.svg?height=24&width=24`} alt={coworker} />
                    <AvatarFallback className="text-xs bg-gray-600 text-gray-300">
                      {coworker
                        .split(' ')
                        .map((n) => n[0])
                        .join('')
                        .toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium text-gray-200">{coworker}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div>
          <DialogTitle className="text-3xl font-extrabold text-white leading-tight">
            {title}
          </DialogTitle>
        </div>
      </DialogHeader>

      <div className="space-y-8 px-6 pb-6">
        {/* Image Carousel */}
        {images && images.length > 0 && (
          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden bg-gray-800">
                      <Image
                        src={image || '/placeholder.svg'}
                        alt={`${title} - Image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {images.length > 1 && (
                <>
                  <CarouselPrevious className="left-2 bg-gray-800/50 hover:bg-gray-700/80 border-gray-600 text-white" />
                  <CarouselNext className="right-2 bg-gray-800/50 hover:bg-gray-700/80 border-gray-600 text-white" />
                </>
              )}
            </Carousel>
          </div>
        )}

        {/* Long Descriptions */}
        {longdescriptions && longdescriptions.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Project Details</h3>
            <div className="space-y-4 prose prose-invert prose-sm sm:prose-base max-w-none text-gray-300">
              {longdescriptions.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
            </div>
          </div>
        )}

        {/* Languages and Technologies */}
        <div className="space-y-6">
          {languages && languages.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {languages.map((language, index) => {
                  const IconComponent = getIcon(language);
                  return (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="flex items-center gap-2 px-3 py-1 border-transparent bg-blue-900/50 text-blue-300 hover:bg-blue-800/50 cursor-default"
                    >
                      <IconComponent className="w-4 h-4" />
                      <span className="font-medium">{language}</span>
                    </Badge>
                  );
                })}
              </div>
            </div>
          )}

          {technologies && technologies.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((technology, index) => {
                  const IconComponent = getIcon(technology);
                  return (
                    <Badge
                      key={index}
                      variant="outline"
                      className="flex items-center gap-2 px-3 py-1 border-green-800/80 bg-green-900/50 text-green-300 hover:bg-green-800/50 cursor-default"
                    >
                      <IconComponent className="w-4 h-4" />
                      <span className="font-medium">{technology}</span>
                    </Badge>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      <DialogFooter className="flex flex-col sm:flex-row gap-3 p-6 bg-gray-900/50 border-t border-gray-700">
        <DialogClose asChild>
          <button
            type="button"
            className="w-full sm:w-auto px-6 py-2 rounded-lg bg-gray-700/80 hover:bg-gray-600/80 text-gray-200 font-medium transition-colors"
          >
            Close
          </button>
        </DialogClose>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium transition-all transform"
          >
            <ExternalLink className="w-4 h-4" />
            Visit Project
          </a>
        )}
      </DialogFooter>
    </>
  );
};

export default ProjectDialogBody;
