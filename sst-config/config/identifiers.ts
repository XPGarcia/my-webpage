import {
  EXPERIENCES_TABLE_ID,
  CERTIFICATIONS_TABLE_ID,
  SKILLS_TABLE_ID,
  PROJECTS_TABLE_ID
} from '../stacks/ids';
import { config } from './config';

const BASE = `prod-${config.name}`;

export const TableIdentifiers = {
  experiences: `${BASE}-${EXPERIENCES_TABLE_ID}`,
  certifications: `${BASE}-${CERTIFICATIONS_TABLE_ID}`,
  skills: `${BASE}-${SKILLS_TABLE_ID}`,
  projects: `${BASE}-${PROJECTS_TABLE_ID}`
};
