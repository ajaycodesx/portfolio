'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Github } from '@/components/ui/BrandIcons';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import Tag from '@/components/ui/Tag';
import Modal from '@/components/ui/Modal';
import Card from '@/components/ui/Card';
import { projects } from '@/data/projects';
import type { Project } from '@/types';

const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'CMS'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <Section id="projects">
      <SectionHeader
        subtitle="My Work"
        title="Featured Projects"
        description="A showcase of projects that demonstrate my skills and expertise across different domains."
      />

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeFilter === category
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

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="h-full flex flex-col cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <Card delayIndex={index} className="overflow-hidden">
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  {project.featured && (
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold">
                      Featured
                    </span>
                  )}
                  <div className="absolute bottom-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur text-white text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-3 py-1 rounded-full text-xs font-medium text-gray-500">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Project Detail Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
      >
        {selectedProject && (
          <div>
            <div className="h-48 rounded-xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 mb-6" />
            <p className="text-gray-300 text-base leading-relaxed mb-6">
              {selectedProject.longDescription || selectedProject.description}
            </p>
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </div>
            <div className="flex gap-4">
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-all"
                >
                  <Github size={16} />
                  Source Code
                </a>
              )}
            </div>
          </div>
        )}
      </Modal>
    </Section>
  );
}
