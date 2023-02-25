import { Project } from '@/interfaces/projects';
import { skills } from './skills';

type ProjectKey = 'proalco' | 'livet' | 'findThePuppet' | 'prometeoShop';

export const projects: Record<ProjectKey, Project> = {
  proalco: {
    banner: '/images/proalco-banner.jpg',
    campaign: '/images/proalco-banner.jpg',
    projectName: 'proalco',
    path: '/portfolio/proalco',
    externalUrl: 'https://www.proalco.com/inicio',
    bulletPoints: [
      'Creation of the web page with Angular and SCSS',
      'Hosting with AWS amplify',
      'Email service via AWS SES'
    ],
    skills: [skills.typescript, skills.angular, skills['html&css'], skills.aws],
    client: 'Proalco'
  },
  livet: {
    banner: '/images/livet-banner.jpg',
    campaign: '/images/livet-banner.jpg',
    projectName: 'Livet Medical Center',
    path: '/portfolio/livet-medical-center',
    externalUrl: 'https://master.d2xu9q6nxzpr9j.amplifyapp.com/login',
    bulletPoints: [
      'Development with React as framework for the frontend',
      'Hosting with AWS amplify and Authentication with AWS Cognito',
      'Material UI as framework for styles and use of Redux for management of states'
    ],
    skills: [skills.typescript, skills.react, skills['html&css'], skills.aws]
  },
  findThePuppet: {
    banner: '/images/game-banner.jpg',
    campaign: '/images/game-banner.jpg',
    projectName: 'find the puppet',
    path: '/portfolio/find-the-puppet',
    externalUrl: 'https://melgabson.itch.io/find-the-puppet',
    bulletPoints: [
      'Creation of websocket server using Node.js, Express and WS',
      'Communication between clients and server using ws protocol and events managers',
      'Broadcast and private messages implemented on websocket server',
      'Server hosting on AWS EC2 and client hosting on itch.io',
      'Client development on Godot'
    ],
    skills: [skills.typescript, skills.nodejs, skills.godot, skills.aws]
  },
  prometeoShop: {
    banner: '/images/prometeo-shop-banner.jpg',
    campaign: '/images/prometeo-shop-banner.jpg',
    projectName: 'Prometeo Shop',
    path: '/portfolio/prometeo-shop',
    bulletPoints: [
      'Domain Driven Design and Hexagonal Architecture',
      'Microservices with docker containers',
      'Development of Rest APIs with Nestjs',
      'Content Manager Systems in Angular 14'
    ],
    skills: [skills.typescript, skills.angular, skills['html&css'], skills.nodejs, skills.sql]
  }
};
