import axios, { Axios } from 'axios';

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const axiosClient: Axios = axios.create({
  baseURL: API_BASE_URL,
  timeout: 3000,
});

export default axiosClient;
