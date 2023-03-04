import { Skill } from './skill';

export type ProjectKey = 'proalco' | 'livet' | 'findThePuppet' | 'prometeoShop';

export interface Project {
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
