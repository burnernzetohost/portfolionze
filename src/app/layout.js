// src/app/layout.js
// This file defines the root layout for your Next.js application.
// It wraps all pages and is ideal for global styles, fonts, and shared UI components.

import React from 'react';
import './globals.css';
import localFont from 'next/font/local'; // Import localFont
import { Montserrat } from 'next/font/google'; // Import Montserrat from Google Fonts

// Load your local font for NZE
const theseasonsLt = localFont({
  src: '../../public/fonts/Fontspring-DEMO-theseasons-lt.otf', // Adjust path based on where you put the font
  display: 'swap',
  variable: '--font-theseasons-lt', // Define a CSS variable name for your font
});

// Load Montserrat font from Google Fonts
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700'], // Only load the bold weight
  variable: '--font-montserrat', // Define a CSS variable name for Montserrat
});

// Load Cocogoose Pro Thin-trial.ttf local font
const cocogooseProThin = localFont({
  src: '../../public/fonts/Cocogoose Pro Thin-trial.ttf', // Adjust path based on where you put the font
  display: 'swap',
  variable: '--font-cocogoose-pro-thin', // Define a CSS variable name for your font
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${theseasonsLt.variable} ${montserrat.variable} ${cocogooseProThin.variable}`}> {/* Apply all font variables to the html tag */}
      {/* Apply the desired background color directly here */}
      <body className="bg-[#17171c] text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
