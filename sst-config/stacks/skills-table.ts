import { Stack, Table } from 'sst/constructs';
import { SKILLS_TABLE_ID } from './ids';

export const createSkillsTable = (stack: Stack) => {
  return new Table(stack, SKILLS_TABLE_ID, {
    fields: {
      id: 'number',
      name: 'string',
      level: 'string'
    },
    primaryIndex: { partitionKey: 'id' }
  });
};
