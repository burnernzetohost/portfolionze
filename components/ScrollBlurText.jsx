'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

const ScrollBlurText = ({ text, className, style }) => {
  const targetRef = useRef(null);

  // --- THIS IS THE KEY CHANGE ---
  // The animation now starts when the element enters the screen
  // and finishes when the top of the element reaches the center of the screen.
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'start center'], 
  });

  const words = text.split(' ');

  return (
    <p ref={targetRef} className={className} style={style}>
      {words.map((word, i) => {
        // We still distribute the animation across all words
        const start = i / words.length;
        const end = start + 1 / words.length;
        
        return (
          <BlurWord 
            key={i} 
            progress={scrollYProgress} 
            range={[start, end]}
            word={word}
          />
        );
      })}
    </p>
  );
};

const BlurWord = ({ progress, range, word }) => {
  const blur = useTransform(progress, range, [8, 0]);
  const opacity = useTransform(progress, range, [0.5, 1]);

  return (
    <span className="relative inline-block mr-2 mt-2">
      <motion.span style={{ filter: useTransform(blur, (b) => `blur(${b}px)`), opacity }}>
        {word}
      </motion.span>
    </span>
  );
};

export default ScrollBlurText;