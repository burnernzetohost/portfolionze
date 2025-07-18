// components/LoadingScreen.jsx
'use client';

import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onAnimationComplete }) => {
  const textToType = "NZE";
  const [typedText, setTypedText] = useState('');
  const [animationPhase, setAnimationPhase] = useState('typing');

  useEffect(() => {
    if (animationPhase === 'typing') {
      const typingInterval = setInterval(() => {
        if (typedText.length < textToType.length) {
          setTypedText(textToType.slice(0, typedText.length + 1));
        } else {
          clearInterval(typingInterval);
          // FASTER: Reduced pause from 1000ms to 800ms
          setTimeout(() => setAnimationPhase('scaling'), 800); 
        }
      }, 350); // FASTER: Reduced typing speed from 450ms to 350ms

      return () => clearInterval(typingInterval);
    }

    if (animationPhase === 'scaling') {
      // FASTER: Reduced animation duration from 2500ms to 2000ms
      const animationTimeout = setTimeout(() => {
        setAnimationPhase('finished');
        onAnimationComplete();
      }, 2000); 

      return () => clearTimeout(animationTimeout);
    }
  }, [typedText, animationPhase, onAnimationComplete]);

  const headerStyles = {
    // FASTER: Reduced CSS transition to match the JS timer
    transition: 'transform 2.0s ease-in-out',
    fontFamily: 'var(--font-theseasons-lt)',
    fontSize: 'clamp(8rem, 25vw, 14rem)',
    transform: 'translate(-50%, -50%) scale(1.8)',
    ...(animationPhase === 'scaling' && {
      transform: 'translate(-50%, calc(-50% - 2rem)) scale(1)',
    }),
  };

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center"
    >
        <h1
          className="absolute top-1/2 left-1/2 font-[550] uppercase text-[#dddddd]"
          style={headerStyles}
        >
          {typedText}
        </h1>
    </div>
  );
};

export default LoadingScreen;