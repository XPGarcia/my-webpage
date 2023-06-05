import { Language } from '@/domain/entities/language';
import { LanguageResponse } from '../entities';

export class LanguageAdapter {
  static toDomain(languageResponse: LanguageResponse): Language {
    return {
      id: languageResponse.id,
      level: languageResponse.level,
      name: languageResponse.name
    };
  }

  static toDomains(languageResponses: LanguageResponse[]): Language[] {
    return languageResponses.map((languageResponse) => this.toDomain(languageResponse));
  }
}
