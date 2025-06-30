'use client';

import { FC, useState, useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import { FlipWords } from '../ui/flip-words';
import { useMediaQuery } from '@/hooks/useMediaQuery';

import { projects as roadmapData } from '@/lib/content/index';

const Roadmap: FC = () => {
  const words = ['journey', 'voyage', 'experience', 'evolution', 'adventure'];
  const isMobile = useMediaQuery('(max-width: 767px)');

  const [lineHeight, setLineHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let debounceTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      // Clear the previous timeout to avoid multiple executions
      clearTimeout(debounceTimeout);

      // Set a new timeout to run the logic after a short delay (debouncing)
      debounceTimeout = setTimeout(() => {
        if (!containerRef.current) return;

        // Check if the user has scrolled to the very bottom of the page.
        // A small tolerance (e.g., 5 pixels) is added to handle rounding issues.
        const isAtBottom =
          window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 5;

        if (isAtBottom) {
          // If at the bottom, force the line to its maximum height to complete the animation.
          setLineHeight(containerRef.current.scrollHeight);
        } else {
          // If not at the bottom, calculate the height based on the scroll position.
          const rect = containerRef.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          // Use the center of the viewport as the focal point for the animation.
          const focalPoint = viewportHeight / 2;
          const newHeight = focalPoint - rect.top;
          const maxLineHeight = containerRef.current.scrollHeight;

          // Ensure the calculated height is within the valid range (0 to maxLineHeight).
          const clampedHeight = Math.max(0, Math.min(newHeight, maxLineHeight));
          setLineHeight(clampedHeight);
        }
      }, 10); // Reduced debounce time for a snappier feel.
    };

    // Add the scroll event listener when the component mounts.
    window.addEventListener('scroll', handleScroll);
    // Run the function once on load to set the initial state correctly.
    handleScroll();

    // Clean up the event listener and timeout when the component unmounts.
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(debounceTimeout);
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-transparent text-white">
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

        <div ref={containerRef} className="relative w-full max-w-5xl mx-auto px-4">
          {/* Responsive Timeline Lines */}
          <div
            className={`absolute top-8 h-[calc(100%-2rem)] w-1 bg-gray-800 ${isMobile ? 'left-6' : 'left-1/2 -translate-x-1/2'}`}
          ></div>
          <div
            className={`absolute top-8 w-1 bg-gradient-to-b from-blue-400 to-slate-500 transition-[height] duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] shadow-blue-700 ${isMobile ? 'left-6' : 'left-1/2 -translate-x-1/2'}`}
            style={{ height: `${lineHeight}px` }}
          ></div>

          {/* This container's padding changes for mobile to make space for the left-aligned timeline */}
          <div className={`relative flex flex-col gap-y-24 ${isMobile ? 'pl-12' : ''}`}>
            {roadmapData.map((project, index) => {
              const isLeftAligned = index % 2 === 0;
              const isDotActive = dotRefs.current[index]
                ? dotRefs.current[index]!.offsetTop < lineHeight
                : false;
              return (
                <div
                  key={index}
                  className={`flex items-center w-full ${!isMobile && (isLeftAligned ? 'justify-start' : 'justify-end')}`}
                >
                  {/* On desktop, content is in a w-1/2 div. On mobile, it's full-width. */}
                  <div className={!isMobile ? 'w-1/2 px-4' : 'w-full'}>
                    <div className={`relative ${isMobile ? 'text-left' : 'text-center'}`}>
                      <div className="inline-block">
                        <ProjectCard
                          index={index}
                          id={project.id}
                          title={project.title}
                          imageLink={project.imageLink}
                          description={project.description}
                          month={project.month}
                          year={project.year}
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    ref={(el) => {
                      dotRefs.current[index] = el;
                    }}
                    className={`absolute w-4 h-4 rounded-full border-4 z-10 transition-colors duration-500 ${isMobile ? 'left-2.5 -translate-x-1/2' : 'left-1/2 -translate-x-1/2'} ${isDotActive ? 'bg-blue-400 border-sky-300' : 'bg-gray-700 border-slate-950'}`}
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
