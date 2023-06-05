import axiosClient from '@/infra/axios/axios-client';
import { Skill } from '@/domain/entities';
import { ApiResponse, SkillResponse } from '@/infra/axios/entities';
import { SkillAdapter } from '@/infra/axios/adapters';

export async function useSkills(): Promise<Skill[]> {
  const { data, status } = await axiosClient.get<ApiResponse<SkillResponse[]>>('/userSkill');

  return SkillAdapter.toDomains(data.data);
}
