export const env = {
  awsRegion: process.env.AWS_REGION ?? '',
  awsS3Bucket: process.env.AWS_S3BUCKET ?? '',
  awsAccessKey: process.env.AWS_ACCESS_KEY ?? '',
  awsSecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? ''
};
