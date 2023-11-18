import { Project } from '@/domain/entities';
import { skills } from '../skills';

export const findThePuppet: Project = {
  slug: 'find-the-puppet',
  banner: '/images/game-banner.jpg',
  campaign: '/images/game-banner.jpg',
  projectName: 'Find the Puppet',
  path: '/portfolio/find-the-puppet',
  externalUrl: 'https://melgabson.itch.io/find-the-puppet',
  description:
    'Find the Puppet is an engaging multiplayer online card game that challenges five players to use their social skills and deduction abilities to determine the factions of their opponents with a focus on delivering a fun and immersive gaming experience. The project features a real-time communication architecture built on websockets that facilitates seamless interactions between clients and server, ensuring smooth gameplay and quick response times',
  bulletPoints: [
    'Built a highly performant WebSocket server using Node.js, Express, and ws, enabling real-time, bidirectional communication between clients and server It includes a robust room system that enables multiple games to be hosted simultaneously',
    'Effectively bidirectional communication, enabling the delivery of private messages from the server to specific clients and the broadcasting of messages to all clients within the same game room',
    'Developed a serverless WebSocket server with Node.js using the SST framework on AWS. The server leverages AWS Lambda for serverless compute, Amazon S3 for data storage, and API Gateway to establish WebSocket connections. SSL/TLS encryption is applied to ensure secure data transmission, enabling HTTPS communication for increased security',
    'Developed the client side game using the Godot engine, using GDScripting and its powerful toolset. Hosted the game on itch.io, leveraging its built-in marketing and promotional features'
  ],
  skills: [skills.typescript, skills.nodejs, skills.godot, skills.aws]
};
