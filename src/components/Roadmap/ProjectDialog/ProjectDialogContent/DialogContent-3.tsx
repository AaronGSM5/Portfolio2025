import type { FC } from "react";
import type { ProjectDialogContent } from "../../types";

import Image from "next/image";
import { Code, ExternalLink, Users, Lightbulb, ImageIcon } from "lucide-react";
import {
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { getIcon } from "./content";

const ProjectDialogBodyMinimal: FC<ProjectDialogContent> = ({
  title,
  coworkers,
  longdescriptions,
  link,
  languages,
  technologies,
  images,
}) => {
  return (
    <div className="flex flex-col h-full">
      <DialogHeader className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <DialogTitle className="text-3xl font-extrabold text-white leading-tight">
              {title}
            </DialogTitle>
          </div>
        </div>
      </DialogHeader>

      <div className="px-6 pb-6 space-y-6 flex-grow">
        {/* Featured Image Carousel - More Prominent */}
        {images && images.length > 0 && (
          <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
            <div className="flex items-center gap-2 mb-4">
              <ImageIcon className="w-5 h-5 text-purple-400" />
              <h3 className="text-lg font-semibold text-white">
                Project Showcase
              </h3>
              <span className="text-sm text-gray-400">
                ({images.length} images)
              </span>
            </div>
            <Carousel className="w-full">
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden bg-gray-900">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${title} - Image ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                        {index + 1} / {images.length}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {images.length > 1 && (
                <>
                  <CarouselPrevious className="left-2 bg-gray-800/80 hover:bg-gray-700/80 border-gray-600 text-white" />
                  <CarouselNext className="right-2 bg-gray-800/80 hover:bg-gray-700/80 border-gray-600 text-white" />
                </>
              )}
            </Carousel>
            {images.length > 1 && (
              <div className="flex justify-center mt-3 gap-1">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className="w-2 h-2 rounded-full bg-gray-600"
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Team Section */}
            {coworkers && coworkers.length > 0 && (
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-blue-400" />
                  <h3 className="text-lg font-semibold text-white">Team</h3>
                </div>
                <div className="space-y-3">
                  {coworkers.map((coworker, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarImage
                          src={`/placeholder.svg?height=32&width=32`}
                          alt={coworker}
                        />
                        <AvatarFallback className="text-xs bg-gray-600 text-gray-300">
                          {coworker
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium text-gray-200">
                        {coworker}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div className="flex items-center gap-2 mb-4">
                <Code className="w-5 h-5 text-green-400" />
                <h3 className="text-lg font-semibold text-white">Tech Stack</h3>
              </div>
              <div className="space-y-4">
                {languages && languages.length > 0 && (
                  <div>
                    <p className="text-sm font-medium text-gray-400 mb-2">
                      Languages
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {languages.map((language, index) => {
                        const IconComponent = getIcon(language);
                        return (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs border-transparent bg-blue-900/50 text-blue-300 hover:bg-blue-800/50 cursor-default"
                          >
                            <IconComponent className="w-3 h-3 mr-1" />
                            {language}
                          </Badge>
                        );
                      })}
                    </div>
                  </div>
                )}
                {technologies && technologies.length > 0 && (
                  <div>
                    <p className="text-sm font-medium text-gray-400 mb-2">
                      Technologies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((technology, index) => {
                        const IconComponent = getIcon(technology);
                        return (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs border-green-800/80 bg-green-900/50 text-green-300 hover:bg-green-800/50 cursor-default"
                          >
                            <IconComponent className="w-3 h-3 mr-1" />
                            {technology}
                          </Badge>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Project Details */}
            {longdescriptions && longdescriptions.length > 0 && (
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb className="w-5 h-5 text-amber-400" />
                  <h3 className="text-lg font-semibold text-white">About</h3>
                </div>
                <div className="space-y-3 text-sm text-gray-300 leading-relaxed prose prose-sm prose-invert max-w-none">
                  {longdescriptions.map((desc, index) => (
                    <p key={index}>{desc}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Image Thumbnails Grid - Additional Images */}
        {images && images.length > 3 && (
          <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
            <h3 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
              Additional Screenshots
            </h3>
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
              {images.slice(0, 8).map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square rounded overflow-hidden group cursor-pointer bg-gray-900"
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${title} - Thumbnail ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>
              ))}
              {images.length > 8 && (
                <div className="relative aspect-square rounded overflow-hidden bg-gray-800 flex items-center justify-center">
                  <span className="text-xs text-gray-400 font-medium">
                    +{images.length - 8}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <DialogFooter className="p-6 bg-gray-900/50 border-t border-gray-700">
        <div className="flex items-center justify-between w-full">
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
              View Project
            </a>
          )}
        </div>
      </DialogFooter>
    </div>
  );
};

export default ProjectDialogBodyMinimal;

