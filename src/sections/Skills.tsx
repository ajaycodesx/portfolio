'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import { skills, skillCategories } from '@/data/skills';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('Frontend');
  const [mobileActiveCategory, setMobileActiveCategory] = useState<string>('');

  const filteredSkills = skills.filter(skill => skill.category === activeCategory);

  return (
    <Section id="skills">
      <SectionHeader
        subtitle="My Expertise"
        title="Skills & Technologies"
        description="A comprehensive overview of the technologies and tools I work with daily."
      />

      {/* Desktop Layout - Category Tabs & Grid */}
      <div className="hidden md:block w-full">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 md:mb-16">
          {skillCategories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white/5 text-gray-400 border border-white/10 hover:border-blue-500/50 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mx-auto"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -3 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
                <div className="relative p-5 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-blue-400 text-sm font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut', delay: index * 0.05 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mobile Layout - Vertical Tabs with Accordion Sliders */}
      <div className="block md:hidden space-y-4 w-full">
        {skillCategories.map((category) => {
          const isSelfActive = mobileActiveCategory === category;
          const categorySkills = skills.filter(skill => skill.category === category);
          
          return (
            <div key={category} className="w-full">
              {/* Tab Button (full width, one per line) */}
              <motion.button
                onClick={() => setMobileActiveCategory(isSelfActive ? '' : category)}
                className={`w-full px-5 py-4 rounded-xl text-left font-semibold flex items-center justify-between transition-all duration-300 border ${
                  isSelfActive
                    ? 'bg-gradient-to-r from-blue-500/10 to-purple-600/10 border-blue-500/30 text-blue-400 shadow-md'
                    : 'bg-white/5 border-white/10 text-gray-300 hover:text-white'
                }`}
                whileTap={{ scale: 0.98 }}
              >
                <span>{category}</span>
                {/* Accordion Arrow Indicator */}
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isSelfActive ? 'rotate-180 text-blue-400' : 'text-gray-400'
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </motion.button>

              {/* Slider for content cards (visible only when category is active) */}
              <AnimatePresence initial={false}>
                {isSelfActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div 
                      className="flex gap-4 overflow-x-auto py-4 px-2 snap-x snap-mandatory -mx-2 scrollbar-none"
                      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                      {categorySkills.map((skill, index) => (
                        <div key={skill.name} className="min-w-[260px] max-w-[260px] snap-center">
                          <div className="relative p-5 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
                            <div className="flex justify-between items-center mb-3">
                              <span className="text-white font-medium">{skill.name}</span>
                              <span className="text-blue-400 text-sm font-semibold">{skill.level}%</span>
                            </div>
                            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.05 }}
                                className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
