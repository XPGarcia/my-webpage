import axiosClient from '@/infra/axios/axios-client';
import { Experience } from '@/domain/entities';
import { ApiResponse, EducationResponse } from '@/infra/axios/entities';
import { ExperienceAdapter } from '@/infra/axios/adapters';

export async function useEducationList(): Promise<Experience[]> {
  const { data, status } = await axiosClient.get<ApiResponse<EducationResponse[]>>('/education');

  return ExperienceAdapter.educationListToDomains(data.data);
}
