import React from 'react';
import { Toaster } from '@/components/ui/sonner';

// Layout Components
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

// Section Components
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { TimelineSection } from '@/components/sections/TimelineSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { DataScienceSection } from '@/components/sections/DataScienceSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { BlogSection } from '@/components/sections/BlogSection';
import { HobbiesSection } from '@/components/sections/HobbiesSection';
import { ContactSection } from '@/components/sections/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Noise Overlay for texture */}
      <div className="noise-overlay" />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <TimelineSection />
        <ExperienceSection />
        <DataScienceSection />
        <SkillsSection />
        <ProjectsSection />
        <BlogSection />
        <HobbiesSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Toast Notifications */}
      <Toaster 
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'hsl(var(--card))',
            border: '1px solid hsl(var(--border))',
            color: 'hsl(var(--foreground))',
          },
        }}
      />
    </div>
  );
}

export default App;
