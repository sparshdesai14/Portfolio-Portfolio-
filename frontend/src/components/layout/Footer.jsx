import React from 'react';
import { personalInfo, navLinks } from '@/data/portfolioData';
import { Linkedin, Mail, Phone, Heart, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-card border-t border-border">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-lg">
                SD
              </div>
              <span className="font-heading font-semibold text-foreground text-lg">
                Sparsh Desai
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Senior Data Analyst & Business Intelligence Lead specializing in transforming complex data into strategic business insights.
            </p>
            <div className="flex gap-3">
              <a 
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a 
                href={`tel:${personalInfo.phone}`}
                className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <nav className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm py-1"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#hobbies"
                className="text-muted-foreground hover:text-primary transition-colors text-sm py-1"
              >
                Hobbies
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">
              Get In Touch
            </h4>
            <div className="space-y-3">
              <a 
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                {personalInfo.email}
              </a>
              <a 
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                {personalInfo.phone}
              </a>
              <p className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-0.5">📍</span>
                {personalInfo.location}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              © {currentYear} Sparsh Desai. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-primary fill-primary" /> and lots of data
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-glow flex items-center justify-center hover:scale-110 transition-transform duration-300 z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
