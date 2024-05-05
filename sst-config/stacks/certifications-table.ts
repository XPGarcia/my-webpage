import { Stack, Table } from 'sst/constructs';
import { EXPERIENCES_TABLE_ID } from './ids';

export const createCertificationsTable = (stack: Stack) => {
  return new Table(stack, EXPERIENCES_TABLE_ID, {
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
