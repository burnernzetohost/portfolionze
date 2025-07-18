// src/app/layout.js
'use client'; 

import React, { useState, useEffect } from 'react';
import './globals.css';
import localFont from 'next/font/local';
import { Montserrat } from 'next/font/google';

import { MousePositionProvider } from '../contexts/MousePositionContext';
import CursorGradientOverlay from '../../components/CursorGradientOverlay';
import Header from '../../components/Header';
import LoadingScreen from '../../components/LoadingScreen';

// Font definitions remain the same...
const theseasonsLt = localFont({
  src: '../../public/fonts/Fontspring-DEMO-theseasons-lt.otf',
  display: 'swap',
  variable: '--font-theseasons-lt',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-montserrat',
});

const cocogooseProThin = localFont({
  src: '../../public/fonts/Cocogoose Pro Thin-trial.ttf',
  display: 'swap',
  variable: '--font-cocogoose-pro-thin',
});

export default function RootLayout({ children }) {
  // This state tracks if the initial animation inside LoadingScreen is done
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);
  
  // This state tracks if we should show the loader component at all
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Check session storage to see if the loader has run before
    if (sessionStorage.getItem('hasLoaderRun')) {
      setShowLoader(false);
      setIsAnimationFinished(true);
    }
  }, []);
  
  // This effect runs when the NZE animation completes
  useEffect(() => {
    if (isAnimationFinished && showLoader) {
      // Set a timer to remove the loader from the DOM after the fade-out is complete
      const timer = setTimeout(() => {
        setShowLoader(false);
        sessionStorage.setItem('hasLoaderRun', 'true');
      }, 800); // This duration should match the opacity transition duration

      return () => clearTimeout(timer);
    }
  }, [isAnimationFinished, showLoader]);

  const handleAnimationComplete = () => {
    setIsAnimationFinished(true);
  };

  return (
    <html lang="en" className={`${theseasonsLt.variable} ${montserrat.variable} ${cocogooseProThin.variable}`}>
      <body className="bg-[#17171c] text-white font-sans antialiased">
        
        {/* We now conditionally render the loader wrapper */}
        {showLoader && (
          // This div controls the FADE-OUT of the loading screen
          <div className={`fixed inset-0 z-50 transition-opacity duration-700 ease-in-out ${isAnimationFinished ? 'opacity-0' : 'opacity-100'}`}>
            <LoadingScreen onAnimationComplete={handleAnimationComplete} />
          </div>
        )}
        
        {/* This div controls the FADE-IN of the main content */}
        <div className={`transition-opacity duration-700 ease-in-out ${isAnimationFinished ? 'opacity-100' : 'opacity-0'}`}>
          <MousePositionProvider>
            <CursorGradientOverlay />
            <Header />
            {children}
          </MousePositionProvider>
        </div>

      </body>
    </html>
  );
}