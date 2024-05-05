import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, ScanCommand } from '@aws-sdk/lib-dynamodb';

export const dynamoClient = () => {
  const db = DynamoDBDocumentClient.from(new DynamoDBClient({}));

  return {
    async list(tableId: string): Promise<Record<string, any>[]> {
      const scan = new ScanCommand({
        TableName: tableId
      });
      const results = await db.send(scan);
      return results.Items ?? [];
    }
  };
};
