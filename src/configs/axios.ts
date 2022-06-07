import axios, { Axios } from 'axios';

const axiosClient: Axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || '',
  timeout: 3000,
  withCredentials: true,
});

export default axiosClient;
