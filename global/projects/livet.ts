import { Project } from '@/src/types';
import { skills } from '../skills';

export const livet: Project = {
  slug: 'livet-medical-center',
  banner: '/images/livet-banner.jpg',
  campaign: '/images/livet-banner.jpg',
  projectName: 'Livet Medical Center',
  path: '/portfolio/livet-medical-center',
  externalUrl: 'https://medcenter.xaviergarcia.dev',
  description:
    'Livet Medical Center enables efficient scheduling and management of medical appointments at a healthcare facility. With a user-friendly interface, doctors can easily record and access essential patient data, including medical history, to provide personalized care. The system is designed to streamline the administrative process and help doctors focus on delivering high-quality medical services to their patients',
  bulletPoints: [
    'Design and develop of the web application using React with Redux and Material UI, delivering a good user experience while adhering to best practices and industry coding standards',
    'Use of Redux for state management in a complex web application, providing efficient and centralized data flow to ensure optimal performance and maintainability',
    "AWS Amplify for hosting to deploy and manage the application in the cloud. Implemented CI/CD, using the platform's automated build, test, and deployment processes. Configured continuous integration workflows with GitHub repository",
    'Use of AWS Cognito to implement secure and reliable authentication and authorization mechanisms, ensuring robust security and compliance with industry standards'
  ],
  skills: [skills.javascript, skills.react, skills['html&css'], skills.aws],
  client: 'Livet Medical Center'
};
