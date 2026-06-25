'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center';
  children?: ReactNode;
}

export default function SectionHeader({
  title,
  subtitle,
  description,
  align = 'center',
  children,
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';

  const hasDescription = !!description;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-6 md:mb-16 ${alignClass}`}
    >
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-blue-400 font-semibold mb-2 md:mb-4"
        >
          {subtitle}
        </motion.p>
      )}
      <h2 
        className={`text-3xl md:text-5xl font-bold text-white ${
          hasDescription 
            ? 'pb-2 md:pb-0 mb-2 md:mb-6' 
            : 'pb-4 md:pb-0 mb-4 md:mb-6'
        }`}
      >
        {title}
      </h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-base md:text-lg max-w-lg mx-auto pb-4 md:pb-0"
        >
          {description}
        </motion.p>
      )}
      {children && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 md:mt-8"
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}
