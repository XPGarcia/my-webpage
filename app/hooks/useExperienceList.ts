import axiosClient from '@/infra/axios/axios-client';
import { env } from '@/config/env';
import { Experience } from '@/domain/entities';
import { ApiResponse, ExperienceResponse } from '@/infra/axios/entities';
import { ExperienceAdapter } from '@/infra/axios/adapters';

export async function useExperienceList(): Promise<Experience[]> {
  const { data, status } = await axiosClient.get<ApiResponse<ExperienceResponse[]>>('/experience');

  return ExperienceAdapter.experienceListToDomains(data.data);
}
