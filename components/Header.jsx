// components/Header.jsx
// Create a 'components' folder in your project root (or 'src/components' if you chose src/)
// and place this file inside it.

import React from 'react'; // React import is good practice, though not always strictly needed for functional components in Next.js 13+

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 p-8 flex justify-between items-center z-10">
      {/* Top left text "A JUNIOR WEB-DESIGNER" */}
      <div className="text-gray-400 text-xs uppercase tracking-widest">
        A FREELANCE WEB-DEVELOPER
      </div>

      {/* Navigation links */}
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm uppercase">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm uppercase">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm uppercase">
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
