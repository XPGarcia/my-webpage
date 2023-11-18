import { Project } from '@/domain/entities';
import { skills } from '../skills';

export const kiosk1001carros: Project = {
  slug: 'kiosk-1001carros',
  banner: '/images/kiosk-1001carros.jpg',
  campaign: '/images/kiosk-1001carros.jpg',
  projectName: 'Kiosk 1001carros.com',
  path: '/portfolio/kiosk-1001carros',
  externalUrl: 'https://kiosco.1001carros.com',
  client: 'Casabaca',
  description:
    'This project is a single-page application (SPA) powered by Vue3 and Vite, empowering clients of 1001carros company to explore an interactive catalogue. Leveraged Meilisearch, an intelligent search engine, to deliver an unparalleled search experience, enabling users to effortlessly navigate the extensive product offerings. Ensured seamless distribution across multiple devices using OnSignTV, optimizing the user experience for a resolution of 1080x1920',
  bulletPoints: [
    "Developed the application's entire functionality using Vue3 and Pinia, a robust state management library, ensuring seamless data handling and manipulation",
    'Integrated Meilisearch, an intelligent search engine, as the heart of the catalogue, delivering lightning-fast search results and an exceptional user experience',
    'Established seamless communication between the application and the administrator via REST API, enabling dynamic personalization of the homepage based on device IPs',
    'Deployment of the application on an EC2 instance with a load balancer and Nginx as the web server, enabling efficient resource utilization and centralized management of multiple hosted projects. Implemented CloudWatch to monitor server performance and gain actionable insights'
  ],
  skills: [
    skills.vue,
    skills.tailwindcss,
    skills.typescript,
    skills['html&css'],
    skills.sql,
    skills.aws
  ]
};
