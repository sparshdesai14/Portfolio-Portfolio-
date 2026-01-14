import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { experience, education, certifications } from '@/data/portfolioData';
import { 
  Briefcase, GraduationCap, Award, MapPin, Calendar, 
  Building2, ChevronRight, ExternalLink 
} from 'lucide-react';

export const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const tabs = [
    { id: 'experience', label: 'Work Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'certifications', label: 'Certifications', icon: Award }
  ];

  return (
    <section id="experience" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
            My Journey
          </span>
          <h2 className="section-title text-foreground mb-4">
            Experience &{' '}
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            A timeline of my professional growth and academic achievements
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground shadow-glow-sm'
                    : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />
              
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <div key={exp.id} className="relative pl-0 md:pl-16">
                    {/* Timeline Dot */}
                    <div className="absolute left-4 top-8 w-4 h-4 rounded-full bg-primary shadow-glow hidden md:block" />
                    
                    <Card className={`bg-card border-border hover:border-primary/30 transition-all duration-300 ${exp.current ? 'border-primary/50' : ''}`}>
                      <CardContent className="p-6 lg:p-8">
                        {/* Header */}
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              {exp.current && (
                                <Badge className="bg-primary/20 text-primary border-primary/30">
                                  Current
                                </Badge>
                              )}
                              <span className="text-sm text-muted-foreground">{exp.type}</span>
                            </div>
                            <h3 className="text-xl lg:text-2xl font-heading font-bold text-foreground">
                              {exp.title}
                            </h3>
                            {exp.subtitle && (
                              <p className="text-primary font-medium mt-1">{exp.subtitle}</p>
                            )}
                          </div>
                        </div>

                        {/* Company & Location */}
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-primary" />
                            {exp.company}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-primary" />
                            {exp.location}
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-primary" />
                            {exp.duration} · {exp.period}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Highlights */}
                        <div className="space-y-2 mb-6">
                          {exp.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{highlight}</span>
                            </div>
                          ))}
                        </div>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, idx) => (
                            <span key={idx} className="skill-badge text-xs">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education Tab */}
          {activeTab === 'education' && (
            <div className="space-y-6">
              {education.map((edu) => (
                <Card key={edu.id} className="bg-card border-border hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6 lg:p-8">
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      {/* Icon */}
                      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-8 h-8 text-primary" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-primary font-medium mb-2">{edu.field}</p>
                        <p className="text-muted-foreground mb-3">{edu.institution}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-primary" />
                            {edu.location}
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-primary" />
                            {edu.duration}
                          </div>
                        </div>
                      </div>
                      
                      {/* CGPA Badge */}
                      <div className="text-center md:text-right">
                        <div className="inline-block px-6 py-3 rounded-xl bg-primary/10 border border-primary/30">
                          <div className="text-2xl font-heading font-bold text-gradient">{edu.cgpa}</div>
                          <div className="text-xs text-muted-foreground">CGPA</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Certifications Tab */}
          {activeTab === 'certifications' && (
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <Card key={cert.id} className="bg-card border-border hover:border-primary/30 hover:shadow-glow-sm transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Award className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground mb-1 line-clamp-2">
                          {cert.name}
                        </h3>
                        <p className="text-sm text-primary mb-1">{cert.issuer}</p>
                        <p className="text-xs text-muted-foreground">{cert.date}</p>
                        {cert.credentialId && (
                          <p className="text-xs text-muted-foreground mt-1">
                            ID: {cert.credentialId}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
