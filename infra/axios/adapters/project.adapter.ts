import { Project } from '@/domain/entities';
import { ProjectResponse } from '../entities';
import { SkillAdapter } from './skill.adapter';

export class ProjectAdapter {
  static toDomain(projectResponse: ProjectResponse): Project {
    const skills = SkillAdapter.toDomains(projectResponse.skills);

    return {
      id: projectResponse.id,
      code: projectResponse.code,
      title: projectResponse.title,
      imageUrl: projectResponse.imageUrl,
      clientName: projectResponse.clientName,
      previewUrl: projectResponse.previewUrl,
      description: projectResponse.description,
      bulletPoints: projectResponse.bulletPoints,
      skills
    };
  }

  static toDomains(projectResponses: ProjectResponse[]): Project[] {
    return projectResponses.map((projectResponse) => this.toDomain(projectResponse));
  }
}
