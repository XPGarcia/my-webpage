import { Skill } from '@/domain/entities';
import { SkillResponse } from '../entities';

export class SkillAdapter {
  static toDomain(skillResponse: SkillResponse): Skill {
    return {
      id: skillResponse.id,
      name: skillResponse.name,
      percentage: skillResponse.percentage
    };
  }

  static toDomains(skillResponses: SkillResponse[]): Skill[] {
    if (!skillResponses) return [];

    return skillResponses.map((skillResponse) => this.toDomain(skillResponse));
  }
}
