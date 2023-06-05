import { env } from '@/config/env';
import FileHandler from '@/domain/contracts/file-handler';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { Readable } from 'stream';
import { createWriteStream } from 'fs';

export default class ImplFileHandler implements FileHandler {
  private static instance: FileHandler;

  private s3Client = new S3Client({
    credentials: {
      accessKeyId: env.awsAccessKey,
      secretAccessKey: env.awsSecretAccessKey
    },
    region: env.awsRegion
  });

  static getInstance(): FileHandler {
    if (!this.instance) {
      this.instance = new ImplFileHandler();
    }
    return this.instance;
  }

  async downloadFile(fileName: string): Promise<void> {
    const params = {
      Bucket: env.awsS3Bucket,
      Key: `${fileName}`
    };

    try {
      const command = new GetObjectCommand(params);
      const data = await this.s3Client.send(command);
      if (!data.Body) throw Error('Error downloading the file');

      const body = data.Body as Readable;

      body.pipe(createWriteStream(fileName));
    } catch (error) {
      console.log(error);
    }
  }
}
