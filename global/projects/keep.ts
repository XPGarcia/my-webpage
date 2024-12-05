import { Project } from '@/src/types';
import { skills } from '../skills';

export const keep: Project = {
  slug: 'keep',
  bannerUrl: '/images/keep.png',
  campaignUrl: '/images/keep.png',
  name: 'Keep',
  description:
    'Keep is a new bank that helps hundreds of Canadian businesses secure credit limits to achieve their goals. It features an easy application process and fast onboarding. Among its credit products are credit cards, statement extensions, and capital growth solutions. Aiming to be an all-in-one financial system for its users, Keep has introduced its banking products and accounting management system',
  bulletPoints: [
    'Developed a comprehensive administrator interface for the website leveraging the VILT stack, enabling seamless management of content and inventory with granular authorization levels for various user roles',
    'Developed a server-side rendered application (SSR) with the power of Nuxt and Vue3. Integrated Google Analytics to capture valuable user insights and drive data-driven decision-making',
    'Integration of Meilisearch, a blazing-fast search engine, as the core of the catalogue. This intelligent search engine delivers lightning-quick response times, ensuring a seamless and frustration-free user experience',
    'Leveraged Laravel Vapor to deploy the administrator interface serverlessly, utilizing Lambdas for server, queues and scheduled cron jobs. Optimized performance and scalability by employing RDS for database management and S3 for object storage',
    'Deployment of the website on an EC2 instance with a load balancer and Nginx as the web server, enabling efficient resource utilization and centralized management of multiple hosted projects. Implemented CloudWatch to monitor server performance and gain actionable insights'
  ],
  skills: [skills.typescript, skills.nextjs, skills.nodejs, skills['html&css']]
};
