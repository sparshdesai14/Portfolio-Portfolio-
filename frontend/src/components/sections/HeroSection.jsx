import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/data/portfolioData';
import { ArrowDown, Linkedin, Mail, Phone, MapPin, Download, ExternalLink } from 'lucide-react';

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      {/* Decorative Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div 
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for opportunities
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-foreground leading-tight">
                Hi, I'm{' '}
                <span className="text-gradient">{personalInfo.name.split(' ')[0]}</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-medium text-muted-foreground">
                {personalInfo.title}
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
                {personalInfo.tagline}. Specializing in AI, Machine Learning, and Business Intelligence to drive data-driven decision making.
              </p>
            </div>

            {/* Location & Company */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                {personalInfo.location}
              </div>
              <div className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-primary" />
                {personalInfo.currentCompany}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href={personalInfo.cvUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="premium" size="lg" className="gap-2">
                  <Download className="w-5 h-5" />
                  Download CV
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" size="lg" className="gap-2">
                  <Mail className="w-5 h-5" />
                  Get in Touch
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm text-muted-foreground">Connect with me:</span>
              <div className="flex gap-3">
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-glow-sm transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-glow-sm transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a 
                  href={`tel:${personalInfo.phone}`}
                  className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-glow-sm transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div 
            className={`relative flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30 scale-110" />
              
              {/* Image Container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-card border border-border rounded-full shadow-lg">
                <p className="text-sm font-medium text-foreground whitespace-nowrap">
                  <span className="text-primary">4+</span> Years Experience
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button 
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
