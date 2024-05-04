import { Experience } from '@/src/types';

export const experienceList: Experience[] = [
  {
    role: 'Full-stack developer',
    companyName: 'Keep',
    dateStart: new Date('2024-01-02'),
    description:
      'Maintenance and development of core producst for a Fintech utilizing Next.js and TypeScript. This involves crafting user interfaces and backend systems to deliver financial services efficiently. Tasks include leveraging Next.js for server-side rendering, implementing TypeScript for robust code structure, and integrating various APIs for functionality'
  },
  {
    role: 'Full-stack developer',
    companyName: 'BluBear S.A',
    dateStart: new Date('2023-05-02'),
    dateEnd: new Date('2024-01-02'),
    description:
      "Development of 1001carros.com's digital ecosystem using Vue3 and Laravel. Creation of a user-friendly website with Nuxt3 and an advanced content management system built on the VILT stack. Involvement in cloud infrastructure implementation with Laravel Vapor and the management of AWS components, including EC2, S3, Lambdas, and CloudFront, aimed at improving operational efficiency, scalability, and availability. Contribution to CI/CD pipelines using GitHub Actions to ensure a smooth development process in alignment with GitHub workflows."
  },
  {
    role: 'Front-end developer',
    companyName: 'Ron San Miguel',
    dateStart: new Date('2023-06-02'),
    dateEnd: new Date('2023-08-02'),
    description:
      'Development of the website from Figma design to production-ready code, using Next.js 13, SCSS, and AWS for a local rum company. Middleware was employed for internationalization. The website is hosted using SST for deployment via AWS CloudFormation.'
  },
  {
    role: 'Full-stack developer',
    companyName: 'WOMPAD S.A',
    dateStart: new Date('2021-11-02'),
    dateEnd: new Date('2022-06-02'),
    description:
      'Maintenance and development of new functionalities in the personalized template for e-commerce Kapalia (NOT WordPress). Use of JavaScript and JQuery in the client and PHP in the server. Database management in MySQL.'
  },
  {
    role: 'Full-stack developer',
    companyName: 'Proalco',
    dateStart: new Date('2022-01-02'),
    dateEnd: new Date('2022-02-02'),
    description:
      'From Figma design to production-ready code. Creation of the website using Angular, SCSS, and AWS for a food and beverage distribution company. Hosting of the web page with AWS amplify and mailing service through AWS SES.'
  },
  {
    role: 'Full-stack developer',
    companyName: 'Box Solutions',
    dateStart: new Date('2021-06-02'),
    dateEnd: new Date('2021-10-02'),
    description:
      'Development of a web application to collect large amounts of information from farmers using Angular as the front-end framework to create a SPA and Firebase for the serverless authentication and database with Firestore.'
  }
];
