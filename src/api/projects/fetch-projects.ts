import 'server-only';
import { Project } from '@/src/types';
import { TableIdentifiers } from '@/sst-config/config/identifiers';
import { DynamoClient } from '../dynamo-client';

type FetchProjectParams = {
  withOrder: boolean;
};

export const fetchProjects = async (params?: FetchProjectParams): Promise<Project[]> => {
  const dynamoClient = DynamoClient.getInstance();
  const dbProjects = await dynamoClient.list(TableIdentifiers.projects);

  const projects: Project[] = dbProjects.map((item) => {
    return {
      slug: item.slug,
      bannerUrl: item.banner_url,
      campaignUrl: item.campaign_url,
      name: item.name,
      externalUrl: item.external_url,
      description: item.description,
      bulletPoints: item.details,
      client: item.client_name ?? undefined,
      order: item.order
    };
  });

  if (params?.withOrder) {
    return projects.sort((p1, p2) => p1.order - p2.order);
  }

  return projects;
};
