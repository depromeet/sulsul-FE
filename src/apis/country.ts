import { IContinent } from './continent';

import axios from '@/configs/axios';

export interface ICountry {
  id: number;
  nameKor: string;
  nameEng: string;
  imageUrl: string;
  continent?: IContinent;
}

/**
 * 국가 목록 조회
 */
export const getCountries = async (continentId?: IContinent['id']) =>
  await axios.get<ICountry[]>('/api/v1/countries', { params: { continentId } });
