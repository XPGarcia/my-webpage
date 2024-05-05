import 'server-only';
import { Certification } from '@/src/types';
import { TableIdentifiers } from '@/sst-config/config/identifiers';
import { dynamoClient } from '../dynamo-client';

export const fetchCertifications = async (): Promise<Certification[]> => {
  const dbCertifications = await dynamoClient().list(TableIdentifiers.certifications);

  const certifications: Certification[] = dbCertifications.map((item) => {
    return {
      name: item.name,
      companyName: item.company_name,
      date: new Date(item.date),
      description: item.description
    };
  });

  return certifications;
};
