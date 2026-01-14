import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/data/portfolioData';
import { ArrowDown, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, Target, Briefcase, GraduationCap, Award, Sparkles } from 'lucide-react';

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
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-primary/15 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      
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
                {personalInfo.tagline}. Specializing in AI, Machine Learning, GenAI, Big Data, and Business Intelligence to drive data-driven decision making.
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

          {/* Right Content - Stats & Highlights Cards (No Profile Picture) */}
          <div 
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Experience Card */}
              <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-heading font-bold text-gradient mb-1">4+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>

              {/* Projects Card */}
              <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-heading font-bold text-gradient mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>

              {/* Education Card */}
              <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-heading font-bold text-gradient mb-1">8.76</div>
                <div className="text-sm text-muted-foreground">CGPA - KIIT</div>
              </div>

              {/* Currently Learning Card */}
              <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div className="text-lg font-heading font-bold text-primary mb-1">Learning</div>
                <div className="text-xs text-muted-foreground">GenAI, Spark, PyTorch</div>
              </div>

              {/* Goal Card - Full Width */}
              <div className="col-span-2 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/30">
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-primary font-semibold mb-1">Career Goal</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      To become a strategic analyst proficient in both Data Science and Business/Finance, driving digital transformation and technology-led growth.
                    </p>
                  </div>
                </div>
              </div>

              {/* Currently Pursuing Card - Full Width */}
              <div className="col-span-2 p-4 rounded-xl bg-card border border-border">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Currently Pursuing</p>
                    <p className="text-xs text-muted-foreground">Diploma in Executive Leadership & Strategic Innovation - AMA (Aug 2025 - Feb 2026)</p>
                  </div>
                </div>
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
