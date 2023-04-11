import axiosClient from '@/infra/axios/axios-client';
import { env } from '@/config/env';
import { Experience } from '@/domain/entities';
import { dateToShortString } from '../utils';
import { ApiResponse, ExperienceResponse } from '@/infra/axios/entities';

export async function useExperienceList(): Promise<Experience[]> {
  const { data, status } = await axiosClient.get<ApiResponse<ExperienceResponse[]>>(
    `/user/${env.userId}/experience`
  );
  if (status === 401 || status === 403) {
    console.log(status);
  }

  return mapToDomainExperience(data.data);
}

function mapToDomainExperience(experienceResponseList: ExperienceResponse[]): Experience[] {
  return experienceResponseList.map((experienceResponse) => {
    const dateFrom = dateToShortString(new Date(experienceResponse.dateFrom));
    const dateTo = dateToShortString(new Date(experienceResponse.dateTo));
    return {
      role: experienceResponse.role,
      companyName: experienceResponse.company,
      dateRange: [dateFrom, dateTo],
      description: experienceResponse.description
    };
  });
}
