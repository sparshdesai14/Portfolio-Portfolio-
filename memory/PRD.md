# Sparsh Desai - Portfolio Website PRD

## Original Problem Statement
Create a personal portfolio/CV website for "Sparsh Desai", a Senior Data Analyst & Business Intelligence Lead with black and orange theme.

## Core Requirements
- **Theme:** Black and orange
- **Sections:** Hero, About, Career Timeline, Experience (tabbed), Data Science, Skills, Projects, Hobbies, Contact
- **Contact:** Form opens pre-filled WhatsApp message
- **Responsive:** Desktop and mobile
- **CV Download:** Included

## User Persona
- **Name:** Sparsh Desai
- **Title:** Senior Data Analyst & Business Intelligence Lead
- **Company:** Advait Energy Transitions Limited
- **Location:** Ahmedabad, Gujarat, India

---

## What's Been Implemented

### Completed Features (Jan 2026)
1. ✅ Full responsive portfolio website (React + FastAPI)
2. ✅ HeroSection with stats (no profile picture)
3. ✅ AboutSection with detailed biography
4. ✅ **TimelineSection** - Horizontal scrollable career journey
5. ✅ ExperienceSection with tabbed layout (Work, Internships, Freelancing, Education, Certifications)
6. ✅ DataScienceSection for ML/AI skills
7. ✅ SkillsSection, ProjectsSection, HobbiesSection
8. ✅ ContactSection with WhatsApp redirect
9. ✅ Mobile navigation fix (solid background)
10. ✅ CV download link

### Blog Section Added (Jan 14, 2026)
- ✅ New "Blog & Insights" section with "Coming Soon" message
- ✅ Animated card with floating orbs, glowing effects
- ✅ Topic cards: AI & ML, Data Science, Industry Updates, Career & Growth
- ✅ "Notify Me When It's Live" button
- ✅ Enhanced CSS animations (hover-lift, glow, scale, shimmer)
- ✅ framer-motion installed for animations
- ✅ Blog link added to navigation

---

## Prioritized Backlog

### P0 - Critical
None currently

### P1 - Should Fix
1. Fix 15 frontend linting errors (unescaped characters)
2. Backend cleanup - remove unused contact form code (MongoDB/SMTP)

### P2 - Nice to Have
- Code quality improvements
- Performance optimization

---

## Technical Architecture
- **Frontend:** React, Tailwind CSS, shadcn/ui, Framer Motion
- **Backend:** Python, FastAPI
- **Database:** MongoDB (not actively used - contact form uses WhatsApp)
- **Data Source:** `/app/frontend/src/data/portfolioData.js`

## Key Files
- `/app/frontend/src/data/portfolioData.js` - All content data
- `/app/frontend/src/components/sections/TimelineSection.jsx` - Career timeline
- `/app/frontend/src/App.js` - Main component
- `/app/frontend/src/components/sections/ContactSection.jsx` - WhatsApp redirect
- `/app/backend/server.py` - Backend (contains deprecated contact endpoints)

---

## Notes
- Contact form functionality uses client-side WhatsApp redirect (not backend)
- Backend contact endpoints are deprecated but code still exists
