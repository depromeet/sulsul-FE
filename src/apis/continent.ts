import axios from '@/configs/axios';

export interface IContinent {
  id: number;
  name: string;
}

/**
 * 대륙 목록 조회
 */
export const getContinents = async () => await axios.get<IContinent[]>('/api/v1/continents');
