import { Experience } from '@/domain/entities';
import { EducationResponse, ExperienceResponse } from '../entities';
import { dateToShortString } from '@/app/utils';

export class ExperienceAdapter {
  static educationToDomain(educationResponse: EducationResponse): Experience {
    const dateFrom = dateToShortString(new Date(educationResponse.dateFrom));
    const dateTo = dateToShortString(
      educationResponse.dateTo ? new Date(educationResponse.dateTo) : undefined
    );
    return {
      role: educationResponse.title,
      companyName: educationResponse.institution,
      dateRange: [dateFrom, dateTo],
      description: educationResponse.description
    };
  }

  static educationListToDomains(educationResponses: EducationResponse[]): Experience[] {
    return educationResponses.map((educationResponse) => this.educationToDomain(educationResponse));
  }

  static experienceToDomain(experienceResponse: ExperienceResponse): Experience {
    const dateFrom = dateToShortString(new Date(experienceResponse.dateFrom));
    const dateTo = dateToShortString(new Date(experienceResponse.dateTo));
    return {
      role: experienceResponse.role,
      companyName: experienceResponse.company,
      dateRange: [dateFrom, dateTo],
      description: experienceResponse.description
    };
  }

  static experienceListToDomains(experienceResponses: ExperienceResponse[]): Experience[] {
    return experienceResponses.map((experienceResponse) =>
      this.experienceToDomain(experienceResponse)
    );
  }
}
