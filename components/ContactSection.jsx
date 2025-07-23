'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollDrivenTextAnimation from './ScrollDrivenTextAnimation';

const ContactSection = () => {
  const email = "aryanp.5501@gmail.com"; // Replace with your actual email address

  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col justify-center items-center text-center p-8 md:p-16 overflow-hidden">
      {/* Section Number */}
      <div className="absolute left-8 top-8 text-gray-600 text-sm">.04</div>

      <div className="max-w-4xl mx-auto">
        {/* Animated Title */}
        <ScrollDrivenTextAnimation
          text="Get in Touch"
          el="h2"
          className="text-6xl md:text-8xl font-bold uppercase text-[#dddddd] tracking-widest"
          style={{ fontFamily: 'var(--font-montserrat)' }}
          offset={['start end', 'start center']}
        />

        {/* Subtitle / Call to Action */}
        <motion.p
          className="text-lg md:text-xl text-gray-400 mt-8 max-w-2xl mx-auto"
          style={{
            fontFamily: 'var(--font-cocogoose-pro-thin)',
            opacity: useTransform(scrollYProgress, [0.4, 0.6], [0, 1])
          }}
        >
          Have a project in mind or just want to say hello? My inbox is always open. I'll get back to you as soon as possible.
        </motion.p>

        {/* Email Link */}
        <motion.div className="mt-12"
          style={{
            opacity: useTransform(scrollYProgress, [0.5, 0.7], [0, 1])
          }}
        >
          <a
            href={`mailto:${email}`}
            className="text-2xl md:text-4xl text-[#dddddd] font-bold tracking-wider hover:text-white transition-all duration-300 ease-in-out p-4"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            {email}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;