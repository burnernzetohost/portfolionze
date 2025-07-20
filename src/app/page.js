// src/app/page.js
// This is your main home page. Place this file in your 'src/app' directory.

import HeroSection from '../../components/HeroSection'; // Path from src/app/ to root/components/
import ProjectsSection from '../../components/ProjectsSection'; // Path from src/app/ to root/components/
import AboutSection from '../../components/AboutSection';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      {/* You will add the ContactSection here later */}
    </main>
  );
}