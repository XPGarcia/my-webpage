import { Project } from '@/src/types';
import { skills } from '../skills';

export const prometeoShop: Project = {
  slug: 'prometeo-shop',
  bannerUrl: '/images/prometeo-shop-banner.jpg',
  campaignUrl: '/images/prometeo-shop-banner.jpg',
  name: 'Prometeo Shop',
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
};
