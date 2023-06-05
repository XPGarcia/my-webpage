import { User } from '@/domain/entities';
import { UserResponse } from '../entities';
import { SocialMediaAdapter } from './socialMedia.adapter';
import { LanguageAdapter } from './language.adapter';

export class UserAdapter {
  static toDomain(userResponse: UserResponse): User {
    const socialMedia =
      userResponse.socialMedia && SocialMediaAdapter.toDomain(userResponse.socialMedia);
    const languages = userResponse.languages && LanguageAdapter.toDomains(userResponse.languages);

    return {
      id: userResponse.id,
      birthDate: new Date(userResponse.birthDate),
      firstName: userResponse.firstName,
      lastName: userResponse.lastName,
      email: userResponse.email,
      available: userResponse.available,
      description: userResponse.description,
      nationality: userResponse.nationality,
      role: userResponse.role,
      address: userResponse.address,
      phone: userResponse.phone,
      socialMedia,
      languages
    };
  }
}
