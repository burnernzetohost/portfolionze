// components/CursorGradientOverlay.jsx
'use client';

import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { useMousePosition } from '../src/contexts/MousePositionContext'; // Corrected path

const CursorGradientOverlay = () => {
  const { x, y } = useMousePosition(); // Get mouse position from context
  const [hasMounted, setHasMounted] = useState(false); // New state to track if component has mounted

  useEffect(() => {
    // Set hasMounted to true once the component mounts on the client side
    setHasMounted(true);
  }, []); // Empty dependency array ensures this runs once after initial render

  // Define the background style conditionally
  const gradientBackground = hasMounted
    ? `radial-gradient(circle at ${x}% ${y}%, #404043 0%, transparent 70%)`
    : `radial-gradient(circle at 50% 50%, white 0%, transparent 70%)`; // Default static gradient for SSR/initial render

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        background: gradientBackground, // Use the conditionally defined background
      }}
    ></div>
  );
};

export default CursorGradientOverlay;