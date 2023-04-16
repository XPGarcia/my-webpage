import { Skill } from './skill';

export interface Project {
  id: string;
  code: string;
  title: string;
  imageUrl: string;
  clientName?: string;
  previewUrl?: string;
  description: string;
  bulletPoints: string[];
  skills: Skill[];
}
