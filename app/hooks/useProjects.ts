import axiosClient from '@/infra/axios/axios-client';
import { Project } from '@/domain/entities';
import { ApiResponse, ProjectResponse } from '@/infra/axios/entities';
import { ProjectAdapter } from '@/infra/axios/adapters';

export async function useProjects(): Promise<Project[]> {
  const { data, status } = await axiosClient.get<ApiResponse<ProjectResponse[]>>('/project');

  return ProjectAdapter.toDomains(data.data);
}
