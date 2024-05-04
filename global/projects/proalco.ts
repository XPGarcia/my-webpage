import { Project } from '@/src/types';
import { skills } from '../skills';

export const proalco: Project = {
  slug: 'proalco',
  banner: '/images/proalco-banner.jpg',
  campaign: '/images/proalco-banner.jpg',
  projectName: 'Proalco',
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
};
