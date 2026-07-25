'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Github } from '@/components/ui/BrandIcons';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import Tag from '@/components/ui/Tag';
import Modal from '@/components/ui/Modal';
import Card from '@/components/ui/Card';
import { projects } from '@/data/projects';
import type { Project } from '@/types';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <Section id="projects">
      <SectionHeader
        subtitle="My Work"
        title="Featured Projects"
        description="A showcase of projects that demonstrate my skills and expertise across different domains."
      />

      <div className="w-full">
        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
              className="h-full flex flex-col cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <Card delayIndex={index} className="overflow-hidden h-full flex flex-col">
                {/* Image Render */}
                <div className="h-44 sm:h-48 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 relative overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20" />
                  )}
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
                <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                  <div className="mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-medium text-gray-500">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>


      {/* Project Detail Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
      >
        {selectedProject && (
          <div>
            <div className="h-40 sm:h-52 rounded-xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 mb-4 sm:mb-6 relative overflow-hidden">
              {selectedProject.image ? (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20" />
              )}
            </div>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
              {selectedProject.longDescription || selectedProject.description}
            </p>
            <div className="mb-6">
              <h4 className="text-white font-semibold text-sm sm:text-base mb-2.5">Tech Stack</h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {selectedProject.techStack.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all w-full sm:w-auto"
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
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-all w-full sm:w-auto"
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
