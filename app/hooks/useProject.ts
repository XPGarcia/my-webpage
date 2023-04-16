import axiosClient from '@/infra/axios/axios-client';
import { Project } from '@/domain/entities';
import { ApiResponse, ProjectResponse } from '@/infra/axios/entities';

export async function useProject({ code }: { code: string }): Promise<Project> {
  const { data, status } = await axiosClient.get<ApiResponse<ProjectResponse>>(
    `/project/byCode/${code}`
  );
  if (status !== 200) {
    console.log(status);
  }

  return mapToDomain(data.data);
}

function mapToDomain(projectResponse: ProjectResponse): Project {
  return {
    id: projectResponse.id,
    code: projectResponse.code,
    title: projectResponse.title,
    imageUrl: projectResponse.imageUrl,
    clientName: projectResponse.clientName,
    previewUrl: projectResponse.previewUrl,
    description: projectResponse.description,
    bulletPoints: projectResponse.bulletPoints,
    skills: projectResponse.skills
  };
}
