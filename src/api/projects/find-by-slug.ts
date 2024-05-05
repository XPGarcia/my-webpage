import 'server-only';
import { Project, Skill } from '@/src/types';
import { TableIdentifiers } from '@/sst-config/config/identifiers';
import { DynamoClient } from '../dynamo-client';

export const findProjectBySlug = async (slug: string): Promise<Project | undefined> => {
  const dynamoClient = DynamoClient.getInstance();
  const dbProject = await dynamoClient.get(TableIdentifiers.projects, { slug });

  if (!dbProject) {
    return;
  }

  const skillsId = Array.from<number>(dbProject.skills ?? new Set());
  const dbSkills = await dynamoClient.findByIds(TableIdentifiers.skills, skillsId);

  const skills: Skill[] = dbSkills.map((item) => {
    return {
      name: item.name,
      percentage: item.level
    };
  });

  const project: Project = {
    slug: dbProject.slug,
    bannerUrl: dbProject.banner_url,
    campaignUrl: dbProject.campaign_url,
    name: dbProject.name,
    externalUrl: dbProject.external_url,
    description: dbProject.description,
    bulletPoints: Array.from(dbProject.details),
    client: dbProject.client ?? undefined,
    skills
  };

  return project;
};
