import axiosClient from '@/infra/axios/axios-client';
import { env } from '@/config/env';
import { User } from '@/domain/entities';
import { ApiResponse, UserResponse } from '@/infra/axios/entities';

export async function useUser({
  withLanguages = false
}: {
  withLanguages?: boolean;
}): Promise<User> {
  const { data, status } = await axiosClient.get<ApiResponse<UserResponse>>(`/user/${env.userId}`, {
    params: { withLanguages }
  });
  if (status === 401 || status === 403) {
    console.log(status);
  }

  return mapToDomain(data.data);
}

function mapToDomain(userResponse: UserResponse): User {
  const user: User = { ...userResponse, birthDate: new Date(userResponse.birthDate) };

  return user;
}
