'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

const ScrollDrivenTextAnimation = ({ text, className, style, offset = ['start end', 'start center'] }) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: offset,
  });

  const words = [text]; // Treat the input as a single "word" for this effect

  return (
    <div ref={targetRef} className={className} style={style}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word
            key={i}
            progress={scrollYProgress}
            range={[start, end]}
            word={word}
          />
        );
      })}
    </div>
  );
};

const Word = ({ progress, range, word }) => {
  const amount = range[1] - range[0];
  const step = amount / word.length;
  return (
    <span className="relative">
      {word.split('').map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return (
          <Character
            key={i}
            progress={progress}
            range={[start, end]}
            char={char}
          />
        );
      })}
    </span>
  );
};

const Character = ({ progress, range, char }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <motion.span style={{ opacity: opacity }}>{char}</motion.span>
  );
};

export default ScrollDrivenTextAnimation;