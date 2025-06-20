"use client";

import { FC, useState, useEffect, useRef } from "react";
import roadmapData from "./roadmap.data.json";
import ProjectCard from "./ProjectCard";
import { FlipWords } from "../ui/flip-words";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export interface RoadmapProject {
  title: string;
  description: string;
  imageLink: string;
  link: string;
  month?: string;
  year?: string;
}

const Roadmap: FC = () => {
  const words = ["journey", "voyage", "experience", "evolution", "adventure"];
  const isMobile = useMediaQuery("(max-width: 767px)");

  const [lineHeight, setLineHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let debounceTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const focalPoint = viewportHeight / 2;
        const newHeight = focalPoint - rect.top;
        const maxLineHeight = containerRef.current.scrollHeight;
        const clampedHeight = Math.max(0, Math.min(newHeight, maxLineHeight));
        setLineHeight(clampedHeight);
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(debounceTimeout);
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-slate-950 to-gray-950 text-white">
      <div className="relative z-10 py-16">
        <div className="text-left mb-24 ml-8 mr-8">
          <h1 className="flex flex-col text-center w-full text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            <div className="text-gray-300">What an incredible</div>
            <div className="flex justify-center">
              <FlipWords words={words} className="text-white" />
            </div>
          </h1>
          <p className="text-center mt-10 text-xl sm:text-2xl md:text-3xl font-medium text-gray-400">
            A chronological showcase of my projects and their development.
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative w-full max-w-5xl mx-auto px-4"
        >
          {/* Responsive Timeline Lines */}
          <div
            className={`absolute top-8 h-[calc(100%-2rem)] w-1 bg-gray-800 ${isMobile ? "left-6" : "left-1/2 -translate-x-1/2"}`}
          ></div>
          <div
            className={`absolute top-8 w-1 bg-gradient-to-b from-blue-400 to-slate-500 transition-[height] duration-800 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${isMobile ? "left-6" : "left-1/2 -translate-x-1/2"}`}
            style={{ height: `${lineHeight}px` }}
          ></div>

          {/* This container's padding changes for mobile to make space for the left-aligned timeline */}
          <div
            className={`relative flex flex-col gap-y-24 ${isMobile ? "pl-12" : ""}`}
          >
            {roadmapData.map((project: RoadmapProject, index: number) => {
              const isLeftAligned = index % 2 === 0;
              const isDotActive = dotRefs.current[index]
                ? dotRefs.current[index]!.offsetTop < lineHeight
                : false;
              return (
                <div
                  key={index}
                  className={`flex items-center w-full ${!isMobile && (isLeftAligned ? "justify-start" : "justify-end")}`}
                >
                  {/* On desktop, content is in a w-1/2 div. On mobile, it's full-width. */}
                  <div className={!isMobile ? "w-1/2 px-4" : "w-full"}>
                    <div
                      className={`relative ${!isMobile && (isLeftAligned ? "text-right" : "text-left")}`}
                    >
                      <div className="inline-block">
                        <ProjectCard
                          title={project.title}
                          imageLink={project.imageLink}
                          link={project.link}
                          description={project.description}
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    ref={(el) => (dotRefs.current[index] = el)}
                    className={`absolute w-4 h-4 rounded-full border-4 z-10 transition-colors duration-500 ${isMobile ? "left-2.5 -translate-x-1/2" : "left-1/2 -translate-x-1/2"} ${isDotActive ? "bg-blue-400 border-sky-300" : "bg-gray-700 border-slate-950"}`}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;

