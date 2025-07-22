// src/app/page.js
// This is your main home page. Place this file in your 'src/app' directory.

import HeroSection from '../../components/HeroSection';
import ProjectsSection from '../../components/ProjectsSection';
import AboutSection from '../../components/AboutSection';
import ContactSection from '../../components/ContactSection'; // 1. Import the new component

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection /> {/* 2. Add the component to your page */}
    </main>
  );
}