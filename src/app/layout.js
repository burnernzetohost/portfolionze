// src/app/layout.js
// This file defines the root layout for your Next.js application.
// It wraps all pages and is ideal for global styles, fonts, and shared UI components.

import React from 'react';
import './globals.css';
import localFont from 'next/font/local';
import { Montserrat } from 'next/font/google';

// CORRECTED IMPORT PATHS for contexts and components
import { MousePositionProvider } from '../contexts/MousePositionContext'; // Path from src/app/ to src/contexts/
import CursorGradientOverlay from '../../components/CursorGradientOverlay'; // Path from src/app/ to root/components/
import Header from '../../components/Header'; // Path from src/app/ to root/components/

// Load your local font for NZE
const theseasonsLt = localFont({
  src: '../../public/fonts/Fontspring-DEMO-theseasons-lt.otf',
  display: 'swap',
  variable: '--font-theseasons-lt',
});

// Load Montserrat font from Google Fonts
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-montserrat',
});

// Load Cocogoose Pro Thin-trial.ttf local font
const cocogooseProThin = localFont({
  src: '../../public/fonts/Cocogoose Pro Thin-trial.ttf',
  display: 'swap',
  variable: '--font-cocogoose-pro-thin',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${theseasonsLt.variable} ${montserrat.variable} ${cocogooseProThin.variable}`}>
      <body className="bg-[#17171c] text-white font-sans antialiased">
        <MousePositionProvider>
          <CursorGradientOverlay />
          <Header />
          {children}
        </MousePositionProvider>
      </body>
    </html>
  );
}