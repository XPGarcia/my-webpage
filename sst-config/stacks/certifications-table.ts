import { Stack, Table } from 'sst/constructs';
import { EXPERIENCES_TABLE_ID } from './ids';

export const createCertificationsTable = (stack: Stack) => {
  return new Table(stack, EXPERIENCES_TABLE_ID, {
    fields: {
      id: 'number'
    },
    primaryIndex: { partitionKey: 'id' }
  });
};
