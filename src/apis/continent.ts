import axios from '@/configs/axios';

export interface IContinent {
  id: number;
  name: string;
}

interface IGetContinentsResponseData {
  data: IContinent[];
}

/**
 * 대륙 목록 조회
 */
export const getContinents = async () => {
  const res = await axios.get<IGetContinentsResponseData>('/api/v1/continents');
  return res.data;
};
