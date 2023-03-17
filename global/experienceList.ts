import { Experience } from '@/domain/entities/experience';

export const experienceList: Experience[] = [
  {
    role: 'Computer science degree',
    companyName: 'ESPOL',
    dateRange: ['10/2018', 'present'],
    description:
      'Relevant courses to be a software engineer like: Algorithm analysis, Data structure, Database system, Software Engineering, Operating systems, Cloud Computing, Development of web and mobile applications.'
  },
  {
    role: 'Full-stack developer',
    companyName: 'WOMPAD S.A',
    dateRange: ['11/2021', '06/2022'],
    description:
      'Maintenance and development of new functionalities in the personalized template for e-commerce Kapalia (NOT WordPress). Use of JavaScript and JQuery in the client and PHP in the server. Database management in MySQL.'
  },
  {
    role: 'Full-stack developer',
    companyName: 'Proalco',
    dateRange: ['01/2022', '02/2022'],
    description:
      'From Figma design to production-ready code. Creation of the website using Angular, SCSS, and AWS for a food and beverage distribution company. Hosting of the web page with AWS amplify and mailing service through AWS SES.'
  },
  {
    role: 'Full-stack developer',
    companyName: 'Box Solutions',
    dateRange: ['06/2021', '10/2021'],
    description:
      'Development of a web application to collect large amounts of information from farmers using Angular as the front-end framework to create a SPA and Firebase for the serverless authentication and database with Firestore.'
  }
];
