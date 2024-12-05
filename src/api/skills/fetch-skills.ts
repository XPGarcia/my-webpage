import 'server-only';
import { Skill } from '@/src/types';
import { TableIdentifiers } from '@/sst-config/config/identifiers';
import { DynamoClient } from '../dynamo-client';

const PRIMARY_SKILL_THRESHOLD = 65;

type FetchSkillsParams = {
  onlyPrimaries?: boolean;
};

export const fetchSkills = async (params?: FetchSkillsParams): Promise<Skill[]> => {
  const dynamoClient = DynamoClient.getInstance();
  const dbSkills = await dynamoClient.list(TableIdentifiers.skills);

  const skills: Skill[] = dbSkills.map((item) => ({
    name: item.name,
    percentage: item.level
  }));

  if (params?.onlyPrimaries) {
    return skills.filter((skill) => skill.percentage >= PRIMARY_SKILL_THRESHOLD);
  }

  return skills;
};
