import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { aboutMe, personalInfo, competitiveExams } from '@/data/portfolioData';
import { CheckCircle2, Briefcase, GraduationCap, Award, Code2, Trophy, Star } from 'lucide-react';

export const AboutSection = () => {
  const stats = [
    { icon: Briefcase, value: '4+', label: 'Years Experience' },
    { icon: Code2, value: '50+', label: 'Projects Delivered' },
    { icon: Award, value: '15+', label: 'Certifications' },
    { icon: GraduationCap, value: '8.76', label: 'CGPA' }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
            About Me
          </span>
          <h2 className="section-title text-foreground mb-4">
            Turning Data Into{' '}
            <span className="text-gradient">Actionable Insights</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            A passionate data professional with expertise in transforming complex datasets into strategic business value
          </p>
        </div>

        {/* Full Bio Section */}
        <Card className="bg-card border-border mb-12">
          <CardContent className="p-6 lg:p-10">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
              <Star className="w-6 h-6 text-primary" />
              My Journey & Expertise
            </h3>
            <div className="prose prose-invert max-w-none">
              {personalInfo.bio.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed mb-4 text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Additional Summary */}
            <Card className="bg-card border-border hover:border-primary/30 transition-colors duration-300">
              <CardContent className="p-6 lg:p-8">
                <h4 className="text-xl font-heading font-semibold text-foreground mb-4">
                  Current Focus & Parallel Work
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {aboutMe.summary}
                </p>
              </CardContent>
            </Card>

            {/* Highlights */}
            <div className="space-y-4">
              <h3 className="text-xl font-heading font-semibold text-foreground">
                What I Bring to the Table
              </h3>
              <div className="space-y-3">
                {aboutMe.highlights.map((highlight, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg bg-card/50 border border-border hover:border-primary/30 transition-colors duration-300"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Competitive Exams & Training */}
            <Card className="bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Trophy className="w-6 h-6 text-primary" />
                  <h4 className="text-lg font-heading font-semibold text-foreground">
                    Competitive Excellence
                  </h4>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  {competitiveExams.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {competitiveExams.exams.map((exam, index) => (
                    <span key={index} className="skill-badge text-xs">
                      {exam}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Content - Stats */}
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card 
                    key={index}
                    className="bg-card border-border hover:border-primary/30 hover:shadow-glow-sm transition-all duration-300 group"
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-3xl lg:text-4xl font-heading font-bold text-gradient mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Additional Info */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h4 className="text-lg font-heading font-semibold text-foreground mb-4">
                  Additional Achievements
                </h4>
                <div className="space-y-3">
                  {aboutMe.additionalInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{info}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tech Stack Preview */}
            <Card className="bg-card border-border">
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
                  Core Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Python', 'Power BI', 'Machine Learning', 'React.js',
                    'TensorFlow', 'GCP', 'Azure', 'SQL', 'DAX',
                    'SharePoint', 'Deep Learning', 'NLP', 'GenAI',
                    'Shopify', 'Magento', 'SEO', 'Big Data', 'Hadoop'
                  ].map((tech, index) => (
                    <span 
                      key={index}
                      className="skill-badge"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quote */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
              <blockquote className="text-lg text-foreground italic">
                "Data is the new oil, but like oil, it's valuable only when refined into insights that drive action."
              </blockquote>
              <p className="mt-4 text-primary font-medium">— My Data Philosophy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
