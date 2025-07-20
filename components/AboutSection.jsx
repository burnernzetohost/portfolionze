'use client';

import React from 'react';
import ScrollDrivenTextAnimation from './ScrollDrivenTextAnimation';
import ScrollBlurText from './ScrollBlurText';

const AboutSection = () => {
  const p1 = "I'm a passionate and creative web developer with a keen eye for design and a drive to build beautiful, functional, and user-friendly websites. I specialize in front-end development and I'm always eager to learn new technologies and improve my skills.";
  const p2 = "When I'm not coding, you can find me exploring new coffee shops, reading a good book, or working on personal projects to expand my portfolio.";

  return (
    <section className="relative h-screen flex flex-col justify-center text-left p-8 md:p-16 overflow-hidden">
      <div className="absolute left-8 top-8 text-gray-600 text-sm">.03</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 items-center max-w-7xl mx-auto">
        
        <div className="text-left" style={{ transform: 'translateY(-10rem)' }}>
          <ScrollDrivenTextAnimation 
            text="About"
            className="text-7xl md:text-9xl font-bold uppercase text-[#dddddd] tracking-widest"
            style={{ fontFamily: 'var(--font-montserrat)' }}
            offset={['start end', 'start center']} // For the title
          />
        </div>

        <div className="space-y-8">
          <ScrollBlurText 
            text={p1} 
            className="text-lg md:text-xl text-gray-400 leading-relaxed flex flex-wrap" 
            style={{ fontFamily: 'var(--font-cocogoose-pro-thin)' }} 
            offset={['start end', '0 0.45']} // A slightly different offset for the paragraphs
          />
           <ScrollBlurText 
            text={p2} 
            className="text-lg md:text-xl text-gray-400 leading-relaxed flex flex-wrap" 
            style={{ fontFamily: 'var(--font-cocogoose-pro-thin)' }} 
            offset={['start end', '0 0.6']} // Keeping it consistent for both paragraphs
          />
        </div>
        
      </div>
    </section>
  );
};

export default AboutSection;