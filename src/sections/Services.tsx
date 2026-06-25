'use client';

import { motion } from 'framer-motion';
import { Code, Layout, Server, FileText, Palette, Zap, Cloud, Lightbulb, Search, GitBranch } from 'lucide-react';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import { services } from '@/data/services';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code, Layout, Server, FileText, Palette, Zap, Cloud, Lightbulb, Search, GitBranch,
};

export default function Services() {
  return (
    <Section id="services">
      <SectionHeader
        subtitle="What I Offer"
        title="My Services"
        description="Comprehensive development services tailored to bring your vision to life."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon] || Code;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="h-full flex flex-col"
            >
              <Card delayIndex={index} className="p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-5 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
