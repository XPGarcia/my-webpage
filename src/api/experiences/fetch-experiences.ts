import 'server-only';
import { Experience } from '@/src/types';
import { TableIdentifiers } from '@/sst-config/config/identifiers';
import { dynamoClient } from '../dynamo-client';

export const fetchExperiences = async (): Promise<Experience[]> => {
  const dbExperiences = await dynamoClient().list(TableIdentifiers.experiences);

  const experiences = dbExperiences.map((item) => {
    return {
      role: item.role,
      companyName: item.company_name,
      dateStart: new Date(item.date_start),
      dateEnd: item.date_end ? new Date(item.date_end) : undefined,
      description: item.description
    };
  });

  return experiences;
};
