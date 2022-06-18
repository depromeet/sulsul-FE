import { IBaseResponse } from '.';

import axios from '@/configs/axios';

export interface IProfile {
  beerCount: string;
  recordCount: string;
  countryCount: string;
  memberBeerCount: string;
  requestBeerCount: string;
  nickname: string;
}

export interface IGetProfile extends IBaseResponse<IProfile> {}

/**
 * 프로필 데이터 조회
 */
export const getProfile = async () => {
  const res = await axios.get<IGetProfile>('/api/v1/profile');
  return res.data.contents;
};

export interface ILevel {
  id: number;
  tier: number;
  imageUrl: string;
  req: number;
}

export interface IGetLevels extends IBaseResponse<ILevel[]> {}

/**
 * 레벨 정보 조회
 */
export const getLevels = async () => {
  const res = await axios.get<IGetLevels>('/api/v1/member-levels/all');
  return res.data.contents;
};
