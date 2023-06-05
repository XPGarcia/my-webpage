import { SocialMedia } from '@/domain/entities';
import { SocialMediaResponse } from '../entities';

export class SocialMediaAdapter {
  static toDomain(socialMediaResponse: SocialMediaResponse): SocialMedia {
    return {
      facebook: socialMediaResponse.facebook,
      github: socialMediaResponse.github,
      instagram: socialMediaResponse.instagram,
      linkedin: socialMediaResponse.linkedin,
      twitter: socialMediaResponse.twitter
    };
  }
}
