export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demo?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Les Épavistes Pro',
    description: 'Le site a été créé pour simplifier l’enlèvement d’épaves et le rachat de véhicules en France. Il permet de faire une demande en ligne, recevoir un devis gratuit, et planifier une intervention rapide avec une équipe professionnelle.\n' +
        '\n',
    image: "/images/car.jpg",
    technologies: ['WordPress'],
    demo: 'https://lesepavistespro.com/',
  },
  {
    id: 2,
    title: 'HEVEA',
    description: 'A collaborative task management application with real-time updates, team workspaces, and progress tracking.',
    image: '/images/eva.jpg',
    technologies: ['WordPress'],
    demo: 'https://hevea.ma/',

  },
  {
    id: 3,
    title: 'Be Flower',
    description: 'We create elegant floral arrangements for every occasion — from romantic gestures to joyful celebrations. Each flower is handpicked with care to bring color, fragrance, and happiness to your special moments.\n' +
        '\n',
    image: '/images/beflower.jpg',
    technologies: ['WordPress'],
    demo: 'https://rosybrown-bee-412182.hostingersite.com/',

  },
  {
    id: 4,
    title: 'Celtic Salt',
    description: 'Built with care to highlight products, uses, and the purity of salt through a clean, minimal design and smooth user experience.',
    image: '/images/salt.jpg',
    technologies: ['WordPress'],
    demo: 'https://www.celtic-salt.com/',

  },
  {
    id: 5,
    title: 'Inventory Management System',
    description: 'A desktop application for managing inventory, tracking stock levels, and generating reports.',
    image: 'https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['C#', '.NET', 'WPF', 'SQL Server'],

  },
  {
    id: 6,
    title: 'Social Media Dashboard',
    description: 'A unified dashboard for managing and analyzing social media accounts across multiple platforms.',
    image: 'https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'Redux', 'Node.js', 'Express', 'Social Media APIs'],
    demo: 'https://social-dashboard-demo.example.com',
  },
];
