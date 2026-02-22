import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Briefcase, GraduationCap, Rocket, Award } from 'lucide-react';

const timelineData = [
  {
    year: "2017",
    title: "Started B.Tech",
    description: "Joined KIIT University for Computer Science",
    icon: GraduationCap,
    type: "education"
  },
  {
    year: "2019",
    title: "NLP Sentiment Analysis",
    description: "Social Media Sentiments - Galwan Crisis",
    icon: Award,
    type: "project"
  },
  {
    year: "2020",
    title: "HighRadius Internship",
    description: "FinTech ML Project Development",
    icon: Rocket,
    type: "internship"
  },
  {
    year: "2020",
    title: "COVID Analysis Dashboard",
    description: "Final Year Project - Data Analysis",
    icon: Award,
    type: "project"
  },
  {
    year: "2021",
    title: "B.Tech Completed",
    description: "Graduated with 8.76 CGPA from KIIT",
    icon: GraduationCap,
    type: "education"
  },
  {
    year: "2021",
    title: "Elsner Internship",
    description: "Web Development & Digital Marketing",
    icon: Rocket,
    type: "internship"
  },
  {
    year: "2022",
    title: "Joined Infosys",
    description: "System Engineer - Pune, Mysore Training",
    icon: Briefcase,
    type: "work"
  },
  {
    year: "2022",
    title: "Ticketing System Project",
    description: "End-to-end React.js development",
    icon: Award,
    type: "project"
  },
  {
    year: "2023",
    title: "Left Infosys",
    description: "Completed 1 year 10 months",
    icon: Briefcase,
    type: "work"
  },
  {
    year: "2023-24",
    title: "Unmessenger Internship",
    description: "Data Science & ML on GCP",
    icon: Rocket,
    type: "internship"
  },
  {
    year: "2024",
    title: "DataIsGood Certifications",
    description: "Advanced ML & Data Analytics",
    icon: Award,
    type: "achievement"
  },
  {
    year: "2025",
    title: "Joined Advait",
    description: "Lead – Data, AI & Analytics (BI)",
    icon: Briefcase,
    type: "work"
  },
  {
    year: "2025",
    title: "AMA Diploma Started",
    description: "Executive Leadership & Strategic Innovation",
    icon: GraduationCap,
    type: "education"
  },
  {
    year: "2026",
    title: "Target: Full Proficiency",
    description: "GenAI, Big Data, Hadoop, Spark, PyTorch",
    icon: Award,
    type: "goal"
  }
];

export const TimelineSection = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    window.addEventListener('resize', checkScrollButtons);
    return () => window.removeEventListener('resize', checkScrollButtons);
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScrollButtons, 300);
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'work': return 'bg-primary';
      case 'internship': return 'bg-orange-500';
      case 'education': return 'bg-amber-500';
      case 'project': return 'bg-orange-400';
      case 'achievement': return 'bg-yellow-500';
      case 'goal': return 'bg-gradient-to-r from-primary to-orange-400';
      default: return 'bg-primary';
    }
  };

  return (
    <section id="timeline" className="py-16 lg:py-24 relative overflow-hidden bg-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      {/* Decorative Gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
            My Journey
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white">
            Growth <span className="text-gradient">Story</span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary/90 text-white flex items-center justify-center shadow-lg hover:bg-primary transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}
          
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary/90 text-white flex items-center justify-center shadow-lg hover:bg-primary transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Scrollable Timeline */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScrollButtons}
            className="overflow-x-auto scrollbar-hide pb-8 pt-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="relative min-w-max px-8">
              {/* Timeline Line */}
              <div className="absolute top-[60px] left-8 right-8 h-1 bg-gradient-to-r from-primary via-orange-500 to-primary rounded-full" />
              
              {/* Timeline Items */}
              <div className="flex gap-0">
                {timelineData.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center min-w-[180px] relative group"
                    >
                      {/* Year */}
                      <div className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
                        {item.year}
                      </div>
                      
                      {/* Dot on timeline */}
                      <div className={`w-5 h-5 rounded-full ${getTypeColor(item.type)} shadow-lg shadow-primary/50 z-10 group-hover:scale-125 transition-transform`} />
                      
                      {/* Connector Line */}
                      <div className="w-0.5 h-8 bg-gradient-to-b from-primary/50 to-transparent" />
                      
                      {/* Content Card */}
                      <div className="mt-2 p-4 rounded-xl bg-zinc-900/80 border border-primary/20 backdrop-blur-sm max-w-[160px] group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all">
                        <div className={`w-10 h-10 rounded-lg ${getTypeColor(item.type)} flex items-center justify-center mb-3`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-white font-semibold text-sm mb-1 leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 text-xs leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 pt-4 border-t border-zinc-800">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-xs text-gray-400">Work Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-500" />
              <span className="text-xs text-gray-400">Internship</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <span className="text-xs text-gray-400">Education</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-400" />
              <span className="text-xs text-gray-400">Project</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="text-xs text-gray-400">Achievement</span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom scrollbar hide style */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default TimelineSection;
