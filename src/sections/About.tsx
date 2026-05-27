'use client';

import { motion } from 'framer-motion';
import { Code, Server, Rocket, Users } from 'lucide-react';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';

const stats = [
  { icon: Code, label: 'Projects Completed', value: '25+' },
  { icon: Users, label: 'Happy Clients', value: '10+' },
  { icon: Rocket, label: 'Years Experience', value: '5+' },
  { icon: Server, label: 'Production Deployments', value: 'Multiple' },
];

export default function About() {
  return (
    <Section id="about">
      <SectionHeader
        subtitle="About Me"
        title="Passionate Full Stack Developer"
        description="I build robust, scalable, and production-ready web applications with modern architectures."
      />

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left - About Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <Card delayIndex={0} className="p-8">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I am a full-stack developer focused on building robust, scalable, and production-ready web applications.
                I have experience working on real-world systems including CMS platforms, CRM tools, email management systems,
                quotation systems, and business dashboards using Django REST Framework and React.js.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                My expertise includes backend architecture, API design, deployment automation, and VPS hosting using Ubuntu,
                Docker, and control panels like CyberPanel and AAPanel. I believe in writing clean, maintainable code and
                building systems that solve real business problems efficiently.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me exploring system design, DevOps workflows, CI/CD automation,
                and modern backend optimization techniques.
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
              <Card delayIndex={index + 1} className="p-6 text-center">
                <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
