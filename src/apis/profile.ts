import axios from 'axios';

import { IBaseResponse } from '.';

export interface IProfile {
  beerCount: number;
  recordCount: number;
  countryCount: number;
  memberBeerCount: number;
  requestBeerCount: number;
  nickname: string;
  email: string;
  remainRecord: number;
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
 * 전체 레벨 조회
 */
export const getLevels = async () => {
  const res = await axios.get<IGetLevels>('/api/v1/member-levels/all');
  return res.data.contents;
};

export interface IGetUserLevel extends IBaseResponse<ILevel> {}

/**
 * 유저 레벨 조회
 */
export const getUserLevel = async () => {
  const res = await axios.get<IGetUserLevel>('/api/v1/member-levels');
  return res.data.contents;
};

export interface IGetUserLevelByRecordCount extends IBaseResponse<ILevel> {}

/**
 * 기록 수에 따른 레벨 조회
 */
export const getUserLevelByRecordCount = async (count: number) => {
  const res = await axios.get<IGetUserLevelByRecordCount>(`/api/v1/member-levels/${count}`);
  return res.data.contents;
};
