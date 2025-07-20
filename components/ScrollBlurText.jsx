'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

const ScrollBlurText = ({ text, className, style, offset = ['start end', 'start 0.75'] }) => {
  const targetRef = useRef(null);

  // Use the new 'offset' prop here
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: offset, 
  });

  const words = text.split(' ');

  return (
    <p ref={targetRef} className={className} style={style}>
      {words.map((word, i) => {
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