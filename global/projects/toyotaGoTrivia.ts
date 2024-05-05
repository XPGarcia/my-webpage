import { Project } from '@/src/types';
import { skills } from '../skills';

export const toyotaGoTrivia: Project = {
  slug: 'toyota-go-trivia',
  bannerUrl: '/images/toyota-go-trivia.jpg',
  campaignUrl: '/images/toyota-go-trivia.jpg',
  name: 'Toyota GO Trivia',
  externalUrl: 'https://trivia-toyotago.blubear.io',
  client: 'Casabaca',
  description:
    "This asynchronous multiplayer trivia game, built using a modern monolith architecture and the VILT stack, features a dynamic and engaging interface powered by Laravel (backend) and Vue/Inertia (frontend). Designed to attract attention during a car festival and engage customers interactively, the game's development, testing, and deployment to production were completed in a mere two weeks",
  bulletPoints: [
    'Developed an asynchronous multiplayer trivia game for mobile devices in record time, leveraging the VILT stack to deliver an immersive gaming experience for clients',
    'Crafted a robust administrative interface for the trivia game, empowering users to seamlessly manage rooms, games, and scores',
    "Orchestrated a seamless deployment of the trivia game to AWS, utilizing Laravel Vapor's serverless architecture to host the project, RDS for database management, and S3 for object storage"
  ],
  skills: [
    skills.laravel,
    skills.vue,
    skills.typescript,
    skills.tailwindcss,
    skills['html&css'],
    skills.php,
    skills.aws,
    skills.sql
  ]
};
