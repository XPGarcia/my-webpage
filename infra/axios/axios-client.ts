import axios from 'axios';
import { env } from '@/config/env';

const axiosClient = axios.create({
  baseURL: `${env.apiUrl}`
});

axiosClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${env.jwtToken}`;
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;
    if (response.status === 401 || response.status === 403) {
      console.log(response);
    }

    throw error;
  }
);

export default axiosClient;
