import 'server-only';
import { Skill } from '@/src/types';
import { TableIdentifiers } from '@/sst-config/config/identifiers';
import { dynamoClient } from '../dynamo-client';

export const fetchSkills = async (): Promise<Skill[]> => {
  const dbSkills = await dynamoClient().list(TableIdentifiers.skills);

  const skills: Skill[] = dbSkills.map((item) => {
    return {
      name: item.name,
      percentage: item.level
    };
  });

  return skills;
};
