import axios from 'axios';

const isServer = typeof window === 'undefined';

export const BASE_URL: string = process.env.NEXT_PUBLIC_API_BASE_URL ?? '';

export const initAxiosConfig = () => {
  axios.defaults.baseURL = process.env.NODE_ENV === 'production' || isServer ? BASE_URL ?? '' : '';
  axios.defaults.timeout = 3000;
  axios.defaults.withCredentials = true;
};
