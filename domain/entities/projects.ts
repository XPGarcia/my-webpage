import { Skill } from './skill';

export interface Project {
  slug: string;
  banner: string;
  campaign: string;
  projectName: string;
  path: string;
  externalUrl?: string;
  description: string;
  bulletPoints: string[];
  skills: Skill[];
  client?: string;
}
