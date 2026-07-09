import { Skill } from '@/types';

export const skills: Skill[] = [
  // Frontend
  { name: 'React.js', level: 95, category: 'Frontend' },
  { name: 'Next.js', level: 93, category: 'Frontend' },
  { name: 'Vue.js', level: 82, category: 'Frontend' },
  { name: 'JavaScript (ES6+)', level: 95, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 92, category: 'Frontend' },
  { name: 'Bootstrap', level: 85, category: 'Frontend' },
  
  // Backend
  { name: 'Python', level: 95, category: 'Backend' },
  { name: 'Django REST', level: 96, category: 'Backend' },
  { name: 'FastAPI', level: 92, category: 'Backend' },
  { name: 'Node.js', level: 84, category: 'Backend' },
  { name: 'MySQL', level: 88, category: 'Backend' },
  { name: 'PostgreSQL', level: 90, category: 'Backend' },
  
  // Architecture
  { name: 'System Architecture', level: 92, category: 'Architecture' },
  { name: 'Microservices', level: 88, category: 'Architecture' },
  { name: 'API Design', level: 95, category: 'Architecture' },
  { name: 'Scalable Infrastructure', level: 87, category: 'Architecture' },

  // Cloud/DevOps
  { name: 'AWS', level: 78, category: 'Cloud/DevOps' },
  { name: 'Linux VPS', level: 88, category: 'Cloud/DevOps' },
  { name: 'Docker', level: 88, category: 'Cloud/DevOps' },
  { name: 'Bash', level: 80, category: 'Cloud/DevOps' },
  { name: 'CI/CD', level: 83, category: 'Cloud/DevOps' },
  { name: 'Hosting Management', level: 85, category: 'Cloud/DevOps' },
  
  // Leadership
  { name: 'Agile/Scrum', level: 90, category: 'Leadership' },
  { name: 'Team Management', level: 93, category: 'Leadership' },
  { name: 'Mentorship', level: 95, category: 'Leadership' },
  { name: 'Client Advisory', level: 91, category: 'Leadership' },
];

export const skillCategories = [
  'Frontend',
  'Backend',
  'Architecture',
  'Cloud/DevOps',
  'Leadership',
] as const;
