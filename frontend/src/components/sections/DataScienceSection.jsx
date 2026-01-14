import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { skills } from '@/data/portfolioData';
import { 
  Brain, Database, Cloud, Code2, ShoppingCart, Wrench, Users,
  Sparkles, TrendingUp
} from 'lucide-react';

export const DataScienceSection = () => {
  const dsSkills = skills.dataScienceML.skills;
  const biSkills = skills.businessIntelligence.skills;
  const dbSkills = skills.databaseManagement.skills;

  const allDSSkills = [
    // Core Data Science
    { name: 'Machine Learning', category: 'Core' },
    { name: 'Deep Learning', category: 'Core' },
    { name: 'Natural Language Processing (NLP)', category: 'Core' },
    { name: 'Generative AI (GenAI)', category: 'Core' },
    { name: 'Artificial Intelligence', category: 'Core' },
    { name: 'Predictive Modeling', category: 'Core' },
    { name: 'Statistical Analysis', category: 'Core' },
    
    // Big Data & Analytics
    { name: 'Big Data Analytics', category: 'Big Data' },
    { name: 'Hadoop', category: 'Big Data' },
    { name: 'Data Mining', category: 'Big Data' },
    { name: 'Data Warehousing', category: 'Big Data' },
    { name: 'ETL Processes', category: 'Big Data' },
    { name: 'BigQuery', category: 'Big Data' },
    
    // Tools & Libraries
    { name: 'Python', category: 'Tools' },
    { name: 'TensorFlow', category: 'Tools' },
    { name: 'Scikit-Learn', category: 'Tools' },
    { name: 'NumPy', category: 'Tools' },
    { name: 'Pandas', category: 'Tools' },
    { name: 'Jupyter Notebook', category: 'Tools' },
    { name: 'Kaggle', category: 'Tools' },
    
    // Cloud & AI Platforms
    { name: 'Google Cloud Platform (GCP)', category: 'Cloud' },
    { name: 'Virtual AI', category: 'Cloud' },
    { name: 'Microsoft Azure', category: 'Cloud' },
    
    // Business Intelligence
    { name: 'Power BI', category: 'BI' },
    { name: 'DAX', category: 'BI' },
    { name: 'Tableau', category: 'BI' },
    { name: 'Data Visualization', category: 'BI' },
    { name: 'Dashboard Design', category: 'BI' },
    
    // Database
    { name: 'SQL', category: 'Database' },
    { name: 'Database Management (DBMS)', category: 'Database' },
    { name: 'SQL Server', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'Digital Warehouse Management', category: 'Database' },
    
    // Techniques
    { name: 'Supervised Learning', category: 'Techniques' },
    { name: 'Unsupervised Learning', category: 'Techniques' },
    { name: 'Data Cleaning', category: 'Techniques' },
    { name: 'Data Extraction', category: 'Techniques' },
    { name: 'Feature Engineering', category: 'Techniques' },
    { name: 'Model Optimization', category: 'Techniques' }
  ];

  const categories = [
    { name: 'Core', icon: Brain, color: 'primary' },
    { name: 'Big Data', icon: Database, color: 'primary' },
    { name: 'Tools', icon: Wrench, color: 'primary' },
    { name: 'Cloud', icon: Cloud, color: 'primary' },
    { name: 'BI', icon: TrendingUp, color: 'primary' },
    { name: 'Database', icon: Database, color: 'primary' },
    { name: 'Techniques', icon: Code2, color: 'primary' }
  ];

  return (
    <section id="datascience" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 inline mr-2" />
            Data Science Expertise
          </span>
          <h2 className="section-title text-foreground mb-4">
            Data Science &{' '}
            <span className="text-gradient">AI Skills</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Comprehensive expertise in Data Science, Machine Learning, AI, Big Data, and Business Intelligence
          </p>
        </div>

        {/* Skills by Category */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category, catIndex) => {
            const Icon = category.icon;
            const categorySkills = allDSSkills.filter(s => s.category === category.name);
            
            return (
              <Card key={catIndex} className="bg-card border-border hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-foreground">
                      {category.name}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill, idx) => (
                      <span key={idx} className="skill-badge text-xs">
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Highlight Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { name: 'Machine Learning', level: 95, icon: '🧠', desc: 'Model Development & Deployment' },
            { name: 'Deep Learning', level: 90, icon: '🔮', desc: 'Neural Networks & AI' },
            { name: 'NLP & GenAI', level: 85, icon: '💬', desc: 'Language Models & Generation' },
            { name: 'Big Data', level: 85, icon: '📊', desc: 'Hadoop, BigQuery & Analytics' }
          ].map((skill, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300 group"
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h4 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {skill.name}
                </h4>
                <p className="text-xs text-muted-foreground mb-4">{skill.desc}</p>
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
                      stroke="url(#gradient-ds)"
                      strokeWidth="6"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${skill.level * 2.26} 226`}
                      className="transition-all duration-1000"
                    />
                    <defs>
                      <linearGradient id="gradient-ds" x1="0%" y1="0%" x2="100%" y2="0%">
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

        {/* Currently Working On */}
        <Card className="bg-gradient-to-br from-primary/10 to-transparent border-primary/30">
          <CardContent className="p-6 lg:p-8">
            <h3 className="text-xl font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              Currently Working On
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: 'Generative AI', desc: 'LLMs & Text Generation' },
                { name: 'Virtual AI', desc: 'Cloud-based AI Solutions' },
                { name: 'Advanced Analytics', desc: 'Predictive & Prescriptive' },
                { name: 'MLOps', desc: 'Model Deployment & Monitoring' }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-card/50 border border-border">
                  <h4 className="font-semibold text-primary mb-1">{item.name}</h4>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DataScienceSection;
