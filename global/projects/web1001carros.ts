import { Project } from '@/src/types';
import { skills } from '../skills';

export const web1001carros: Project = {
  slug: 'web-1001carros',
  bannerUrl: '/images/web-1001carros.jpg',
  campaignUrl: '/images/web-1001carros.jpg',
  name: 'Web 1001carros.com',
  externalUrl: 'https://1001carros.com',
  client: 'Casabaca',
  description:
    'The project is a catalogue website for 1001carros.com, a leading seller of pre-owned vehicles. The website features a catalogue that uses Meilisearch, an intelligent search engine, to enable users to effortlessly navigate the extensive car catalogue. Additionally, the website has Google Analytics implemented across custom events to gather valuable user insights and drive data-driven decision-making. The website communicates via REST API with an administrator of content, developed entirely by my team',
  bulletPoints: [
    'Developed a comprehensive administrator interface for the website leveraging the VILT stack, enabling seamless management of content and inventory with granular authorization levels for various user roles',
    'Developed a server-side rendered application (SSR) with the power of Nuxt and Vue3. Integrated Google Analytics to capture valuable user insights and drive data-driven decision-making',
    'Integration of Meilisearch, a blazing-fast search engine, as the core of the catalogue. This intelligent search engine delivers lightning-quick response times, ensuring a seamless and frustration-free user experience',
    'Leveraged Laravel Vapor to deploy the administrator interface serverlessly, utilizing Lambdas for server, queues and scheduled cron jobs. Optimized performance and scalability by employing RDS for database management and S3 for object storage',
    'Deployment of the website on an EC2 instance with a load balancer and Nginx as the web server, enabling efficient resource utilization and centralized management of multiple hosted projects. Implemented CloudWatch to monitor server performance and gain actionable insights'
  ],
  skills: [
    skills.laravel,
    skills.vue,
    skills.nuxt,
    skills.typescript,
    skills.tailwindcss,
    skills['html&css'],
    skills.php,
    skills.sql,
    skills.aws
  ]
};
