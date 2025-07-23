// components/Header.jsx
'use client';

import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 right-0 p-6 md:p-8 flex justify-between items-center z-50">
        {/* Top left text */}
        <div className="text-gray-400 text-xs uppercase tracking-widest">
          A FREELANCE WEB-DEVELOPER
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm uppercase">Projects</a></li>
            <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm uppercase">Contact</a></li>
            <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm uppercase">About</a></li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-400 z-50"
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-40 flex flex-col items-center justify-center md:hidden">
          <nav>
            <ul className="flex flex-col space-y-8 text-center">
              <li><a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-white text-2xl uppercase">Projects</a></li>
              <li><a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-white text-2xl uppercase">Contact</a></li>
              <li><a href="#about" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-white text-2xl uppercase">About</a></li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;