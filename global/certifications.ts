import { Certification } from '@/src/types';

export const certifications: Certification[] = [
  {
    name: 'Computer science degree',
    companyName: 'ESPOL',
    date: new Date('2023-08-02'),
    description:
      'Relevant courses to be a software engineer like: Algorithm analysis, Data structure, Database system, Software Engineering, Operating systems, Cloud Computing, Artificial Intelligence, Development of web and mobile applications. My thesis work focuses on the application of artificial intelligence and computer vision techniques using deep learning algorithms like transformers and convolutional neural networks in the context of Precision Agriculture.'
  },
  {
    name: 'Certified Cloud Practitioner',
    companyName: 'AWS',
    date: new Date('2023-03-02'),
    description:
      'Achieved AWS Certified Cloud Practitioner certification from Amazon Web Services, validating in-depth knowledge of fundamental AWS Cloud concepts, such as cloud architecture, pricing, security, compliance, and core services.'
  }
];
