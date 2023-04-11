import axiosClient from '@/infra/axios/axios-client';
import { env } from '@/config/env';
import { Skill } from '@/domain/entities';
import { ApiResponse, SkillResponse } from '@/infra/axios/entities';

export async function useSkills(): Promise<Skill[]> {
  const { data, status } = await axiosClient.get<ApiResponse<SkillResponse[]>>(
    `/userSkill/${env.userId}`
  );
  if (status === 401 || status === 403) {
    console.log(status);
  }

  return mapToDomains(data.data);
}

function mapToDomain(skillResponse: SkillResponse): Skill {
  return {
    id: skillResponse.id,
    name: skillResponse.name,
    percentage: skillResponse.percentage
  };
}

function mapToDomains(skillResponses: SkillResponse[]): Skill[] {
  return skillResponses.map((skillResponse) => mapToDomain(skillResponse));
}
