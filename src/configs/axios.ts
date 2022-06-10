import axios, { Axios } from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '';
const isServer = typeof window === 'undefined';

const axiosClient: Axios = axios.create({
  baseURL: process.env.NODE_ENV === 'production' || isServer ? BASE_URL : '',
  timeout: 3000,
  withCredentials: true,
});

export default axiosClient;
