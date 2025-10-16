"use client";

import { useState, useRef } from "react";
import { projectsData } from "@/data";
import Image from "next/image";
import clsx from "clsx";
import { FaLocationArrow, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Draggable card components
const DraggableCardContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={clsx("relative", className)}>{children}</div>
);

const DraggableCardBody = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={clsx("cursor-grab active:cursor-grabbing transition-all duration-300", className)}>
    {children}
  </div>
);

export default function ProjectsDrawer() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCard, setActiveCard] = useState<number | null>(null);
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

  // Calculate stacked positions
  const getStackedPosition = (index: number, total: number) => {
    const baseTop = 10;
    const baseLeft = 10;
    const spread = 8;
    
    const topOffset = (index % 3) * spread;
    const leftOffset = (index % 2) * spread;
    
    return {
      top: `${baseTop + topOffset}%`,
      left: `${baseLeft + leftOffset}%`
    };
  };

  // Calculate rotation for each card in the stack
  const getStackRotation = (index: number) => {
    const rotations = [-3, 2, -1, 1, -2, 3, -4, 4];
    return rotations[index % rotations.length];
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto left-0 right-0 px-4 sm:px-6 lg:px-4 z-50 overflow-hidden">
      
      {/* Large text above the modal */}
      <div className="absolute top-[-0.5rem] sm:top-[-1rem] lg:top-[-1.5cm] left-0 w-full text-center z-10">
        <h1 className="text-3xl sm:text-4xl lg:text-[8rem] font-extrabold mt-4 lg:mt-8 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          Projects
        </h1>
      </div>

      {/* Main container */}
      <div
        className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row px-3 sm:px-4 py-4 lg:py-2 gap-1 lg:gap-2 items-stretch min-h-[60vh] lg:h-[80vh] relative z-10 rounded-2xl bg-neutral-900/70 backdrop-blur-sm"
        style={{
          marginTop: '1.5rem',
          maxWidth: '100vw',
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
          className="w-full lg:flex-shrink-0 h-auto lg:h-full text-white p-4 sm:p-6 lg:w-[220px] flex flex-col justify-start lg:justify-end relative overflow-hidden"
          style={{
            border: "2px solid transparent",
            borderRadius: "1rem",
            background: 
              "linear-gradient(#111, #111) padding-box, " +
              "linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(59, 130, 246, 0.3)) border-box"
          }}
        >
          <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-purple-500 via-blue-500 to-transparent animate-pulse" />
          
          <div className="relative z-10">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Discover our latest work—cutting-edge blockchain projects and insights.
            </p>
            
            {/* Mobile navigation - Tapered moving line */}
            <div className="lg:hidden flex flex-col items-center space-y-3 mt-4">
              {/* Track background */}
              <div className="w-48 h-1.5 bg-gray-600/20 rounded-full relative overflow-hidden">
                {/* Moving tapered line */}
                <div 
                  className="absolute top-0 w-8 h-full bg-gradient-to-r from-transparent via-purple-500 to-transparent transition-all duration-500 ease-out"
                  style={{
                    left: `${(currentIndex / (projectsData.length - 1)) * 80}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

{/* Mobile: Horizontal carousel */}
<div className="lg:hidden flex-1 relative mt-4">
  {/* Navigation arrows */}
  <div className="absolute top-1/2 transform -translate-y-1/2 left-1 z-30">
<button
  onClick={prevProject}
  className="bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center transition-all active:scale-95 border border-gray-600"
>
  <FaChevronLeft className="text-white text-sm" />
</button>
  </div>
  
  <div className="absolute top-1/2 transform -translate-y-1/2 right-1 z-30">
<button
  onClick={nextProject}
  className="bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center transition-all active:scale-95 border border-gray-600"
>
  <FaChevronRight className="text-white text-sm" />
</button>
  </div>

  <div
    ref={scrollContainerRef}
    className="flex overflow-x-auto overflow-y-hidden gap-3 h-full pb-4 scrollbar-hide px-2 pt-4"
    style={{
      scrollSnapType: 'x mandatory',
      scrollPadding: '0 16px'
    }}
  >
    {projectsData.map((project, index) => (
      <div
        key={index}
        className="flex-shrink-0 w-[260px] h-full scroll-snap-align-start"
      >
        <div 
          className={clsx(
            "h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border-2 border-gray-700/50 p-4 relative transition-all duration-300 mt-2", 
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
          {/* Circular position indicator - MOBILE - Fixed positioning */}
          <div className={clsx(
            "absolute -top-3 -right-3 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 z-20", // Increased size and adjusted positioning
            {
              "bg-gradient-to-br from-pink-500 to-blue-500 text-white shadow-lg": currentIndex === index,
              "bg-gray-700 text-gray-300 border border-gray-600": currentIndex !== index,
            }
          )}>
            {index + 1}
          </div>



          {/* Image */}
          {project.image && (
            <div className="relative w-full h-40 rounded-xl overflow-hidden mb-4 border border-gray-700/50 mt-2">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="260px"
                priority={index < 2}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
            </div>
          )}

          {/* Content */}
          <div className="flex-1 flex flex-col">
            <h3 className="text-base font-semibold mb-1 text-white">
              {project.title}
            </h3>
            <p className="text-gray-300 text-xs leading-relaxed line-clamp-3">
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
        </div>
      </div>
    ))}
  </div>
</div>
        {/* Desktop: Stacked Draggable Layout */}
        <div className="hidden lg:flex flex-1 relative overflow-visible">
          <DraggableCardContainer className="w-full h-full min-h-[400px] relative">
            {/* Background text */}
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-2xl font-black text-neutral-400/10 dark:text-neutral-800/10 max-w-2xl z-0">
              Drag to explore • Click to bring forward
            </p>

            {projectsData.map((project, index) => {
              const rotation = getStackRotation(index);
              const position = getStackedPosition(index, projectsData.length);
              const isActive = activeCard === index;
              const zIndex = isActive ? 50 : 40 - index;
              const scale = isActive ? 1.05 : 1 - (index * 0.02);
              const opacity = isActive ? 1 : 0.95 - (index * 0.03);
              
              return (
                <DraggableCardBody 
                  key={index}
                  className={clsx(
                    "absolute w-72 transition-all duration-500 cursor-grab",
                    {
                      "z-50 scale-105 shadow-2xl": isActive,
                      "hover:scale-102 hover:z-45": !isActive && hoveredIndex === index,
                    }
                  )}
                  style={{
                    transform: `rotate(${rotation}deg) scale(${scale})`,
                    zIndex,
                    opacity,
                    top: position.top,
                    left: position.left,
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setActiveCard(isActive ? null : index)}
                  onDragStart={() => setActiveCard(index)}
                >
                  <div 
                    className={clsx(
                      "bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border-2 p-4 relative transition-all duration-300",
                      {
                        "border-purple-400/70 shadow-2xl": isActive,
                        "border-gray-700/50 hover:border-gray-600/70": !isActive,
                      }
                    )}
                    style={{
                      boxShadow: isActive 
                        ? '0 35px 60px rgba(139, 92, 246, 0.4), 0 0 120px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                        : hoveredIndex === index
                        ? '0 20px 40px rgba(0, 0, 0, 0.5), 0 0 60px rgba(139, 92, 246, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                        : '0 15px 35px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    {/* Circular position indicator - DESKTOP */}
                    <div className={clsx(
                      "absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 border-2",
                      {
                        "bg-gradient-to-br from-pink-500 to-blue-500 text-white shadow-lg border-purple-300 scale-110": isActive,
                        "bg-gradient-to-br from-gray-700 to-gray-800 text-gray-300 border-gray-600 hover:scale-105": !isActive,
                      }
                    )}>
                      {index + 1}
                    </div>

                    {/* File tab */}
                    <div className={clsx(
                      "absolute -top-3 left-6 border-2 border-b-0 px-4 py-1 rounded-t-lg transition-all duration-300",
                      {
                        "bg-gradient-to-r from-purple-900/80 to-blue-900/80 border-purple-400/50": isActive,
                        "bg-gradient-to-r from-gray-800 to-gray-900 border-gray-700/50": !isActive,
                      }
                    )}>
                      <span className={clsx(
                        "text-sm font-medium bg-clip-text text-transparent",
                        {
                          "bg-gradient-to-r from-purple-200 to-blue-200": isActive,
                          "bg-gradient-to-r from-purple-200/80 to-blue-200/80": !isActive,
                        }
                      )}>
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
                          className="object-cover transition-transform duration-300 hover:scale-105"
                          sizes="288px"
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
                      <button className="flex items-center text-sm bg-gradient-to-r from-purple-500 to-blue-500 text-white px-5 py-2 rounded-full hover:from-purple-600 hover:to-blue-600 transition-all cursor-pointer shadow-lg">
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
    </div>
  );
}