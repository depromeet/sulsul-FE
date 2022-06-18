import { IBaseResponse } from '.';

import axios from '@/configs/axios';

export interface IProfile {
  beerCount: string;
  recordCount: string;
  countryCount: string;
  memberBeerCount: string;
  requestbeerCount: string;
  name: string;
}

export interface IGetProfile extends IBaseResponse<IProfile> {}

/**
 * 프로필 데이터 조회
 */
export const getProfile = async () => {
  const res = await axios.get<IGetProfile>('/api/v1/profile');
  return res.data.contents;
};
