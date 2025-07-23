// components/HeroSection.jsx
'use client';

import React from 'react';
import { useMousePosition } from '../src/contexts/MousePositionContext';

const HeroSection = () => {
  const { x: mouseX, y: mouseY } = useMousePosition();

  const multi = -0.28;
  const shadowOffsetX = (mouseX - 50) * multi;
  const shadowOffsetY = (mouseY - 50) * multi;
  const textShadowStyle = `${shadowOffsetX}px ${shadowOffsetY}px 12px rgba(0,0,0,1)`;

  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center text-center p-4 overflow-hidden"
    >
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1
          className="text-[10rem] md:text-[12rem] lg:text-[14rem] font-[550] uppercase text-[#dddddd]"
          style={{
            fontFamily: 'var(--font-theseasons-lt)',
            transform: 'translateY(-1rem) md:translateY(-2rem)', // Adjusted vertical position for mobile
          }}
        >
          <span style={{ textShadow: textShadowStyle }}>
            NZE
          </span>
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;