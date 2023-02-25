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
    description:
      'Proalco is a company that specializes in distributing high-quality food and beverages. To showcase its products, values, and work environment, Proalco has developed a website as a marketing tool. The project features a fully functional and responsive webpage that accurately reflects the original figma design and meets the client standards',
    bulletPoints: [
      'From figma design to production-ready code of the entire webpage using Angular through the creation of modular components for each section of the page, implementing the design with HTML and SCSS, and writing TypeScript code to make the components interactive and responsive',
      "Using AWS Amplify for hosting to deploy and manage the application in the cloud. Implemented CI/CD, using the platform's automated build, test, and deployment processes. Configured continuous integration workflows with GitHub repository",
      "Implemented AWS SES for a mailing service to send and track large volumes of emails reliably and securely. Configured SES to integrate with the application's email templates and user data collected in the contact form"
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
    description: '',
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
    description: '',
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
    description: '',
    bulletPoints: [
      'Domain Driven Design and Hexagonal Architecture',
      'Microservices with docker containers',
      'Development of Rest APIs with Nestjs',
      'Content Manager Systems in Angular 14'
    ],
    skills: [skills.typescript, skills.angular, skills['html&css'], skills.nodejs, skills.sql]
  }
};
