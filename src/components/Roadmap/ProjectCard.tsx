'use client';

import { FC, useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ProjectCardProps } from './types';
import ProjectDialog from './ProjectDialog';

const ProjectCard: FC<ProjectCardProps> = (props) => {
  const { title, imageLink, description, month, year } = props;

  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const [coords, setCoords] = useState({ x: 0, y: 0 });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isHovering, setIsHovering] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '100px',
        threshold: 0
      }
    );

    const currentCardRef = cardRef.current;
    if (currentCardRef) {
      observer.observe(currentCardRef);
    }

    return () => {
      if (currentCardRef) {
        observer.unobserve(currentCardRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible || !buttonRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        setCoords({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const buttonElement = buttonRef.current;
    buttonElement.addEventListener('mousemove', handleMouseMove);
    buttonElement.addEventListener('mouseenter', handleMouseEnter);
    buttonElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      buttonElement.removeEventListener('mousemove', handleMouseMove);
      buttonElement.removeEventListener('mouseenter', handleMouseEnter);
      buttonElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  const gradientStyle = {
    background: `radial-gradient(circle at ${coords.x}px ${coords.y}px, var(--tw-gradient-stops))`,
    '--tw-gradient-from': 'rgba(30, 64, 175, 0.8)',
    '--tw-gradient-to': 'rgba(30, 41, 59, 0.8)',
    '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-to)'
  };

  return (
    <div ref={cardRef} className="col-span-1 p-4 md:p-8 min-h-[300px] flex w-full">
      {isVisible ? (
        <div
          className="rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out
                     border border-gray-700 overflow-hidden w-full max-w-sm sm:max-w-md lg:max-w-lg
                     flex flex-col bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-2xl animate-fade-in"
        >
          <div className="relative w-full h-48 sm:h-56 lg:h-64 bg-gray-700 overflow-hidden">
            <Image
              src={imageLink || '/placeholder.svg'}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute h-10 left-3 top-3 text-gray-400">
              {month} {year}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          <div className="p-5 sm:p-6 flex flex-col flex-grow">
            <h2 className="text-2xl sm:text-2xl font-extrabold mb-3 text-white text-center leading-tight">
              {title}
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 flex-grow line-clamp-4">
              {description}
            </p>
            <div id="goto-project-button" className="mt-auto pt-2">
              <ProjectDialog {...props}>
                <button
                  ref={buttonRef}
                  className="inline-flex items-center justify-center w-full px-5 py-2.5 text-base font-medium rounded-md
                             text-white
                             bg-opacity-75 backdrop-filter backdrop-blur-sm
                             transition duration-200 ease-in-out transform cursor-pointer hover:scale-101"
                  style={gradientStyle}
                >
                  View Details
                  <svg
                    className="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </ProjectDialog>
            </div>
          </div>
        </div>
      ) : (
        <div className="rounded-xl border border-gray-800 w-full max-w-sm sm:max-w-md lg:max-w-lg bg-gray-900/30 animate-pulse"></div>
      )}
    </div>
  );
};

export default ProjectCard;
