import { Skill } from '@/types';

export const skills: Skill[] = [
  // Frontend
  { name: 'React.js', level: 95, category: 'Frontend' },
  { name: 'Next.js', level: 92, category: 'Frontend' },
  { name: 'Vue.js', level: 80, category: 'Frontend' },
  { name: 'JavaScript (ES6+)', level: 95, category: 'Frontend' },
  { name: 'HTML5 & CSS3', level: 95, category: 'Frontend' },
  { name: 'Responsive Web UI', level: 95, category: 'Frontend' },
  
  // Backend
  { name: 'Python', level: 95, category: 'Backend' },
  { name: 'Django REST Framework', level: 96, category: 'Backend' },
  { name: 'FastAPI', level: 90, category: 'Backend' },
  { name: 'Node.js', level: 82, category: 'Backend' },
  { name: 'RESTful API Engineering', level: 95, category: 'Backend' },
  { name: 'System Architecture', level: 90, category: 'Backend' },
  
  // Cloud & Infra
  { name: 'PostgreSQL', level: 90, category: 'Cloud & Infra' },
  { name: 'MySQL', level: 90, category: 'Cloud & Infra' },
  { name: 'Linux VPS Hosting (Hostinger)', level: 90, category: 'Cloud & Infra' },
  { name: 'AWS Basics', level: 75, category: 'Cloud & Infra' },
  { name: 'Server Architecture', level: 85, category: 'Cloud & Infra' },
  { name: 'CI/CD', level: 80, category: 'Cloud & Infra' },
  
  // Leadership
  { name: 'Engineering Team Management', level: 95, category: 'Leadership' },
  { name: 'Agile & Scrum', level: 90, category: 'Leadership' },
  { name: 'Technical Client Advisory', level: 90, category: 'Leadership' },
  { name: 'Technical SEO', level: 85, category: 'Leadership' },
  { name: 'Workflow & Delivery Management', level: 90, category: 'Leadership' },
  { name: 'Developer Mentorship', level: 92, category: 'Leadership' },
];

export const skillCategories = [
  'Frontend',
  'Backend',
  'Cloud & Infra',
  'Leadership',
] as const;
