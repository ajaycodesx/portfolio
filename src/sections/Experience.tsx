'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import Tag from '@/components/ui/Tag';
import Card from '@/components/ui/Card';
import { experience } from '@/data/experience';

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeader
        subtitle="My Journey"
        title="Work Experience"
        description="A timeline of my professional career and the amazing companies I've worked with."
      />

      <div className="max-w-4xl mx-auto relative">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2" />

        {experience.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className={`relative flex items-start mb-8 md:mb-12 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 transform -translate-x-1/2 z-10 shadow-lg shadow-blue-500/50">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-ping opacity-20" />
            </div>

            {/* Content Card */}
            <div className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${
              index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
            }`}>
              <Card delayIndex={index} className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <Briefcase className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-blue-400 text-sm font-medium">{exp.duration}</span>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-white mb-1">{exp.role}</h3>
                <p className="text-purple-400 text-sm md:text-base font-medium mb-3 md:mb-4">{exp.company}</p>

                <ul className="space-y-2 mb-4">
                  {exp.responsibilities.slice(0, 3).map((resp, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                      {resp}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-white/5 w-full flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </Card>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
