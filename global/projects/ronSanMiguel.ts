import { Project } from '@/src/types';
import { skills } from '../skills';

export const ronSanMiguel: Project = {
  slug: 'ron-san-miguel',
  bannerUrl: '/images/ron-san-miguel-banner.jpg',
  campaignUrl: '/images/ron-san-miguel-banner.jpg',
  name: 'Ron San Miguel',
  externalUrl: 'https://ronsanmiguel.com/en',
  description:
    "Ron San Miguel is a local rum company known for its exceptional products. In order to showcase its premium rum selections, values, and company culture, Ron San Miguel has developed a website as a marketing tool. The project includes a fully functional and responsive website that faithfully represents the original Figma design and upholds the company's standards",
  bulletPoints: [
    'From Figma design to production-ready code using Next.js 13, chosen because of its SSR (Server-Side Rendering) capabilities. Development of modular components for each section of the webpage, the translation of the design into HTML and SCSS, and the creation of TypeScript code to ensure interactive and responsive components',
    'Using SST, a layer abstraction on top of AWS CloudFormation, to deploy and manage the application in the cloud. Additionally, CI/CD processes were established to automate build, test, and deployment workflows',
    'Employing Next.js 13 middlewares and the new app directory folder router. Implemented internationalization (i18n) on top of this architecture'
  ],
  skills: [skills.typescript, skills.react, skills.nextjs, skills['html&css'], skills.aws],
  client: 'Ron San Miguel'
};
