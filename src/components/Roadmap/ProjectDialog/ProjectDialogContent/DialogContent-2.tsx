import type { FC } from "react";
import type { ProjectDialogContent } from "../../types";
import Image from "next/image";
import { Code, Star, ArrowRight } from "lucide-react";

import { DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

import { getIcon } from "./content";

const ProjectDialogBodyMagazine: FC<ProjectDialogContent> = ({
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
      <div className="relative">
        {images && images.length > 0 && (
          <div className="relative h-64 md:h-80 overflow-hidden">
            <Image
              src={images[0] || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <DialogTitle className="text-3xl md:text-4xl font-extrabold text-white mb-2 drop-shadow-lg">
                {title}
              </DialogTitle>
            </div>
          </div>
        )}

        {/* Floating Team Avatars */}
        {coworkers && coworkers.length > 0 && (
          <div className="absolute top-4 left-4 flex -space-x-2">
            {coworkers.slice(0, 3).map((coworker, index) => (
              <Avatar
                key={index}
                className="w-10 h-10 border-2 border-gray-500/50 shadow-lg"
              >
                <AvatarImage
                  src={`/placeholder.svg?height=40&width=40`}
                  alt={coworker}
                />
                <AvatarFallback className="bg-gradient-to-br from-gray-600 to-gray-700 text-white text-sm font-semibold">
                  {coworker
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()}
                </AvatarFallback>
              </Avatar>
            ))}
            {coworkers.length > 3 && (
              <div className="w-10 h-10 rounded-full bg-gray-800 border-2 border-gray-500/50 shadow-lg flex items-center justify-center">
                <span className="text-white text-xs font-semibold">
                  +{coworkers.length - 3}
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="p-6 space-y-8 flex-grow">
        {/* Magazine-style Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Article-style Description */}
            {longdescriptions && longdescriptions.length > 0 && (
              <div className="prose prose-invert prose-lg max-w-none">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full" />
                  <h2 className="text-2xl font-bold text-white m-0">
                    Project Story
                  </h2>
                </div>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  {longdescriptions.map((desc, index) => (
                    <p key={index} className="text-base">
                      {index === 0 && (
                        <span className="text-4xl font-bold text-white float-left mr-3 leading-none">
                          {desc.charAt(0)}
                        </span>
                      )}
                      {index === 0 ? desc.slice(1) : desc}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Image Gallery */}
            {images && images.length > 1 && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  Featured Shots
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {images.slice(1, 5).map((image, index) => (
                    <Card
                      key={index}
                      className="overflow-hidden group cursor-pointer bg-gray-800/50 border-gray-700 hover:border-gray-600 transition"
                    >
                      <div className="relative aspect-video">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${title} - Image ${index + 2}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tech Stack Card */}
            <Card className="bg-gray-800/50 border border-gray-700">
              <CardContent className="p-4">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 text-blue-400" />
                  Tech Stack
                </h3>
                <div className="space-y-4">
                  {languages && languages.length > 0 && (
                    <div>
                      <p className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">
                        Languages
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {languages.map((language, index) => {
                          const IconComponent = getIcon(language);
                          return (
                            <div
                              key={index}
                              className="flex items-center gap-2 px-3 py-1 border-transparent bg-blue-900/50 text-blue-300 rounded-md text-sm font-medium"
                            >
                              <IconComponent className="w-4 h-4" />
                              {language}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                  {technologies && technologies.length > 0 && (
                    <div>
                      <p className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">
                        Technologies
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {technologies.map((technology, index) => {
                          const IconComponent = getIcon(technology);
                          return (
                            <div
                              key={index}
                              className="flex items-center gap-2 px-3 py-1 border-green-800/80 bg-green-900/50 text-green-300 rounded-md text-sm font-medium"
                            >
                              <IconComponent className="w-4 h-4" />
                              {technology}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Team Card */}
            {coworkers && coworkers.length > 0 && (
              <Card className="bg-gray-800/50 border border-gray-700">
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-white mb-4">
                    Meet the Team
                  </h3>
                  <div className="space-y-3">
                    {coworkers.map((coworker, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700/60 transition-colors"
                      >
                        <Avatar className="w-10 h-10">
                          <AvatarImage
                            src={`/placeholder.svg?height=40&width=40`}
                            alt={coworker}
                          />
                          <AvatarFallback className="bg-gradient-to-br from-gray-600 to-gray-700 text-white font-semibold">
                            {coworker
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                              .toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-gray-200">
                            {coworker}
                          </p>
                          <p className="text-sm text-gray-400">Collaborator</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      <DialogFooter className="p-6 bg-gray-900/50 border-t border-gray-700">
        <div className="flex items-center justify-between w-full">
          <DialogClose asChild>
            <button
              type="button"
              className="px-6 py-2 rounded-lg bg-gray-700/80 hover:bg-gray-600/80 text-gray-200 font-medium transition-colors"
            >
              ← Back
            </button>
          </DialogClose>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium transition-all transform hover:scale-105"
            >
              Launch Project
              <ArrowRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </DialogFooter>
    </div>
  );
};

export default ProjectDialogBodyMagazine;

