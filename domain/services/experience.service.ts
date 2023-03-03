import { Experience } from '../entities';

export class ExperienceService {
  private static englishData: Experience[] = [
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

  private static spanishData: Experience[] = [
    {
      role: 'Ingeniería en computación',
      companyName: 'ESPOL',
      dateRange: ['10/2018', 'presente'],
      description:
        'Cursos relevantes para ser un ingeniero de software como: Análisis de algoritmos, Estructura de datos, Sistemas de bases de datos, Ingeniería de software, Sistemas operativos, Computación en la nube, Desarrollo de aplicaciones web y móviles'
    },
    {
      role: 'Desarrollador Full-Stack',
      companyName: 'WOMPAD S.A',
      dateRange: ['11/2021', '06/2022'],
      description:
        'Mantenimiento y desarrollo de nuevas funcionalidades en la plantilla personalizada para comercio electrónico Kapalia (NO WordPress). Uso de JavaScript y JQuery en el cliente y PHP en el servidor. Gestión de la base de datos en MySQL'
    },
    {
      role: 'Desarrollador Full-Stack',
      companyName: 'Proalco',
      dateRange: ['01/2022', '02/2022'],
      description:
        'Desde el diseño en Figma hasta el código listo para producción. Creación del sitio web para una empresa de distribución de alimentos y bebidas utilizando Angular, SCSS y AWS. Hospedaje de la página web con AWS Amplify y servicio de correo a través de AWS SES'
    },
    {
      role: 'Desarrollador Full-Stack',
      companyName: 'Box Solutions',
      dateRange: ['06/2021', '10/2021'],
      description:
        'Desarrollo de una aplicación web para recopilar grandes cantidades de información de agricultores utilizando Angular como el framework front-end para crear una SPA, y Firebase para la autenticación y autorización serverless y la base de datos con Firestore'
    }
  ];

  static list(lng?: string): Experience[] {
    if (!lng || (lng !== 'es' && lng !== 'en')) return this.spanishData;

    const langMapper = {
      en: this.englishData,
      es: this.spanishData
    };

    return langMapper[lng] ?? this.spanishData;
  }
}
