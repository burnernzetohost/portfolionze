// src/components/HeroSection.jsx
// Place this file inside your 'src/components' folder.

'use client'; // This component needs to be a client component for interactivity

import React, { useState, useEffect } from 'react';

const HeroSection = () => {
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

  // Calculate shadow offset based on mouse position
  // We'll create a subtle movement, so a small multiplier is used.
  // Centering the effect: (mousePosition - 50) gives a range from -50 to +50
  // Negating the multiplier makes the shadow move in the opposite direction
  const multi = -0.28; // Adjust this value for more or less movement
  const shadowOffsetX = (mousePosition.x - 50) * multi; // Changed multiplier to negative
  const shadowOffsetY = (mousePosition.y - 50) * multi; // Changed multiplier to negative

  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center text-center p-4 overflow-hidden" // Added overflow-hidden to prevent scrollbars from gradient edge
      style={{ background: '#17171c' }} // Ensure the background color is applied directly
    >
      {/* Circular gradient overlay that follows mouse */}
      <div
        className="absolute inset-0 z-0 pointer-events-none" // pointer-events-none ensures mouse events pass through to window
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #404042 0%, transparent 70%)`, // Updated color and dynamic position
        }}
      ></div>

      {/* Content wrapper to center and apply max-w-4xl */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Main title "NZE" with custom font and dynamic drop shadow */}
        <h1
          className="text-11xl md:text-[12rem] lg:text-[14rem] font-[550] uppercase text-[#dddddd]" // Updated text size and font weight
          style={{ fontFamily: 'var(--font-theseasons-lt)' }} // Apply the custom font via CSS variable
        >
          <span
            // Dynamically apply text-shadow based on mouse position
            style={{
              textShadow: `${shadowOffsetX}px ${shadowOffsetY}px 12px rgba(0,0,0,1)`
            }}
          >
            NZE
          </span>
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
