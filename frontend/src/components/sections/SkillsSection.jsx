import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { skills } from '@/data/portfolioData';
import { 
  Brain, BarChart3, Cloud, Code2, Wrench, Users,
  Sparkles
} from 'lucide-react';

const iconMap = {
  brain: Brain,
  chart: BarChart3,
  cloud: Cloud,
  code: Code2,
  tool: Wrench,
  users: Users
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('dataScienceML');
  
  const categories = Object.entries(skills).map(([key, value]) => ({
    id: key,
    ...value
  }));

  const activeSkills = skills[activeCategory];
  const ActiveIcon = iconMap[activeSkills.icon] || Brain;

  return (
    <section id="skills" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
            Skills & Expertise
          </span>
          <h2 className="section-title text-foreground mb-4">
            Technical{' '}
            <span className="text-gradient">Proficiency</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => {
            const Icon = iconMap[category.icon] || Brain;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-glow-sm'
                    : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Content */}
        <div className="max-w-5xl mx-auto">
          <Card className="bg-card border-border overflow-hidden">
            <CardContent className="p-0">
              {/* Header */}
              <div className="p-6 lg:p-8 border-b border-border bg-gradient-to-r from-primary/10 to-transparent">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                    <ActiveIcon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-foreground">
                      {activeSkills.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {activeSkills.skills.length} skills in this category
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="p-6 lg:p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {activeSkills.skills.map((skill, index) => (
                    <div 
                      key={index}
                      className="group"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-sm text-primary font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="absolute inset-y-0 left-0 bg-gradient-primary rounded-full transition-all duration-1000 ease-out group-hover:shadow-glow-sm"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Data Science Spotlight */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Data Science Spotlight
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Machine Learning', level: 95, icon: '🧠' },
              { name: 'Deep Learning', level: 90, icon: '🔮' },
              { name: 'NLP', level: 85, icon: '💬' },
              { name: 'Data Visualization', level: 95, icon: '📊' }
            ].map((skill, index) => (
              <Card 
                key={index}
                className="bg-card border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{skill.icon}</div>
                  <h4 className="font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {skill.name}
                  </h4>
                  <div className="relative w-20 h-20 mx-auto">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="40"
                        cy="40"
                        r="36"
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="none"
                        className="text-muted"
                      />
                      <circle
                        cx="40"
                        cy="40"
                        r="36"
                        stroke="url(#gradient)"
                        strokeWidth="6"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={`${skill.level * 2.26} 226`}
                        className="transition-all duration-1000"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="hsl(25, 95%, 53%)" />
                          <stop offset="100%" stopColor="hsl(35, 100%, 55%)" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-gradient">{skill.level}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Skills Tags */}
        <div className="mt-16">
          <h3 className="text-xl font-heading font-semibold text-foreground text-center mb-6">
            All Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {[
              'Python', 'TensorFlow', 'Scikit-Learn', 'NumPy', 'Pandas',
              'Power BI', 'DAX', 'Tableau', 'React.js', 'Redux',
              'JavaScript', 'HTML5', 'CSS3', 'GCP', 'Azure',
              'Microsoft 365', 'SharePoint', 'Power Apps', 'Power Automate',
              'SQL', 'BigQuery', 'GitHub', 'Jupyter', 'VS Code',
              'NLP', 'Deep Learning', 'Machine Learning', 'Data Mining',
              'Statistical Analysis', 'Agile', 'DevOps'
            ].map((skill, index) => (
              <span 
                key={index}
                className="skill-badge"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
