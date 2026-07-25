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
          <div className="space-y-6 max-h-[75vh] overflow-y-auto pr-1">
            <div className="h-44 sm:h-56 rounded-xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 relative overflow-hidden">
              {selectedProject.image ? (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20" />
              )}
            </div>

            {/* Overview / Long Description */}
            <div>
              <h4 className="text-white font-semibold text-base mb-2">Project Overview</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                {selectedProject.longDescription || selectedProject.description}
              </p>
            </div>

            {/* Abstract & Problem Statement (if present) */}
            {selectedProject.abstract && (
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5 space-y-4">
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-blue-400">Executive Abstract</span>
                  <p className="text-gray-300 text-sm leading-relaxed mt-1">{selectedProject.abstract}</p>
                </div>
                {selectedProject.problemStatement && (
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-purple-400">Operational Problem & Solution</span>
                    <p className="text-gray-300 text-sm leading-relaxed mt-1">{selectedProject.problemStatement}</p>
                  </div>
                )}
              </div>
            )}

            {/* Architecture Modules Breakdown */}
            {selectedProject.architectureModules && selectedProject.architectureModules.length > 0 && (
              <div>
                <h4 className="text-white font-semibold text-base mb-3">Architectural Module Breakdown</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {selectedProject.architectureModules.map((mod, idx) => (
                    <div key={idx} className="bg-gray-900/80 border border-white/10 rounded-lg p-3.5 flex flex-col justify-between">
                      <div>
                        <div className="flex items-baseline justify-between mb-1">
                          <span className="text-sm font-bold text-white">{mod.title}</span>
                          <span className="text-[11px] text-blue-400 font-medium px-2 py-0.5 bg-blue-500/10 rounded-full border border-blue-500/20">{mod.subtitle}</span>
                        </div>
                        <p className="text-xs text-gray-400 mb-2.5">{mod.description}</p>
                        <ul className="space-y-1">
                          {mod.highlights.map((item, hIdx) => (
                            <li key={hIdx} className="text-[12px] text-gray-300 flex items-start gap-1.5">
                              <span className="text-blue-400 mt-0.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Workflow Stages */}
            {selectedProject.workflowStages && selectedProject.workflowStages.length > 0 && (
              <div>
                <h4 className="text-white font-semibold text-base mb-3">End-to-End Transaction Flow</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProject.workflowStages.map((stage) => (
                    <div key={stage.stage} className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/10 rounded-lg p-3 flex gap-3 items-start">
                      <div className="w-7 h-7 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 font-bold text-xs flex items-center justify-center shrink-0">
                        {stage.stage}
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-white mb-0.5">{stage.title}</h5>
                        <p className="text-[11px] text-gray-300 leading-snug">{stage.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-2">Technologies & Tools</h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {selectedProject.techStack.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
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
