import axios from 'axios';

import { IBaseResponse } from '.';

export interface IContinent {
  id: number;
  name: string;
}

interface IGetContinentsResponseData extends IBaseResponse<IContinent[]> {}

/**
 * 대륙 목록 조회
 */
export const getContinents = async (auth: boolean) => {
  const res = await axios.get<IGetContinentsResponseData>(
    auth ? '/api/v1/continents' : '/guest/api/v1/continents',
  );
  return res.data;
};
