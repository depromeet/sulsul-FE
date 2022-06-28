import axios from 'axios';

import { refreshAccessToken } from '@/apis/user';

const isServer = typeof window === 'undefined';

export const BASE_URL: string = process.env.NEXT_PUBLIC_API_BASE_URL ?? '';

export const initAxiosConfig = () => {
  axios.defaults.baseURL = process.env.NODE_ENV === 'production' || isServer ? BASE_URL ?? '' : '';
  axios.defaults.timeout = 3000;
  axios.defaults.withCredentials = true;
};

export const initAxiosRefreshConfig = () => {
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const {
        config,
        response: { status },
      } = error;

      if (status === 401) {
        const originalRequest = config;
        // refreshToken으로 accessToken 갱신
        await refreshAccessToken();
        // 401로 요청 실패했던 요청 새로운 토큰으로 재요청
        return axios(originalRequest);
      }
      return Promise.reject(error);
    },
  );
};
