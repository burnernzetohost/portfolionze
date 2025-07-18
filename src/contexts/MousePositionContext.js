// src/contexts/MousePositionContext.js
'use client';

import React, { createContext, useState, useEffect, useContext } from 'react';

const MousePositionContext = createContext(null);

export const MousePositionProvider = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <MousePositionContext.Provider value={mousePosition}>
      {children}
    </MousePositionContext.Provider>
  );
};

export const useMousePosition = () => {
  const context = useContext(MousePositionContext);
  if (context === undefined) {
    throw new Error('useMousePosition must be used within a MousePositionProvider');
  }
  return context;
};