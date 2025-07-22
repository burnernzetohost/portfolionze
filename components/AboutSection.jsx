'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollDrivenTextAnimation from './ScrollDrivenTextAnimation';
import ScrollBlurText from './ScrollBlurText';

const AboutSection = () => {
  // ==> CONTROL YOUR IMAGE POSITIONS HERE <==
  const keyboard1XPosition = '200%';
  const keyboard3XPosition = '350%'; // Control the new image's position


  const p1 = "I'm a passionate and creative web developer with a keen eye for design and a drive to build beautiful, functional, and user-friendly websites. I specialize in front-end development and I'm always eager to learn new technologies and improve my skills.";
  const p2 = "When I'm not coding, you can find me exploring new coffee shops, reading a good book, or working on personal projects to expand my portfolio.";

  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"] 
  });

  // Parallax for the first image
  const imageY = useTransform(scrollYProgress, [0, 1], [150, -250]);

  // Parallax for the second image (keeping your changes)
  const image2Y = useTransform(scrollYProgress, [0, 0.9], [700, -150]);

  // Parallax for the new third image
  const image3Y = useTransform(scrollYProgress, [0, 0.6], [900, -100]);


  return (
    <section ref={sectionRef} className="relative h-screen flex flex-col justify-center text-left p-8 md:p-16 overflow-hidden">
      
      {/* Image 1 (keyboard1.png) - Keeping your changes */}
      <motion.div
        className="absolute top-[20%] z-100"
        style={{
          y: image2Y,
          x: keyboard1XPosition
        }}
      >
        <Image
          src="/images/keyboard1.png"
          alt="A second keyboard"
          width={120}
          height={95}
          onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/120x95/333/FFF?text=keyboard1.png`; }}
        />
      </motion.div>

      {/* ==> ADDED: Image 2 (keyboard3.png) <== */}
      <motion.div
        className="absolute top-[30%] z-90" // Placed slightly behind the other keyboard
        style={{
          y: image3Y,
          x: keyboard3XPosition
        }}
      >
        <Image
          src="/images/keyboard3.png"
          alt="A third keyboard"
          width={120} // Different size for variety
          height={95}
          onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/100x80/333/FFF?text=keyboard3.png`; }}
        />
      </motion.div>


      <div className="absolute left-8 top-8 text-gray-600 text-sm">.03</div>
      
      {/* The z-10 class below ensures the main content stays on top of the new image */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-16 items-center max-w-7xl mx-auto">
        
        <div className="flex flex-col" style={{ transform: 'translateY(-8rem)' }}>
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

        <div className="space-y-8">
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