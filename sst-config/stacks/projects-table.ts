import { Stack, Table } from 'sst/constructs';
import { PROJECTS_TABLE_ID } from './ids';

export const createProjectsTable = (stack: Stack) => {
  return new Table(stack, PROJECTS_TABLE_ID, {
    fields: {
      id: 'number',
      slug: 'string',
      banner_url: 'string',
      campaign_url: 'string',
      project_name: 'string',
      path: 'string',
      external_url: 'string',
      description: 'string',
      bullet_points: 'string',
      skills_id: 'string',
      client_name: 'string'
    },
    primaryIndex: { partitionKey: 'id' }
  });
};
