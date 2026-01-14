import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { skills } from '@/data/portfolioData';
import { 
  Brain, BarChart3, Cloud, Code2, Wrench, Users, ShoppingCart, Database,
  Sparkles
} from 'lucide-react';

const iconMap = {
  brain: Brain,
  chart: BarChart3,
  cloud: Cloud,
  code: Code2,
  tool: Wrench,
  users: Users,
  shopping: ShoppingCart,
  database: Database
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('frontendDev');
  
  const categories = Object.entries(skills).map(([key, value]) => ({
    id: key,
    ...value
  }));

  // Filter out data science (has its own section) and show other skills
  const filteredCategories = categories.filter(cat => 
    !['dataScienceML'].includes(cat.id)
  );

  const activeSkills = skills[activeCategory];
  const ActiveIcon = iconMap[activeSkills?.icon] || Brain;

  return (
    <section id="skills" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
            Technical Skills
          </span>
          <h2 className="section-title text-foreground mb-4">
            Professional{' '}
            <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills across multiple domains
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filteredCategories.map((category) => {
            const Icon = iconMap[category.icon] || Brain;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-glow-sm'
                    : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{category.title.split(' ')[0]}</span>
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
                      {activeSkills?.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {activeSkills?.skills?.length} skills in this category
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="p-6 lg:p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {activeSkills?.skills?.map((skill, index) => (
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

        {/* All Skills Tags */}
        <div className="mt-16">
          <h3 className="text-xl font-heading font-semibold text-foreground text-center mb-6">
            All Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
            {[
              // Web Dev
              'React.js', 'Redux', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap',
              // E-commerce
              'Shopify', 'Magento', 'WordPress', 'E-commerce Design',
              // SEO & Marketing
              'SEO', 'Digital Marketing', 'SEO Management', 'Google Analytics',
              // Cloud & Enterprise
              'GCP', 'Azure', 'Microsoft 365', 'SharePoint', 'Power Apps', 'Power Automate',
              // Database
              'SQL', 'SQL Server', 'MongoDB', 'Data Warehousing', 'DBMS',
              // BI
              'Power BI', 'DAX', 'Tableau', 'Dashboard Design',
              // Tools
              'VS Code', 'GitHub', 'Jupyter', 'Agile', 'DevOps', 'Java',
              // Professional
              'Client Management', 'Vendor Management', 'IT Infrastructure',
              'Website Designing', 'Website Management', 'Team Leadership'
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
