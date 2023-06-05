export const env = {
  awsRegion: process.env.MY_AWS_REGION ?? '',
  awsS3Bucket: process.env.MY_AWS_S3BUCKET ?? '',
  awsAccessKey: process.env.MY_AWS_ACCESS_KEY ?? '',
  awsSecretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY ?? '',
  mixPanelToken: process.env.MIX_PANEL_TOKEN ?? ''
};
