import axiosClient from '@/infra/axios/axios-client';
import { Project } from '@/domain/entities';
import { ApiResponse, ProjectResponse } from '@/infra/axios/entities';
import { ProjectAdapter } from '@/infra/axios/adapters';

export async function useProject({ code }: { code: string }): Promise<Project> {
  const { data, status } = await axiosClient.get<ApiResponse<ProjectResponse>>(
    `/project/byCode/${code}`
  );

  return ProjectAdapter.toDomain(data.data);
}
