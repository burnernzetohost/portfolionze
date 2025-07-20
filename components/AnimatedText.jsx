'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const defaultAnimation = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const AnimatedText = ({ text, el: Wrapper = 'p', className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ staggerChildren: 0.1 }}
        aria-hidden
      >
        {text.split('').map((char, index) => (
          <motion.span
            className="inline-block"
            key={index}
            variants={defaultAnimation}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
};