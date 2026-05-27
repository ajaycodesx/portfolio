'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface TagProps {
  children: ReactNode;
  className?: string;
}

export default function Tag({ children, className = '' }: TagProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className={`
        inline-block px-3 py-1 rounded-full text-sm font-medium
        bg-blue-500/10 text-blue-400 border border-blue-500/20
        hover:bg-blue-500/20 hover:border-blue-500/40
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </motion.span>
  );
}
