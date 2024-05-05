import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import {
  DynamoDBDocumentClient,
  GetCommand,
  ScanCommand,
  BatchGetCommand
} from '@aws-sdk/lib-dynamodb';

type KeyObj = Record<string, string | number>;

export class DynamoClient {
  // eslint-disable-next-line no-use-before-define
  private static instance: DynamoClient;
  private db: DynamoDBDocumentClient;

  private constructor() {
    this.db = DynamoDBDocumentClient.from(new DynamoDBClient({}));
  }

  public static getInstance(): DynamoClient {
    if (!DynamoClient.instance) {
      DynamoClient.instance = new DynamoClient();
    }
    return DynamoClient.instance;
  }

  async list(tableId: string): Promise<Record<string, any>[]> {
    try {
      const scan = new ScanCommand({
        TableName: tableId
      });
      const results = await this.db.send(scan);
      return results.Items ?? [];
    } catch (error) {
      return [];
    }
  }

  async get(tableId: string, key: KeyObj): Promise<Record<string, any> | undefined> {
    try {
      const get = new GetCommand({
        TableName: tableId,
        Key: key
      });
      const result = await this.db.send(get);
      return result.Item;
    } catch (error) {
      return undefined;
    }
  }

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
      const results = await this.db.send(getBatch);
      return results.Responses?.[tableId] ?? [];
    } catch (error) {
      return [];
    }
  }
}
