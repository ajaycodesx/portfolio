'use client';

import { motion } from 'framer-motion';
import { Code, Server, Rocket, Users } from 'lucide-react';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';

const stats = [
  { icon: Code, label: 'Projects Completed', value: '25+' },
  { icon: Users, label: 'Engineering Division', value: '25+ Team' },
  { icon: Rocket, label: 'Years Experience', value: '3+ Years' },
  { icon: Server, label: 'VPS & AWS Deployments', value: 'Multiple' },
];

export default function About() {
  return (
    <Section id="about">
      <SectionHeader
        subtitle="About Me"
        title="Passionate Full Stack Developer"
        description="I build robust, scalable, and production-ready web applications with modern architectures."
      />

      <div className="grid lg:grid-cols-2 gap-16 items-stretch">
        {/* Left - About Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="h-full flex flex-col"
        >
          <div className="relative h-full flex flex-col">
            <Card delayIndex={0} className="p-5 md:p-8 h-full flex-1">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I am a dynamic and results-driven Senior Stack Engineer with a proven track record of architecting robust
                enterprise web applications, driving complex software deployments, and leading high-performing technical
                teams. I specialize in translating business objectives and client requirements into concrete, scalable
                architectural designs.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                My expertise spans full-stack JavaScript and Python frameworks, including Next.js, React.js, Django REST Framework,
                and FastAPI. I actively govern secure server infrastructure layouts on Hostinger VPS and AWS environments, maintaining
                rigorous performance optimization and high system availability.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                From managing large engineering teams (25+ members) through agile sprints to directing end-to-end B2B SaaS
                and CRM deployments, I focus on delivering scalable digital solutions that drive business innovation.
              </p>
            </Card>
          </div>
        </motion.div>

        {/* Right - Stats Grid */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full flex flex-col"
            >
              <Card delayIndex={index + 1} className="p-4 sm:p-6 text-center">
                <div className="flex-1 flex flex-col justify-center items-center">
                  <stat.icon className="w-8 h-8 text-blue-400 mb-3" />
                  <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
