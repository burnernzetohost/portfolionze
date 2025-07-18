// components/ProjectsSection.jsx
'use client'; // This component needs to be a client component for interactivity

import React from 'react';

const ProjectsSection = () => {
  // No mouse position state or effect needed here, as it's globalized.

  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center text-center p-4 overflow-hidden"
      
    >
      {/* Section Number */}
      <div className="absolute left-8 top-8 text-gray-600 text-sm">
        .02
      </div>

      {/* The circular gradient overlay div is now handled by CursorGradientOverlay */}

      {/* Main content container for the section */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center h-full">

        {/* Image Container - positioned a little up on Y-axis */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 -mt-16 md:-mt-24 lg:-mt-32">
          <img
            src="/images/img1.jpg"
            alt="Project Image 1"
            className="w-full max-w-[150px] md:max-w-[200px] lg:max-w-[250px] h-auto shadow-xl object-cover transition-transform duration-300 hover:scale-105"
            style={{ transform: 'translateY(65px)', filter: 'blur(2px)' }}
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x300/333333/FFFFFF?text=Image+1"; }}
          />
          <img
            src="/images/img2.jpg"
            alt="Project Image 2"
            className="w-full max-w-[200px] md:max-w-[350px] lg:max-w-[350px] h-auto shadow-xl object-cover transition-transform duration-300 hover:scale-105"
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x300/444444/FFFFFF?text=Image+2"; }}
          />
          <img
            src="/images/img3.jpg"
            alt="Project Image 3"
            className="w-full max-w-[150px] md:max-w-[200px] lg:max-w-[250px] h-auto shadow-xl object-cover transition-transform duration-300 hover:scale-105"
            style={{ transform: 'translateY(65px)', filter: 'blur(2px)' }}
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x300/555555/FFFFFF?text=Image+3"; }}
          />
        </div>

        {/* Section Title - Moved below images and styled */}
        <h2
          className="text-5xl md:text-6xl font-bold uppercase text-center text-[#dddddd] mt-0 md:mt-0 lg:mt-1 mx-auto max-w-[450px] md:max-w-[400px] lg:max-w-[450px]"
          style={{ fontFamily: 'var(--font-montserrat)' }}
        >
          Projects
        </h2>

        {/* New text below Projects title */}
        <p
          className="text-lg md:text-xl text-center text-gray-400 mt-4 mx-auto max-w-[500px] md:max-w-[500px] lg:max-w-[350px]"
          style={{ fontFamily: 'var(--font-cocogoose-pro-thin)' }}
        >
          Rome wasn’t built in a day, nor was my portfolio
        </p>
      </div>
    </section>
  );
};

export default ProjectsSection;