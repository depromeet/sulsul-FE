import axios, { Axios } from 'axios';

/** @todo .env 파일에서 불러오기 */
export const API_BASE_URL = 'http://ec2-3-34-48-218.ap-northeast-2.compute.amazonaws.com:8080/';

const axiosClient: Axios = axios.create({
  baseURL: API_BASE_URL,
  timeout: 3000,
});

export default axiosClient;
