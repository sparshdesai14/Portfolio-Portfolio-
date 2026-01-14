import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/portfolioData';
import { ExternalLink, Github, ChevronRight, Layers, Database, Cloud, DollarSign, Code2, ShoppingCart } from 'lucide-react';

const categoryIcons = {
  'Business Intelligence': Layers,
  'Data Science': Database,
  'Cloud & Analytics': Cloud,
  'FinTech': DollarSign,
  'Web Development': Code2,
  'E-commerce': ShoppingCart
};

export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const categories = ['all', ...new Set(projects.map(p => p.category))];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
            Portfolio
          </span>
          <h2 className="section-title text-foreground mb-4">
            Featured{' '}
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in data science, business intelligence, web development, and e-commerce
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 capitalize ${
                activeFilter === category
                  ? 'bg-primary text-primary-foreground shadow-glow-sm'
                  : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
            const CategoryIcon = categoryIcons[project.category] || Layers;
            return (
              <Card 
                key={project.id}
                className="bg-card border-border hover:border-primary/30 transition-all duration-300 group overflow-hidden flex flex-col"
              >
                <CardContent className="p-0 flex flex-col flex-1">
                  {/* Card Header with Gradient */}
                  <div className="p-6 bg-gradient-to-br from-primary/10 via-transparent to-transparent border-b border-border">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <CategoryIcon className="w-6 h-6 text-primary" />
                      </div>
                      <Badge variant="outline" className="bg-card/50 border-primary/30 text-primary text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  {/* Card Body */}
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Highlights */}
                    <div className="space-y-2 mb-4 flex-1">
                      {project.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <ChevronRight className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* More Projects CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Want to see more of my work or discuss a project?
          </p>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="gap-2"
          >
            Let's Connect
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
