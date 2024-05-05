import { Stack, Table } from 'sst/constructs';
import { CERTIFICATIONS_TABLE_ID } from './ids';

export const createExperienceTable = (stack: Stack) => {
  return new Table(stack, CERTIFICATIONS_TABLE_ID, {
    fields: {
      id: 'number'
    },
    primaryIndex: { partitionKey: 'id' }
  });
};
