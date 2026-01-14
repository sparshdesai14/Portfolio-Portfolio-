import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { hobbies, personalInfo } from '@/data/portfolioData';
import { 
  PenTool, FileText, Music, Rss, Palette, MapPin, 
  Headphones, ExternalLink, Heart 
} from 'lucide-react';

const iconMap = {
  'pen': PenTool,
  'file-text': FileText,
  'music': Music,
  'rss': Rss,
  'palette': Palette,
  'map-pin': MapPin,
  'headphones': Headphones,
  'book': FileText
};

export const HobbiesSection = () => {
  return (
    <section id="hobbies" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
            Beyond Work
          </span>
          <h2 className="section-title text-foreground mb-4">
            Passions &{' '}
            <span className="text-gradient">Hobbies</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            When I&apos;m not analyzing data or building dashboards, here&apos;s what keeps me inspired
          </p>
        </div>

        {/* Hobbies Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
          {hobbies.map((hobby) => {
            const Icon = iconMap[hobby.icon] || Heart;
            return (
              <Card 
                key={hobby.id}
                className="bg-card border-border hover:border-primary/30 transition-all duration-300 group hover:shadow-glow-sm"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {hobby.name}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {hobby.description}
                      </p>
                      {hobby.link && (
                        <a 
                          href={hobby.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-2"
                        >
                          View More <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Shayari Spotlight */}
        <Card className="bg-gradient-to-br from-primary/10 via-card to-card border-primary/30 overflow-hidden">
          <CardContent className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <PenTool className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-foreground">
                      Shayari & Articles
                    </h3>
                    <p className="text-primary">My Creative Corner</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Poetry and writing have always been my way of expressing emotions and connecting with others. 
                  I write Shayari in Hindi and Urdu, capturing moments, feelings, and life&apos;s beautiful complexities 
                  through words. I also write articles on technology, life lessons, and personal growth.
                </p>
                <a 
                  href={personalInfo.shayariWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="premium" className="gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Visit My Shayari Website
                  </Button>
                </a>
              </div>
              
              {/* Sample Shayari */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl" />
                <div className="relative p-6 lg:p-8 rounded-xl border border-primary/20 bg-card/50">
                  <div className="text-5xl text-primary/20 font-serif absolute top-4 left-4">&ldquo;</div>
                  <blockquote className="text-lg lg:text-xl text-foreground italic leading-relaxed pl-8 pt-4">
                    जिंदगी के सफर में कुछ लम्हे ऐसे होते हैं,
                    <br />
                    जो डेटा से नहीं, दिल से समझे जाते हैं।
                  </blockquote>
                  <div className="mt-4 pl-8 text-primary font-medium">
                    — Sparsh Desai
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HobbiesSection;
