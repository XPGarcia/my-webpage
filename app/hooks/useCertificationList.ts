import axiosClient from '@/infra/axios/axios-client';
import { env } from '@/config/env';
import { Certification } from '@/domain/entities';
import { dateToShortString } from '../utils';
import { ApiResponse, CertificationResponse } from '@/infra/axios/entities';

export async function useCertificationList(): Promise<Certification[]> {
  const { data, status } = await axiosClient.get<ApiResponse<CertificationResponse[]>>(
    `/user/${env.userId}/certification`
  );
  if (status === 401 || status === 403) {
    console.log(status);
  }

  return mapToDomainExperience(data.data);
}

function mapToDomainExperience(
  certificationResponseList: CertificationResponse[]
): Certification[] {
  return certificationResponseList.map((certificationResponse) => {
    const date = dateToShortString(new Date(certificationResponse.date));
    return {
      name: certificationResponse.title,
      company: certificationResponse.institution,
      date,
      description: certificationResponse.description
    };
  });
}
