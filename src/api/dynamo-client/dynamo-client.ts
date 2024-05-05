import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import {
  DynamoDBDocumentClient,
  GetCommand,
  ScanCommand,
  BatchGetCommand
} from '@aws-sdk/lib-dynamodb';

type KeyObj = Record<string, string | number>;

export const dynamoClient = () => {
  const db = DynamoDBDocumentClient.from(new DynamoDBClient({}));

  return {
    async list(tableId: string): Promise<Record<string, any>[]> {
      try {
        const scan = new ScanCommand({
          TableName: tableId
        });
        const results = await db.send(scan);
        return results.Items ?? [];
      } catch (error) {
        return [];
      }
    },

    async get(tableId: string, key: KeyObj): Promise<Record<string, any> | undefined> {
      try {
        const get = new GetCommand({
          TableName: tableId,
          Key: key
        });
        const result = await db.send(get);
        return result.Item;
      } catch (error) {
        return undefined;
      }
    },

    async findByIds(tableId: string, ids: number[]): Promise<Record<string, any>[]> {
      try {
        const keys = ids.map((id) => ({ id }));

        const getBatch = new BatchGetCommand({
          RequestItems: {
            [tableId]: {
              Keys: keys
            }
          }
        });
        const results = await db.send(getBatch);
        return results.Responses?.[tableId] ?? [];
      } catch (error) {
        return [];
      }
    }
  };
};
