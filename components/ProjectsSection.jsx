// src/components/ProjectsSection.jsx
// RENAME your KeetCafeSection.jsx to ProjectsSection.jsx and replace its content with this.
// Or create a new file ProjectsSection.jsx and delete KeetCafeSection.jsx

'use client'; // This component needs to be a client component for interactivity

import React, { useState, useEffect } from 'react';

const ProjectsSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 }); // Initialize at center or default

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Calculate mouse position as a percentage of the viewport
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center text-center p-4 overflow-hidden"
      style={{ background: '#17171c' }} // Apply the background color
    >
      {/* Section Number */}
      <div className="absolute left-8 top-8 text-gray-600 text-sm">
        .02
      </div>

      {/* Circular gradient overlay that follows mouse */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #404042 0%, transparent 70%)`, // Dynamic gradient
        }}
      ></div>

      {/* Main content container for the section */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center h-full">

        {/* Image Container - positioned a little up on Y-axis */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 -mt-16 md:-mt-24 lg:-mt-32"> {/* Adjusted negative margin-top to bring images down */}
          <img
            src="/images/img1.jpg" // Path to your image in public/images
            alt="Project Image 1"
            className="w-full max-w-[150px] md:max-w-[200px] lg:max-w-[250px] h-auto shadow-xl object-cover transition-transform duration-300 hover:scale-105" // Made non-selected images larger
            style={{ transform: 'translateY(65px)', filter: 'blur(2px)' }} // Lowered by 65px and blurred by 2px
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x300/333333/FFFFFF?text=Image+1"; }}
          />
          <img
            src="/images/img2.jpg" // Path to your image in public/images
            alt="Project Image 2"
            className="w-full max-w-[200px] md:max-w-[350px] lg:max-w-[350px] h-auto shadow-xl object-cover transition-transform duration-300 hover:scale-105" // Updated size for center image
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x300/444444/FFFFFF?text=Image+2"; }}
          />
          <img
            src="/images/img3.jpg" // Path to your image in public/images
            alt="Project Image 3"
            className="w-full max-w-[150px] md:max-w-[200px] lg:max-w-[250px] h-auto shadow-xl object-cover transition-transform duration-300 hover:scale-105" // Made non-selected images larger
            style={{ transform: 'translateY(65px)', filter: 'blur(2px)' }} // Lowered by 65px and blurred by 2px
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x300/555555/FFFFFF?text=Image+3"; }}
          />
        </div>

        {/* Section Title - Moved below images and styled */}
        <h2
          className="text-5xl md:text-6xl font-bold uppercase text-center text-[#dddddd] mt-0 md:mt-0 lg:mt-1 mx-auto max-w-[450px] md:max-w-[400px] lg:max-w-[450px]" // Adjusted max-w to match center image
          style={{ fontFamily: 'var(--font-montserrat)' }} // Apply Montserrat font
        >
          Projects
        </h2>

        {/* New text below Projects title */}
        <p
          className="text-lg md:text-xl text-center text-gray-400 mt-4 mx-auto max-w-[500px] md:max-w-[500px] lg:max-w-[350px]" // Styling for the new text: reduced mt, matched max-w
          style={{ fontFamily: 'var(--font-cocogoose-pro-thin)' }} // Apply Cocogoose Pro Thin font
        >
          Rome wasn’t built in a day, nor was my portfolio
        </p>
      </div>
    </section>
  );
};

export default ProjectsSection;
