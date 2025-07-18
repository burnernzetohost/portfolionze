// components/ProjectsSection.jsx
'use client'; 

import React from 'react';

const projects = [
  {
    id: 1,
    src: "/images/img1.jpg",
    description: "Don't chase, LAP",
  },
  {
    id: 2,
    src: "/images/img2.jpg",
    description: "Built for the longer run.",
  },
  {
    id: 3,
    src: "/images/img3.jpg",
    description: "Linked by purpose, not pressure.",
  },
  {
    id: 4,
    src: "/images/img4.jpg",
    description: "Low effort. High impact.",
  },
  {
    id: 5,
    src: "/images/img5.jpg",
    description: "Rome wasn’t built in a day, Nor was my portfolio.",
  }
];

const ProjectsSection = () => {
  const [activeIndex, setActiveIndex] = React.useState(2);

  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center text-center p-4 overflow-hidden"
    >
      {/* Section Number */}
      <div className="absolute left-8 top-8 text-gray-600 text-sm">.02</div>

      {/* Main content container */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center h-full w-full">
        
        {/* Image container for absolute positioning */}
        <div className="relative w-full h-[350px] flex items-center justify-center">
          {projects.map((project, index) => {
            
            let offset = index - activeIndex;
            if (offset < -2) {
              offset += projects.length;
            } else if (offset > 2) {
              offset -= projects.length;
            }
            
            let positionClass = '';
            // CORRECTED: Reduced the blur amount
            switch (offset) {
              case 0: // Center
                positionClass = 'z-30 scale-100 opacity-100 filter-none';
                break;
              case -1: // Near Left
                positionClass = 'z-20 scale-75 opacity-75 transform-gpu -translate-x-[100%] filter blur-xs';
                break;
              case 1: // Near Right
                positionClass = 'z-20 scale-75 opacity-75 transform-gpu translate-x-[100%] filter blur-xs';
                break;
              case -2: // Extreme Left
                positionClass = 'z-10 scale-50 opacity-50 transform-gpu -translate-x-[180%] filter blur';
                break;
              case 2: // Extreme Right
                positionClass = 'z-10 scale-50 opacity-50 transform-gpu translate-x-[180%] filter blur';
                break;
              default: // Hidden items
                positionClass = `z-0 scale-0 opacity-0 transform-gpu ${offset < 0 ? `-translate-x-[250%]` : `translate-x-[250%]`}`;
                break;
            }

            return (
              <div
                key={project.id}
                className={`
                  absolute w-1/2 md:w-[30%]
                  transition-all duration-700 ease-in-out
                  ${positionClass}
                `}
                onClick={() => {
                    setActiveIndex(index);
                }}
              >
                <img
                  src={project.src}
                  alt={`Project Image ${project.id}`}
                  className="w-full h-auto object-cover shadow-2xl rounded-lg cursor-pointer"
                  onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/400x300/333/FFF?text=Image+${project.id}`; }}
                />
              </div>
            );
          })}
        </div>

        {/* Section Title */}
        <h2
          className="text-5xl md:text-6xl font-bold uppercase text-center text-[#dddddd] mt-8"
          style={{ fontFamily: 'var(--font-montserrat)' }}
        >
          Projects
        </h2>

        {/* Dynamic text below title */}
        <p
          className="text-lg md:text-xl text-center text-gray-400 mt-4 mx-auto max-w-lg h-16"
          style={{ fontFamily: 'var(--font-cocogoose-pro-thin)' }}
        >
          {projects[activeIndex].description}
        </p>
      </div>
    </section>
  );
};

export default ProjectsSection;