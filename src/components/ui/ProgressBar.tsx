'use client';

import { motion } from 'framer-motion';

interface ProgressBarProps {
  label: string;
  progress: number;
  color?: string;
}

export default function ProgressBar({ label, progress, color = 'from-blue-500 to-purple-600' }: ProgressBarProps) {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-white font-medium">{label}</span>
        <span className="text-gray-400">{progress}%</span>
      </div>
      <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${progress}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className={`h-full bg-gradient-to-r ${color} rounded-full`}
        />
      </div>
    </div>
  );
}
