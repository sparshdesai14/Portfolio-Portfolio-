import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper, Sparkles, Cpu, Building2, BrainCircuit, Rocket, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/data/portfolioData';

const upcomingTopics = [
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    description: "Deep dives into latest AI trends, ML algorithms, and practical implementations"
  },
  {
    icon: Cpu,
    title: "Data Science Insights",
    description: "Real-world data science projects, tips, and industry best practices"
  },
  {
    icon: Building2,
    title: "Industry Updates",
    description: "News and insights from the energy sector and enterprise technology"
  },
  {
    icon: Rocket,
    title: "Career & Growth",
    description: "Professional development, learning paths, and career advice in tech"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const floatVariants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const pulseVariants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.5, 0.8, 0.5],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const BlogSection = () => {
  return (
    <section id="blog" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
      
      {/* Floating Orbs */}
      <motion.div
        variants={floatVariants}
        animate="animate"
        className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        variants={floatVariants}
        animate="animate"
        style={{ animationDelay: '1s' }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
      />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Coming Soon
          </motion.span>
          <h2 className="section-title text-foreground mb-4">
            Blog & <span className="text-gradient">Insights</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            A space where I&apos;ll share my thoughts on AI, Data Science, industry trends, 
            and lessons learned from my journey at {personalInfo.currentCompany}
          </p>
        </motion.div>

        {/* Coming Soon Card */}
        <motion.div
          variants={itemVariants}
          className="relative max-w-4xl mx-auto mb-16"
        >
          {/* Animated Border */}
          <motion.div
            variants={pulseVariants}
            animate="animate"
            className="absolute -inset-1 bg-gradient-to-r from-primary via-orange-400 to-primary rounded-2xl blur-sm"
          />
          
          <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-2xl p-8 sm:p-12 border border-primary/20">
            <div className="flex flex-col items-center text-center">
              {/* Animated Icon */}
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center mb-8 shadow-lg shadow-primary/30"
              >
                <Newspaper className="w-12 h-12 text-white" />
              </motion.div>
              
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4">
                Exciting Content is Brewing! ☕
              </h3>
              
              <p className="text-gray-300 text-lg max-w-xl mb-8 leading-relaxed">
                I&apos;m crafting insightful articles on Artificial Intelligence, Machine Learning breakthroughs, 
                data-driven strategies, and behind-the-scenes looks at enterprise BI solutions. 
                The first posts will drop soon — stay tuned!
              </p>
              
              {/* Animated Stats */}
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <motion.div
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="px-6 py-3 rounded-xl bg-primary/10 border border-primary/30"
                >
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-xs text-gray-400">Articles Planned</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="px-6 py-3 rounded-xl bg-orange-500/10 border border-orange-500/30"
                >
                  <div className="text-2xl font-bold text-orange-400">AI</div>
                  <div className="text-xs text-gray-400">Focused Content</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="px-6 py-3 rounded-xl bg-amber-500/10 border border-amber-500/30"
                >
                  <div className="text-2xl font-bold text-amber-400">2026</div>
                  <div className="text-xs text-gray-400">Launch Year</div>
                </motion.div>
              </div>

              {/* Notify Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="premium"
                  size="lg"
                  className="gap-2 px-8"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Bell className="w-4 h-4" />
                  Notify Me When It&apos;s Live
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Upcoming Topics Grid */}
        <motion.div variants={itemVariants}>
          <h3 className="text-xl font-heading font-semibold text-white text-center mb-8">
            Topics I&apos;ll Be Covering
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {upcomingTopics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -8,
                    boxShadow: "0 20px 40px -20px rgba(249, 115, 22, 0.3)"
                  }}
                  className="group p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-primary/50 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                  >
                    <Icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h4 className="font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                    {topic.title}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {topic.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom Message */}
        <motion.p
          variants={itemVariants}
          className="text-center text-gray-500 mt-12 text-sm"
        >
          💡 Have a topic suggestion? <a href="#contact" className="text-primary hover:underline">Let me know!</a>
        </motion.p>
      </motion.div>
    </section>
  );
};

export default BlogSection;
