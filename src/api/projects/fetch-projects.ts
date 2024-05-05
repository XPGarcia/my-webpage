import 'server-only';
import { Project } from '@/src/types';
import { TableIdentifiers } from '@/sst-config/config/identifiers';
import { dynamoClient } from '../dynamo-client';

export const fetchProjects = async (): Promise<Project[]> => {
  const dbProjects = await dynamoClient().list(TableIdentifiers.projects);

  const projects: Project[] = dbProjects.map((item) => {
    return {
      slug: item.slug,
      bannerUrl: item.banner_url,
      campaignUrl: item.campaign_url,
      name: item.name,
      externalUrl: item.external_url,
      description: item.description,
      bulletPoints: item.details,
      client: item.client_name ?? undefined
    };
  });

  return projects;
};
