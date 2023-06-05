import axiosClient from '@/infra/axios/axios-client';
import { Certification } from '@/domain/entities';
import { ApiResponse, CertificationResponse } from '@/infra/axios/entities';
import { CertificationAdapter } from '@/infra/axios/adapters';

export async function useCertificationList(): Promise<Certification[]> {
  const { data, status } = await axiosClient.get<ApiResponse<CertificationResponse[]>>(
    '/certification'
  );

  return CertificationAdapter.toDomains(data.data);
}
