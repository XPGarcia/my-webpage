import { Route } from '@/src/types';

export const routes: Route[] = [
  {
    icon: 'fa-house',
    link: '/',
    name: 'home'
  },
  {
    icon: 'fa-user',
    link: '/about',
    name: 'about'
  },
  {
    icon: 'fa-briefcase',
    link: '/portfolio',
    name: 'portfolio'
  },
  {
    icon: 'fa-envelope',
    link: '/contact',
    name: 'contact'
  }
];
