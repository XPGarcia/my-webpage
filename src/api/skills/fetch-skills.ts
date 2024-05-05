import 'server-only';
import { Skill } from '@/src/types';
import { TableIdentifiers } from '@/sst-config/config/identifiers';
import { DynamoClient } from '../dynamo-client';

export const fetchSkills = async (): Promise<Skill[]> => {
  const dynamoClient = DynamoClient.getInstance();
  const dbSkills = await dynamoClient.list(TableIdentifiers.skills);

  const skills: Skill[] = dbSkills.map((item) => {
    return {
      name: item.name,
      percentage: item.level
    };
  });

  return skills;
};
