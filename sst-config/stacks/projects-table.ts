import { Stack, Table } from 'sst/constructs';
import { PROJECTS_TABLE_ID } from './ids';

export const createProjectsTable = (stack: Stack) => {
  return new Table(stack, PROJECTS_TABLE_ID, {
    fields: {
      slug: 'string'
    },
    primaryIndex: { partitionKey: 'slug' }
  });
};
