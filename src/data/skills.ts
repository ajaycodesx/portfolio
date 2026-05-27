import { Skill } from '@/types';

export const skills: Skill[] = [
  // Frontend
  { name: 'React.js', level: 95, category: 'Frontend' },
  { name: 'Next.js', level: 90, category: 'Frontend' },
  { name: 'JavaScript', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 85, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 92, category: 'Frontend' },
  { name: 'HTML5 / CSS3', level: 95, category: 'Frontend' },
  
  // Backend
  { name: 'Django', level: 95, category: 'Backend' },
  { name: 'Django REST Framework', level: 95, category: 'Backend' },
  { name: 'Node.js', level: 80, category: 'Backend' },
  { name: 'REST API Design', level: 95, category: 'Backend' },
  
  // Database
  { name: 'MySQL', level: 90, category: 'Database' },
  { name: 'PostgreSQL', level: 85, category: 'Database' },
  { name: 'MongoDB', level: 80, category: 'Database' },
  
  // DevOps
  { name: 'Linux (Ubuntu VPS)', level: 90, category: 'DevOps' },
  { name: 'Nginx', level: 85, category: 'DevOps' },
  { name: 'Gunicorn', level: 85, category: 'DevOps' },
  { name: 'Docker', level: 75, category: 'DevOps' },
  { name: 'CyberPanel / AAPanel', level: 85, category: 'DevOps' },
  
  // Tools
  { name: 'Git & GitHub', level: 90, category: 'Tools' },
  { name: 'Postman', level: 95, category: 'Tools' },
  { name: 'VS Code', level: 100, category: 'Tools' },
];

export const skillCategories = [
  'Frontend',
  'Backend',
  'Database',
  'DevOps',
  'Tools',
] as const;
