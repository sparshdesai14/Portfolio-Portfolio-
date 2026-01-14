import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { navLinks, personalInfo } from '@/data/portfolioData';
import { Menu, X, Download, Linkedin, Mail } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-xl border-b border-border shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-lg group-hover:shadow-glow transition-shadow duration-300">
              SD
            </div>
            <span className="hidden sm:block font-heading font-semibold text-foreground">
              Sparsh Desai
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Linkedin className="w-5 h-5" />
              </Button>
            </a>
            <a href={`mailto:${personalInfo.email}`}>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Mail className="w-5 h-5" />
              </Button>
            </a>
            <a href={personalInfo.cvUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="premium" size="sm" className="gap-2">
                <Download className="w-4 h-4" />
                Download CV
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2 border-t border-border">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 px-4 flex gap-3">
              <a href={personalInfo.cvUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button variant="premium" className="w-full gap-2">
                  <Download className="w-4 h-4" />
                  Download CV
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
