import axiosClient from '@/infra/axios/axios-client';
import { User } from '@/domain/entities';
import { ApiResponse, UserResponse } from '@/infra/axios/entities';
import { UserAdapter } from '@/infra/axios/adapters';

export async function useUser({
  withLanguages = false,
  withSocialMedia = false
}: {
  withLanguages?: boolean;
  withSocialMedia?: boolean;
}): Promise<User> {
  const { data, status } = await axiosClient.get<ApiResponse<UserResponse>>('/user', {
    params: { withLanguages, withSocialMedia }
  });

  return UserAdapter.toDomain(data.data);
}
