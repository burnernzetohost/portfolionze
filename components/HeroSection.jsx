// components/HeroSection.jsx
'use client'; // This component needs to be a client component for interactivity

import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { useMousePosition } from '../src/contexts/MousePositionContext'; // Path from root/components/ to src/contexts/

const HeroSection = () => {
  const { x: mouseX, y: mouseY } = useMousePosition(); // Get global mouse position
  const [hasMounted, setHasMounted] = useState(false); // New state to track if component has mounted

  useEffect(() => {
    // Set hasMounted to true once the component mounts on the client side
    setHasMounted(true);
  }, []); // Empty dependency array ensures this runs once after initial render

  // Calculate shadow offset based on mouse position
  const multi = -0.28; // Adjust this value for more or less movement
  const shadowOffsetX = (mouseX - 50) * multi;
  const shadowOffsetY = (mouseY - 50) * multi;

  // Define the text shadow style conditionally
  const textShadowStyle = hasMounted
    ? `${shadowOffsetX}px ${shadowOffsetY}px 12px rgba(0,0,0,1)`
    : `0px 0px 12px rgba(0,0,0,1)`; // Default static shadow for SSR/initial render

  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center text-center p-4 overflow-hidden"
      
    >
      {/* The circular gradient overlay div is now handled by CursorGradientOverlay */}

      {/* Content wrapper to center and apply max-w-4xl */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Main title "NZE" with custom font and dynamic drop shadow */}
        <h1
          className="text-11xl md:text-[12rem] lg:text-[14rem] font-[550] uppercase text-[#dddddd]"
          style={{ fontFamily: 'var(--font-theseasons-lt)' }}
        >
          <span
            // Dynamically apply text-shadow based on hasMounted state
            style={{
              textShadow: textShadowStyle // Use the conditionally defined style
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