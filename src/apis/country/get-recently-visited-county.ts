import { IBaseResponse } from '..';

import axios from '@/configs/axios';

export interface IRecentlyVisitedCountry {
  nameKor: string;
  nameEng: string;
  count: number;
}

export type IGetRecentlyVisitedCountryResponseData = IBaseResponse<IRecentlyVisitedCountry>;

export const getRecentlyVisitedCountry = async () => {
  const res = await axios.get<IGetRecentlyVisitedCountryResponseData>(
    '/api/v1/records/recently-country',
  );
  return res.data.contents;
};
