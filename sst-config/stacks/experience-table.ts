import { Stack, Table } from 'sst/constructs';

export const createExperienceTable = (stack: Stack) => {
  return new Table(stack, 'experiences', {
    fields: {
      id: 'number',
      role: 'string',
      company_name: 'string',
      date_start: 'string',
      date_end: 'string',
      description: 'string'
    },
    primaryIndex: { partitionKey: 'id' }
  });
};
