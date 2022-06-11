import { IBaseResponse } from '..';
import { ICountry } from './country';
import { IContinent } from '../continent';

import axios from '@/configs/axios';

interface IGetContinentResponseData extends IBaseResponse<ICountry[]> {}

/**
 * 국가 목록 조회
 */
export const getCountries = async (continentId: IContinent['id'] | undefined, auth: boolean) => {
  const res = await axios.get<IGetContinentResponseData>(
    auth ? '/api/v1/countries' : '/guest/api/v1/countries',
    {
      params: { continentId },
    },
  );
  return res.data;
};
