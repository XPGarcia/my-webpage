import axiosClient from '@/infra/axios/axios-client';
import { Project } from '@/domain/entities';
import { ApiResponse, ProjectResponse } from '@/infra/axios/entities';

export async function useProjects(): Promise<Project[]> {
  const { data, status } = await axiosClient.get<ApiResponse<ProjectResponse[]>>('/project');
  if (status !== 200) {
    console.log(status);
  }

  return mapToDomain(data.data);
}

function mapToDomain(projects: ProjectResponse[]): Project[] {
  return projects.map((projectResponse) => {
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
  });
}
