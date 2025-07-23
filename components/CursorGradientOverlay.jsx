// components/CursorGradientOverlay.jsx
'use client';

import React, { useState, useEffect } from 'react';
import { useMousePosition } from '../src/contexts/MousePositionContext';

const CursorGradientOverlay = () => {
  const { x, y } = useMousePosition();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen size on the client-side
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile(); // Check on initial mount
    window.addEventListener('resize', checkMobile); // Update on resize

    // Cleanup the event listener
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Conditionally apply styles based on whether it's mobile or not
  const style = isMobile
    ? {
        background: `radial-gradient(circle at 50% 50%, #404043 0%, transparent 70%)`,
        animation: 'flowGradient 15s infinite alternate ease-in-out',
      }
    : {
        background: `radial-gradient(circle at ${x}% ${y}%, #404043 0%, transparent 70%)`,
      };

  return (
    <>
      {/* Add keyframes for the mobile animation */}
      <style jsx global>{`
        @keyframes flowGradient {
          0% {
            background-position: 0% 50%;
            background-size: 300% 300%;
          }
          50% {
            background-position: 100% 50%;
            background-size: 400% 400%;
          }
          100% {
            background-position: 0% 50%;
            background-size: 300% 300%;
          }
        }
      `}</style>
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={style}
      ></div>
    </>
  );
};

export default CursorGradientOverlay;