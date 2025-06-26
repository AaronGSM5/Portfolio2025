import type { FC } from "react";

const ProjectSpotlight: FC = () => {
  return (
    <div className="relative min-h-screen bg-transparent overflow-hidden flex flex-col items-center justify-center p-8">
      {/* Main Spotlight Effect - Positioned from Above */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[600px] bg-gradient-radial from-white/30 via-blue-300/20 via-purple-300/15 to-transparent opacity-80 blur-3xl animate-pulse"></div>

      {/* Secondary Spotlight Layers for Depth */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[600px] h-[400px] bg-gradient-radial from-yellow-200/25 via-blue-400/15 to-transparent opacity-60 blur-2xl"></div>

      {/* Ambient Light Rays */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-40 bg-gradient-to-b from-white/40 to-transparent blur-sm"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-x-20 w-1 h-32 bg-gradient-to-b from-blue-300/30 to-transparent blur-sm rotate-12"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-x-20 w-1 h-32 bg-gradient-to-b from-purple-300/30 to-transparent blur-sm -rotate-12"></div>

      {/* Title with Spotlight Effect */}
      <div className="relative z-20 mb-16">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-200 to-purple-200 tracking-wider drop-shadow-2xl">
          Project Spotlight
        </h1>
        <div className="absolute inset-0 text-5xl font-bold text-white/10 blur-sm">
          Project Spotlight
        </div>
      </div>

      {/* Cards Container */}
      <div className="relative z-10 flex gap-8">
        {/* Card 1 - Blue Theme */}
        <div className="group relative">
          {/* Card Spotlight Aura */}
          <div className="absolute -inset-8 bg-gradient-radial from-blue-400/40 via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>

          <div className="relative w-64 h-40 bg-gradient-to-br from-gray-800/90 via-blue-900/50 to-gray-900/90 backdrop-blur-sm rounded-xl border border-gray-600/50 group-hover:border-blue-400/80 transition-all duration-300 cursor-pointer overflow-hidden shadow-2xl">
            {/* Card Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-blue-600/10 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Hover Border Shine Effect */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 rounded-xl border-2 border-blue-400 shadow-lg shadow-blue-400/50 animate-pulse"></div>
              <div className="absolute -inset-1 rounded-xl border border-blue-300/50 blur-sm"></div>
            </div>

            {/* Card Content */}
            <div className="relative z-10 p-6 h-full flex flex-col justify-center items-center text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mb-4 shadow-lg shadow-blue-500/50 group-hover:shadow-blue-400/70 transition-shadow duration-300"></div>
              <h3 className="text-white text-lg font-semibold mb-2">
                Neural Network
              </h3>
              <p className="text-gray-300 text-sm opacity-80">
                AI-powered solution
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 - Purple Theme */}
        <div className="group relative">
          {/* Card Spotlight Aura */}
          <div className="absolute -inset-8 bg-gradient-radial from-purple-400/40 via-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>

          <div className="relative w-64 h-40 bg-gradient-to-br from-gray-800/90 via-purple-900/50 to-gray-900/90 backdrop-blur-sm rounded-xl border border-gray-600/50 group-hover:border-purple-400/80 transition-all duration-300 cursor-pointer overflow-hidden shadow-2xl">
            {/* Card Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-purple-600/10 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Hover Border Shine Effect */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 rounded-xl border-2 border-purple-400 shadow-lg shadow-purple-400/50 animate-pulse"></div>
              <div className="absolute -inset-1 rounded-xl border border-purple-300/50 blur-sm"></div>
            </div>

            {/* Card Content */}
            <div className="relative z-10 p-6 h-full flex flex-col justify-center items-center text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mb-4 shadow-lg shadow-purple-500/50 group-hover:shadow-purple-400/70 transition-shadow duration-300"></div>
              <h3 className="text-white text-lg font-semibold mb-2">
                Quantum Engine
              </h3>
              <p className="text-gray-300 text-sm opacity-80">
                Next-gen computing
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 - Green Theme */}
        <div className="group relative">
          {/* Card Spotlight Aura */}
          <div className="absolute -inset-8 bg-gradient-radial from-green-400/40 via-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>

          <div className="relative w-64 h-40 bg-gradient-to-br from-gray-800/90 via-green-900/50 to-gray-900/90 backdrop-blur-sm rounded-xl border border-gray-600/50 group-hover:border-green-400/80 transition-all duration-300 cursor-pointer overflow-hidden shadow-2xl">
            {/* Card Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-green-600/10 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Hover Border Shine Effect */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 rounded-xl border-2 border-green-400 shadow-lg shadow-green-400/50 animate-pulse"></div>
              <div className="absolute -inset-1 rounded-xl border border-green-300/50 blur-sm"></div>
            </div>

            {/* Card Content */}
            <div className="relative z-10 p-6 h-full flex flex-col justify-center items-center text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full mb-4 shadow-lg shadow-green-500/50 group-hover:shadow-green-400/70 transition-shadow duration-300"></div>
              <h3 className="text-white text-lg font-semibold mb-2">
                Bio Synthesis
              </h3>
              <p className="text-gray-300 text-sm opacity-80">
                Organic innovation
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floor Reflection Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/5 to-transparent opacity-30"></div>
    </div>
  );
};

export default ProjectSpotlight;

