'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import { skills, skillCategories } from '@/data/skills';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('Frontend');

  const filteredSkills = skills.filter(skill => skill.category === activeCategory);

  return (
    <Section id="skills">
      <SectionHeader
        subtitle="My Expertise"
        title="Skills & Technologies"
        description="A comprehensive overview of the technologies and tools I work with daily."
      />

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
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
    </Section>
  );
}
