import { Project } from '@/domain/entities/projects';
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
    externalUrl: 'https://master.d2k1849fzd5ls4.amplifyapp.com',
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
  },
  findThePuppet: {
    banner: '/images/game-banner.jpg',
    campaign: '/images/game-banner.jpg',
    projectName: 'find the puppet',
    path: '/portfolio/find-the-puppet',
    externalUrl: 'https://melgabson.itch.io/find-the-puppet',
    description:
      'Find the Puppet is an engaging multiplayer online card game that challenges five players to use their social skills and deduction abilities to determine the factions of their opponents with a focus on delivering a fun and immersive gaming experience. The project features a real-time communication architecture built on websockets that facilitates seamless interactions between clients and server, ensuring smooth gameplay and quick response times',
    bulletPoints: [
      'Built a highly performant WebSocket server using Node.js, Express, and ws, enabling real-time, bidirectional communication between clients and server It includes a robust room system that enables multiple games to be hosted simultaneously',
      'Effectively bidirectional communication, enabling the delivery of private messages from the server to specific clients and the broadcasting of messages to all clients within the same game room',
      'Deployed a Node.js WebSocket server on AWS EC2, using SSL/TLS encryption to enable HTTPS communication and ensure secure data transmission in the web',
      'Developed the client side game using the Godot engine, using GDScripting and its powerful toolset. Hosted the game on itch.io, leveraging its built-in marketing and promotional features'
    ],
    skills: [skills.typescript, skills.nodejs, skills.godot, skills.aws]
  },
  prometeoShop: {
    banner: '/images/prometeo-shop-banner.jpg',
    campaign: '/images/prometeo-shop-banner.jpg',
    projectName: 'Prometeo Shop',
    path: '/portfolio/prometeo-shop',
    description:
      'The project is an e-commerce platform that uses a headless Content Management System (CMS) to manage products, enabling the e-commerce website to have a unique and customizable design. Additionally, the backend is a REST API based on microservices to provide communication between the different components. Using a microservices architecture, the project is built using Domain-Driven Design (DDD) and Hexagonal Architecture',
    bulletPoints: [
      'Developed multiple RESTful API utilizing Domain-Driven Design (DDD) and Hexagonal Architecture, resulting in a highly maintainable and scalable system that emphasizes business rules and separation of concerns',
      'Use of microservices for better separation of concerns and the ability to easily maintain and update individual components of the system. Microservices with Docker containers to create a highly scalable and flexible system that can easily handle increased traffic and usage',
      'Developed multiple RESTful APIs using the NestJS framework, leveraging its powerful features such as dependency injection, modules, and decorators to create highly maintainable and testable code. Implemented secure authentication using API keys. Use of a custom error handling library in all microservices, resulting in a standardized and consistent approach to error handling across the entire application',
      'Development of the e-commerce CMS using Angular for dynamic components and real-time updates, and Tailwind CSS for rapid styling of UI components with minimal CSS code'
    ],
    skills: [
      skills.typescript,
      skills.angular,
      skills['html&css'],
      skills.nodejs,
      skills.sql,
      skills.docker
    ]
  }
};
