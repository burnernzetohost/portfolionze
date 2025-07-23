// components/AboutSection.jsx
'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollDrivenTextAnimation from './ScrollDrivenTextAnimation';
import ScrollBlurText from './ScrollBlurText';

const AboutSection = () => {
  const p1 = "I'm a passionate and creative web developer with a keen eye for design and a drive to build beautiful, functional, and user-friendly websites. I specialize in front-end development and I'm always eager to learn new technologies and improve my skills.";
  const p2 = "When I'm not coding, you can find me exploring new coffee shops, reading a good book, or working on personal projects to expand my portfolio.";

  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax values remain the same, but positioning is adjusted in the JSX
  const imageY = useTransform(scrollYProgress, [0, 1], [150, -250]);
  const image2Y = useTransform(scrollYProgress, [0, 0.8], [1000, 350]);
  const image3Y = useTransform(scrollYProgress, [0, 0.6], [900, -100]);

  return (
    <section id="about" ref={sectionRef} className="relative min-h-screen flex flex-col justify-center text-left p-8 md:p-16 overflow-hidden">
      
      {/* Parallax Images: Adjusted positioning to be less extreme on mobile */}
      <motion.div
    // 1. Added responsive width and height classes here
    className="absolute top-[-50%] right-[35%] w-[108px] h-[99px] md:left-[22%] md:w-[120px] md:h-[110px] md:z-[99]"
    style={{ y: image2Y }}
>
    <Image
        src="/images/keyboard1.png"
        alt="A second keyboard"
        fill={true} // 2. Replaced width and height with fill={true}
        sizes="(max-width: 768px) 108px, 99px" // Optional, but good for performance
        onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/120x95/333/FFF?text=keyboard1.png`; }}
    />
</motion.div>

      <motion.div
        className="absolute top-[-10%] right-[5%] md:left-[75%] z-5" // Adjusted position
        style={{ y: image3Y }}
      >
        <Image
          src="/images/keyboard3.png"
          alt="A third keyboard"
          width={120}
          height={95}
          onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/100x80/333/FFF?text=keyboard3.png`; }}
        />
      </motion.div>

      <div className="absolute left-8 top-8 text-gray-600 text-sm">.03</div>
      
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-16 items-center max-w-7xl mx-auto">
        
        {/* The layout is now responsive. `translateY` is adjusted on mobile. */}
        <div className="flex flex-col" style={{ transform: 'translateY(-4rem) md:translateY(-8rem)' }}>
          <ScrollDrivenTextAnimation 
            text="About"
            className="text-7xl md:text-9xl font-bold uppercase text-[#dddddd] tracking-widest"
            style={{ fontFamily: 'var(--font-montserrat)' }}
            offset={['start end', 'start center']}
          />
          <div className="mt-8 self-start">
            <motion.div style={{ y: imageY }}>
              <Image
                src="/images/keyboard.png"
                alt="A mechanical keyboard on a desk"
                width={120}
                height={95}
                onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/120x95/333/FFF?text=keyboard.png`; }}
              />
            </motion.div>
          </div>
        </div>

        {/* Text content now stacks naturally on mobile */}
        <div className="space-y-8 mt-8 md:mt-0">
          <ScrollBlurText 
            text={p1} 
            className="text-lg md:text-xl text-gray-400 leading-relaxed flex flex-wrap" 
            style={{ fontFamily: 'var(--font-cocogoose-pro-thin)' }} 
            offset={['start end', '0 0.45']}
          />
           <ScrollBlurText 
            text={p2} 
            className="text-lg md:text-xl text-gray-400 leading-relaxed flex flex-wrap" 
            style={{ fontFamily: 'var(--font-cocogoose-pro-thin)' }} 
            offset={['start end', '0 0.6']}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;