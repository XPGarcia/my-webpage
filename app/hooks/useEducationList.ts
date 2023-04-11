import axiosClient from '@/infra/axios/axios-client';
import { env } from '@/config/env';
import { Experience } from '@/domain/entities';
import { dateToShortString } from '../utils';
import { ApiResponse, EducationResponse } from '@/infra/axios/entities';

export async function useEducationList(): Promise<Experience[]> {
  const { data, status } = await axiosClient.get<ApiResponse<EducationResponse[]>>(
    `/user/${env.userId}/education`
  );
  if (status === 401 || status === 403) {
    console.log(status);
  }

  return mapToDomainExperience(data.data);
}

function mapToDomainExperience(educationResponseList: EducationResponse[]): Experience[] {
  return educationResponseList.map((educationResponse) => {
    const dateFrom = dateToShortString(new Date(educationResponse.dateFrom));
    const dateTo = dateToShortString(
      educationResponse.dateTo ? new Date(educationResponse.dateTo) : undefined
    );
    return {
      role: educationResponse.title,
      companyName: educationResponse.institution,
      dateRange: [dateFrom, dateTo],
      description: educationResponse.description
    };
  });
}
