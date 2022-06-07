import axios, { Axios } from 'axios';

/** @todo .env 파일에서 불러오기 */
export const API_BASE_URL = 'http://api-dev.beerair.ml/';

const axiosClient: Axios = axios.create({
  baseURL: API_BASE_URL,
  timeout: 3000,
});

export default axiosClient;
