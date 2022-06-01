import { IContinent } from './continent';

import { IBaseResponse } from '.';

import axios from '@/configs/axios';

export interface ICountry {
  id: number;
  nameKor: string;
  nameEng: string;
  imageUrl: string;
  continent?: IContinent;
}

interface IGetContinentResponseData extends IBaseResponse<ICountry[]> {}

/**
 * 국가 목록 조회
 */
export const getCountries = async (continentId?: IContinent['id']) => {
  const res = await axios.get<IGetContinentResponseData>('/api/v1/countries', {
    params: { continentId },
  });
  return res.data;
};
