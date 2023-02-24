import { Project } from '@/interfaces/projects';

type ProjectKey = 'proalco' | 'livet' | 'findThePuppet' | 'prometeoShop';

export const projects: Record<ProjectKey, Project> = {
  proalco: {
    imagePath: '/images/proalco-banner.jpg',
    projectName: 'proalco',
    path: '/portfolio/proalco'
  },
  livet: {
    imagePath: '/images/livet-banner.jpg',
    projectName: 'Livet Medical Center',
    path: '/portfolio/livet-medical-center'
  },
  findThePuppet: {
    imagePath: '/images/game-banner.jpg',
    projectName: 'find the puppet',
    path: '/portfolio/find-the-puppet'
  },
  prometeoShop: {
    imagePath: '/images/prometeo-shop-banner.jpg',
    projectName: 'Prometeo Shop',
    path: '/portfolio/prometeo-shop'
  }
};
