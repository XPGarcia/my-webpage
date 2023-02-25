import ExperienceListItem from './ExperienceListItem';

interface ExperienceItem {
  role: string;
  companyName: string;
  dateRange: string[];
  description: string;
}

export default function ExperienceList() {
  const data: ExperienceItem[] = [
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
        'Development of a web application to collect large amounts of information from farmers using Angular as the front-end framework to create an SPA and Firebase for the serverless authentication and database (Firestore).'
    }
  ];

  const numberOfBlockList = Math.ceil(data.length / 3);

  const blocksList = [];

  for (let i = 0; i < numberOfBlockList; i++) {
    blocksList.push(
      <div className='w-full lg:w-1/2'>
        <ul>
          {data.slice(i * 3, i * 3 + 3 < data.length ? i + 3 : data.length).map((experience) => (
            <ExperienceListItem
              key={experience.companyName}
              role={experience.role}
              companyName={experience.companyName}
              dateRange={experience.dateRange}
              description={experience.description}
            />
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className='flex flex-col lg:flex-row px-4'>{blocksList.map((component) => component)}</div>
  );
}
