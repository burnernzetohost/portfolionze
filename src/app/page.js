// src/app/page.js
// This is your main home page. Place this file in your 'src/app' directory.

import Header from '../../components/Header'; // Corrected path
import HeroSection from '../../components/HeroSection'; // Corrected path
import ProjectsSection from '../../components/ProjectsSection'; // Corrected path

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-900"> {/* Ensure main has dark background */}
      <Header />
      <HeroSection />
      <ProjectsSection /> {/* Include the ProjectsSection here */}
      {/* You will add the ContactSection here later */}
    </main>
  );
}
