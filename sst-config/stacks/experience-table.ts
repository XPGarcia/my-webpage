import { Stack, Table } from 'sst/constructs';
import { CERTIFICATIONS_TABLE_ID } from './ids';

export const createExperienceTable = (stack: Stack) => {
  return new Table(stack, CERTIFICATIONS_TABLE_ID, {
    fields: {
      id: 'number',
      name: 'string',
      company: 'string',
      date: 'string',
      description: 'string'
    },
    primaryIndex: { partitionKey: 'id' }
  });
};
