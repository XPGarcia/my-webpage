import { Certification } from '@/domain/entities';
import { CertificationResponse } from '../entities';
import { dateToShortString } from '@/app/utils';

export class CertificationAdapter {
  static toDomain(certificationResponse: CertificationResponse): Certification {
    const date = dateToShortString(new Date(certificationResponse.date));
    return {
      name: certificationResponse.title,
      company: certificationResponse.institution,
      date,
      description: certificationResponse.description
    };
  }

  static toDomains(certificationResponses: CertificationResponse[]): Certification[] {
    return certificationResponses.map((certificationResponse) =>
      this.toDomain(certificationResponse)
    );
  }
}
