// components/ProjectsSection.jsx
'use client';

import React, { useState, useRef, useEffect } from 'react';

const projects = [
  { id: 1, src: "/images/img1.jpg", description: "Don't chase, LAP" },
  { id: 2, src: "/images/img2.jpg", description: "Built for the longer run." },
  { id: 3, src: "/images/img3.jpg", description: "Linked by purpose, not pressure." },
  { id: 4, src: "/images/img4.jpg", description: "Low effort. High impact." },
  { id: 5, src: "/images/img5.jpg", description: "Rome wasn’t built in a day, Nor was my portfolio." }
];

// Custom hook to get an element's full width, including padding and borders
const useElementWidth = () => {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const observer = new ResizeObserver(entries => {
      if (entries[0]) {
        // THE FIX: Use borderBoxSize to get the full width (content + padding + border)
        // This provides the most accurate measurement for layout calculations.
        const borderBoxWidth = entries[0].borderBoxSize[0]?.inlineSize;
        if (borderBoxWidth) {
          setWidth(borderBoxWidth);
        } else {
          // Fallback for older browsers
          setWidth(entries[0].target.offsetWidth);
        }
      }
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return [ref, width];
};

const ProjectsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [itemRef, itemWidth] = useElementWidth();
  const [containerRef, containerWidth] = useElementWidth();
  const [transitionDuration, setTransitionDuration] = useState('500ms');

  const numProjects = projects.length;
  const displayProjects = [projects[numProjects - 1], ...projects, projects[0]];

  const handleProjectClick = (index) => {
    setTransitionDuration('500ms');
    setCurrentIndex(index);
    if (index === 0) setActiveIndex(numProjects - 1);
    else if (index === displayProjects.length - 1) setActiveIndex(0);
    else setActiveIndex(index - 1);
  };
  
  useEffect(() => {
    if (currentIndex === 0 || currentIndex === displayProjects.length - 1) {
      const timer = setTimeout(() => {
        setTransitionDuration('0ms');
        setCurrentIndex(currentIndex === 0 ? numProjects : 1);
        
        const restoreTimer = setTimeout(() => setTransitionDuration('500ms'), 50);
        return () => clearTimeout(restoreTimer);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, displayProjects.length, numProjects]);

  const getTranslateX = () => {
    if (!itemWidth || !containerWidth) return 0;
    const centeringOffset = (containerWidth / 2) - (itemWidth / 2);
    return centeringOffset - (itemWidth * currentIndex);
  };

  return (
    <section id="projects" className="relative min-h-screen flex flex-col items-center justify-center text-center py-16 overflow-hidden">
      <div className="absolute left-8 top-8 text-gray-600 text-sm">.02</div>
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center h-full w-full">
        <div ref={containerRef} className="md:hidden w-full overflow-hidden">
          <div
            className="flex"
            style={{
              transform: `translateX(${getTranslateX()}px)`,
              transition: `transform ${transitionDuration} ease-in-out`,
            }}
          >
            {displayProjects.map((project, index) => (
              <div
                key={`${project.id}-${index}`}
                ref={index === 0 ? itemRef : null}
                className="flex-shrink-0 w-4/5 px-2"
                onClick={() => handleProjectClick(index)}
              >
                <img
                  src={project.src}
                  alt={`Project Image ${project.id}`}
                  className={`w-full h-auto object-cover shadow-2xl rounded-lg cursor-pointer transition-all duration-300
                    ${activeIndex === (index-1+numProjects)%numProjects  ? 'scale-100' : 'scale-90 opacity-70 blur-sm'}`}
                  onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/400x300/333/FFF?text=Image+${project.id}`; }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:relative md:w-full md:h-[350px] md:flex md:items-center md:justify-center">
            {projects.map((project, index) => {
                let offset = index - activeIndex;
                if (offset < -2) offset += projects.length; else if (offset > 2) offset -= projects.length;
                let posClass = '';
                switch (offset) {
                  case 0: posClass = 'z-30 scale-100 opacity-100 filter-none'; break;
                  case -1: posClass = 'z-20 scale-75 opacity-75 transform-gpu -translate-x-[100%] filter blur-xs'; break;
                  case 1: posClass = 'z-20 scale-75 opacity-75 transform-gpu translate-x-[100%] filter blur-xs'; break;
                  case -2: posClass = 'z-10 scale-50 opacity-50 transform-gpu -translate-x-[180%] filter blur'; break;
                  case 2: posClass = 'z-10 scale-50 opacity-50 transform-gpu translate-x-[180%] filter blur'; break;
                  default: posClass = `z-0 scale-0 opacity-0 transform-gpu ${offset < 0 ? `-translate-x-[250%]` : `translate-x-[250%]`}`; break;
                }
                return (
                  <div key={project.id} className={`absolute w-[30%] transition-all duration-700 ease-in-out ${posClass}`} onClick={() => setActiveIndex(index)}>
                    <img src={project.src} alt={`Project Image ${project.id}`} className="w-full h-auto object-cover shadow-2xl rounded-lg cursor-pointer" onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/400x300/333/FFF?text=Image+${project.id}`; }} />
                  </div>
                );
            })}
        </div>
        <h2 className="text-5xl md:text-6xl font-bold uppercase text-center text-[#dddddd] mt-8" style={{ fontFamily: 'var(--font-montserrat)' }}>Projects</h2>
        <p className="text-lg md:text-xl text-center text-gray-400 mt-4 mx-auto max-w-lg h-16 px-4 md:px-0" style={{ fontFamily: 'var(--font-cocogoose-pro-thin)' }}>{projects[activeIndex].description}</p>
      </div>
    </section>
  );
};

export default ProjectsSection;