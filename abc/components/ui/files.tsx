"use client";

import { useState, useRef } from "react";
import { projectsData } from "@/data";
import Image from "next/image";
import clsx from "clsx";
import { FaLocationArrow, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Draggable card components (you'll need to implement these or use your existing ones)
const DraggableCardContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={clsx("relative", className)}>{children}</div>
);

const DraggableCardBody = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={clsx("cursor-grab active:cursor-grabbing transition-transform duration-200", className)}>
    {children}
  </div>
);

export default function ProjectsDrawer() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    const container = scrollContainerRef.current;
    if (container) {
      const card = container.children[index] as HTMLElement;
      if (card) {
        const scrollLeft = card.offsetLeft - container.offsetLeft - 20;
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  };

  const nextProject = () => {
    const next = (currentIndex + 1) % projectsData.length;
    setCurrentIndex(next);
    scrollToIndex(next);
  };

  const prevProject = () => {
    const prev = currentIndex - 1 < 0 ? projectsData.length - 1 : currentIndex - 1;
    setCurrentIndex(prev);
    scrollToIndex(prev);
  };

  // Generate random rotations and positions for the draggable layout
  const getRandomRotation = (index: number) => {
    const rotations = [-5, -3, 2, 4, -2, 3, -4, 5, -1, 1];
    return rotations[index % rotations.length];
  };

  const getCardPosition = (index: number, total: number) => {
    if (total <= 3) {
      // For few cards, spread them out
      const positions = [
        "top-10 left-[15%]",
        "top-40 left-[60%]", 
        "top-20 right-[10%]",
        "top-32 left-[40%]"
      ];
      return positions[index % positions.length];
    }
    
    // For more cards, create a scattered layout
    const topPositions = [10, 20, 40, 60, 30, 50, 15, 45];
    const leftPositions = [10, 25, 40, 60, 75, 30, 55, 20];
    return `top-${topPositions[index % topPositions.length]} left-[${leftPositions[index % leftPositions.length]}%]`;
  };

  return (
    <div className="relative w-full left-0 right-0 px-4 sm:px-6 lg:px-10 z-50 overflow-hidden">
      
      {/* Large text above the modal */}
      <div className="absolute top-[-0.5rem] sm:top-[-1rem] lg:top-[-1.5cm] left-0 w-full text-center z-10">
        <h1 className="text-3xl sm:text-4xl lg:text-[8rem] font-extrabold mt-4 lg:mt-8 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          Projects
        </h1>
      </div>

      {/* Main container */}
      <div
        className="w-full flex flex-col lg:flex-row px-3 sm:px-4 py-4 lg:py-2 gap-4 lg:gap-8 items-stretch min-h-[60vh] lg:h-[80vh] relative z-10 rounded-2xl bg-neutral-900/70 backdrop-blur-sm"
        style={{
          marginTop: '2.5rem',
          boxShadow: `
            0 0 60px rgba(88, 28, 135, 0.3),
            0 20px 40px rgba(0, 0, 0, 0.4), 
            inset 0 1px 0 rgba(255, 255, 255, 0.1)
          `,
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >

        {/* Description card */}
        <div 
          className="w-full lg:flex-shrink-0 h-auto lg:h-full text-white p-4 sm:p-6 lg:w-[240px] flex flex-col justify-start lg:justify-end relative overflow-hidden"
          style={{
            border: "2px solid transparent",
            borderRadius: "1rem",
            background: 
              "linear-gradient(#111, #111) padding-box, " +
              "linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(59, 130, 246, 0.3)) border-box"
          }}
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-purple-500 via-blue-500 to-transparent animate-pulse" />
          
          <div className="relative z-10">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Discover our latest work—cutting-edge blockchain projects and insights.
            </p>
            
            {/* Mobile navigation dots */}
            <div className="lg:hidden flex justify-center space-x-2 mt-4">
              {projectsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    scrollToIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index 
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 scale-125' 
                      : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Horizontal carousel */}
        <div className="lg:hidden flex-1 relative">
          {/* Navigation arrows */}
          <div className="absolute top-1/2 transform -translate-y-1/2 left-2 z-30">
            <button
              onClick={prevProject}
              className="bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full p-3 transition-all active:scale-95 border border-gray-600"
            >
              <FaChevronLeft className="text-white text-sm" />
            </button>
          </div>
          
          <div className="absolute top-1/2 transform -translate-y-1/2 right-2 z-30">
            <button
              onClick={nextProject}
              className="bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full p-3 transition-all active:scale-95 border border-gray-600"
            >
              <FaChevronRight className="text-white text-sm" />
            </button>
          </div>

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto overflow-y-hidden gap-4 h-full pb-4 scrollbar-hide"
            style={{
              scrollSnapType: 'x mandatory',
              scrollPadding: '0 20px'
            }}
          >
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[280px] h-full scroll-snap-align-start"
              >
                <DraggableCardBody 
                  className={clsx(
                    "h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border-2 border-gray-700/50 p-4 relative transition-all duration-300",
                    {
                      "border-purple-400/50 scale-105 shadow-2xl": currentIndex === index,
                      "hover:border-gray-600": currentIndex !== index,
                    }
                  )}
                  style={{
                    boxShadow: currentIndex === index 
                      ? '0 20px 40px rgba(139, 92, 246, 0.2), 0 0 80px rgba(59, 130, 246, 0.1)'
                      : '0 10px 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {/* File tab */}
                  <div className="absolute -top-3 left-4 bg-gradient-to-r from-gray-800 to-gray-900 border-2 border-gray-700/50 border-b-0 px-3 py-1 rounded-t-lg">
                    <span className="text-white text-xs font-medium bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent">
                      {project.title}
                    </span>
                  </div>

                  {/* Image */}
                  {project.image && (
                    <div className="relative w-full h-40 rounded-xl overflow-hidden mb-4 border border-gray-700/50">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="280px"
                        priority={index < 2}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-lg font-semibold mb-2 text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="flex justify-center items-center mt-4 pt-3 border-t border-gray-700/30">
                    <button className="flex items-center text-sm bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full hover:from-purple-600 hover:to-blue-600 transition-all active:scale-95 cursor-pointer">
                      <span className="font-medium">{project.message}</span>
                      <FaLocationArrow className="ms-2" size={12} />
                    </button>
                  </div>
                </DraggableCardBody>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Draggable scattered layout */}
        <div className="hidden lg:flex flex-1 relative overflow-hidden">
          <DraggableCardContainer className="w-full h-full">
            {/* Background text */}
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-4xl font-black text-neutral-400/20 dark:text-neutral-800/20 max-w-2xl">
              Drag projects to explore • Click to interact
            </p>

            {projectsData.map((project, index) => {
              const rotation = getRandomRotation(index);
              const position = getCardPosition(index, projectsData.length);
              
              return (
                <DraggableCardBody 
                  key={index}
                  className={clsx(
                    "absolute w-80 transition-all duration-500 hover:scale-105 hover:z-50",
                    position,
                    {
                      "z-40 scale-110": hoveredIndex === index,
                      "z-30": hoveredIndex !== index && hoveredIndex !== null,
                    }
                  )}
                  style={{
                    transform: `rotate(${rotation}deg)`,
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div 
                    className={clsx(
                      "bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border-2 border-gray-700/50 p-6 relative transition-all duration-300",
                      {
                        "border-purple-400/50 shadow-2xl": hoveredIndex === index,
                      }
                    )}
                    style={{
                      boxShadow: hoveredIndex === index 
                        ? '0 25px 50px rgba(139, 92, 246, 0.3), 0 0 100px rgba(59, 130, 246, 0.2)'
                        : '0 15px 35px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    {/* File tab */}
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-gray-800 to-gray-900 border-2 border-gray-700/50 border-b-0 px-4 py-1 rounded-t-lg">
                      <span className="text-white text-sm font-medium bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent">
                        {project.title}
                      </span>
                    </div>

                    {/* Image */}
                    {project.image && (
                      <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4 border border-gray-700/50">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="320px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                      </div>
                    )}

                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-xl font-semibold mb-3 text-white">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {project.description.length > 120 
                          ? `${project.description.slice(0, 120)}...` 
                          : project.description
                        }
                      </p>
                    </div>

                    {/* CTA */}
                    <div className="flex justify-center items-center mt-4 pt-4 border-t border-gray-700/30">
                      <button className="flex items-center text-sm bg-gradient-to-r from-purple-500 to-blue-500 text-white px-5 py-2 rounded-full hover:from-purple-600 hover:to-blue-600 transition-all cursor-pointer">
                        <span className="font-medium">{project.message}</span>
                        <FaLocationArrow className="ms-3" size={14} />
                      </button>
                    </div>
                  </div>
                </DraggableCardBody>
              );
            })}
          </DraggableCardContainer>
        </div>
      </div>

      {/* Mobile instructions */}
      <div className="lg:hidden flex justify-center mt-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-600/50">
          <p className="text-white/80 text-xs flex items-center gap-2">
            <span>← →</span>
            Swipe or use arrows • Tap to select
          </p>
        </div>
      </div>

      {/* Desktop instructions */}
      <div className="hidden lg:flex justify-center mt-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-600/50">
          <p className="text-white/80 text-sm flex items-center gap-3">
            <span>🎯</span>
            Drag cards to explore • Hover for details
            <span>✨</span>
          </p>
        </div>
      </div>
    </div>
  );
}