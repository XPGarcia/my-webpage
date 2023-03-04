import { skills } from '@/global/skills';
import { Project, ProjectKey } from '../entities';

export class ProjectService {
  static englishData: Record<ProjectKey, Project> = {
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
      description:
        'Livet Medical Center enables efficient scheduling and management of medical appointments at a healthcare facility. With a user-friendly interface, doctors can easily record and access essential patient data, including medical history, to provide personalized care. The system is designed to streamline the administrative process and help doctors focus on delivering high-quality medical services to their patients',
      bulletPoints: [
        'Design and develop of the web application using React with Redux and Material UI, delivering a good user experience while adhering to best practices and industry coding standards',
        'Use of Redux for state management in a complex web application, providing efficient and centralized data flow to ensure optimal performance and maintainability',
        "AWS Amplify for hosting to deploy and manage the application in the cloud. Implemented CI/CD, using the platform's automated build, test, and deployment processes. Configured continuous integration workflows with GitHub repository",
        'Use of AWS Cognito to implement secure and reliable authentication and authorization mechanisms, ensuring robust security and compliance with industry standards'
      ],
      skills: [skills.typescript, skills.react, skills['html&css'], skills.aws],
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

  static spanishData: Record<ProjectKey, Project> = {
    proalco: {
      banner: '/images/proalco-banner.jpg',
      campaign: '/images/proalco-banner.jpg',
      projectName: 'proalco',
      path: '/portfolio/proalco',
      externalUrl: 'https://www.proalco.com/inicio',
      description:
        'Proalco es una empresa especializada en la distribución de alimentos y bebidas de alta calidad. Para mostrar sus productos, valores y ambiente de trabajo, Proalco ha desarrollado un sitio web como herramienta de marketing. El proyecto cuenta con una página web totalmente funcional y adaptable que refleja con precisión el diseño original en Figma y cumple con los estándares del cliente',
      bulletPoints: [
        'Desde el diseño en Figma hasta el código listo para producción de toda la página web, utilizando Angular a través de la creación de componentes modulares para cada sección de la página, implementando el diseño con HTML y SCSS, y escribiendo código TypeScript para hacer que los componentes sean interactivos y adaptables',
        'Uso de AWS Amplify para alojar, implementar y gestionar la aplicación en la nube. Implementado CI/CD, utilizando los procesos de compilación, pruebas y despliegue automatizados de la plataforma. Configuración de flujos de trabajo de integración continua con el repositorio de GitHub',
        'Implementado AWS SES para un servicio de correo electrónico para enviar y rastrear grandes volúmenes de correos electrónicos de manera confiable y segura. Configurado SES para integrarse con las plantillas de correo electrónico de la aplicación y los datos de usuario recopilados en el formulario de contacto'
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
      description:
        'Livet Medical Center permite agendar y gestionar eficientemente citas médicas en un centro de salud. Con una interfaz fácil de usar, los médicos pueden registrar y acceder fácilmente a los datos esenciales del paciente, incluyendo su historial médico, para brindar una atención personalizada. El sistema está diseñado para simplificar el proceso administrativo y ayudar a los médicos a concentrarse en brindar servicios médicos de alta calidad a sus pacientes',
      bulletPoints: [
        'Diseño y desarrollo de la aplicación web utilizando React con Redux y Material UI, entregando una buena experiencia de usuario mientras se programa con las mejores prácticas y estándares de codificación de la industria',
        'Uso de Redux para la gestión de estado en una aplicación web compleja, proporcionando un flujo de datos eficiente y centralizado para garantizar un rendimiento y mantenimiento óptimos',
        'Uso de AWS Amplify para alojar, implementar y gestionar la aplicación en la nube. Implementado CI/CD, utilizando los procesos de compilación, pruebas y despliegue automatizados de la plataforma. Configuración de flujos de trabajo de integración continua con el repositorio de GitHub',
        'Uso de AWS Cognito para implementar mecanismos de autenticación y autorización seguros y confiables, garantizando una seguridad sólida y el cumplimiento de los estándares de la industria'
      ],
      skills: [skills.typescript, skills.react, skills['html&css'], skills.aws],
      client: 'Livet Medical Center'
    },
    findThePuppet: {
      banner: '/images/game-banner.jpg',
      campaign: '/images/game-banner.jpg',
      projectName: 'find the puppet',
      path: '/portfolio/find-the-puppet',
      externalUrl: 'https://melgabson.itch.io/find-the-puppet',
      description:
        'Find the Puppet es un juego de cartas en línea para varios jugadores que desafía a cinco jugadores a utilizar sus habilidades sociales y de deducción para determinar las facciones de sus oponentes, con un enfoque en ofrecer una experiencia de juego divertida e inmersiva. El proyecto cuenta con una arquitectura de comunicación en tiempo real construida sobre websockets que facilita interacciones fluidas entre clientes y servidor, asegurando un juego estable y tiempos de respuesta rápidos',
      bulletPoints: [
        'Construcción de un servidor WebSocket altamente eficiente usando Node.js, Express y ws, lo que permite una comunicación bidireccional en tiempo real entre clientes y servidor. Incluye un sólido sistema de salas que permite alojar múltiples juegos simultáneamente',
        'Comunicación bidireccional efectiva, permitiendo la entrega de mensajes privados desde el servidor a clientes específicos y la difusión de mensajes a todos los clientes dentro de la misma sala de juego',
        'Implementación de un servidor Node.js WebSocket en AWS EC2, utilizando cifrado SSL/TLS para habilitar la comunicación HTTPS y garantizar la transmisión segura de datos en la web',
        'Desarrollo del cliente del juego utilizando Godot con GDScripting y su potente conjunto de herramientas. Alojé el juego en itch.io, aprovechando sus características integradas de marketing y promoción'
      ],
      skills: [skills.typescript, skills.nodejs, skills.godot, skills.aws]
    },
    prometeoShop: {
      banner: '/images/prometeo-shop-banner.jpg',
      campaign: '/images/prometeo-shop-banner.jpg',
      projectName: 'Prometeo Shop',
      path: '/portfolio/prometeo-shop',
      description:
        'El proyecto es una plataforma de comercio electrónico que utiliza un sistema de gestión de contenido (CMS) headless para administrar los productos, lo que permite que el sitio web en el front-end tenga un diseño único y personalizable. Además, el backend es una API REST basada en microservicios para proporcionar comunicación entre los diferentes componentes. Utilizando una arquitectura de microservicios, el proyecto está construido utilizando Diseño Dirigido por Dominio (DDD) y Arquitectura Hexagonal',
      bulletPoints: [
        'Desarrollo de múltiples API RESTful utilizando Diseño Dirigido por Dominio (DDD) y Arquitectura Hexagonal, lo que resultó en un sistema altamente mantenible y escalable que enfatiza las reglas de negocio y la separación de preocupaciones',
        'Uso de microservicios para una mejor separación de preocupaciones y la capacidad de mantener y actualizar fácilmente los componentes individuales del sistema. Los microservicios se ejecutan en contenedores Docker para crear un sistema altamente escalable y flexible que puede manejar fácilmente un aumento del tráfico y el uso',
        'Desarrollo de múltiples APIs RESTful utilizando el framework NestJS, aprovechando sus características poderosas como inyección de dependencias, módulos y decoradores para crear un código altamente mantenible y testeable. Implementé autenticación segura utilizando claves API. Uso de una biblioteca personalizada de manejo de errores en todos los microservicios, lo que resultó en un enfoque estandarizado y consistente para el manejo de errores en toda la aplicación',
        'Desarrollo del CMS de comercio electrónico utilizando Angular para componentes dinámicos y actualizaciones en tiempo real, y Tailwind CSS para el estilo rápido de componentes de IU con un mínimo de código CSS'
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

  static list(lng?: string): Project[] {
    if (!lng || (lng !== 'es' && lng !== 'en')) return Object.values(this.spanishData);

    const langMapper = {
      en: this.englishData,
      es: this.spanishData
    };

    return Object.values(langMapper[lng]) ?? Object.values(this.spanishData);
  }

  static getOne(key: ProjectKey, lng?: string): Project {
    if (!lng || (lng !== 'es' && lng !== 'en')) return this.spanishData[key];

    const langMapper = {
      en: this.englishData,
      es: this.spanishData
    };

    return langMapper[lng][key] ?? this.spanishData[key];
  }
}
