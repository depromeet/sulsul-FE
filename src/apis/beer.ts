import { ICountry } from './country';

import { IBaseResponse } from '.';

import axios from '@/configs/axios';

export enum EBeerType {
  LIGHT_ALE = 'LIGHT_ALE',
  IPA = 'IPA',
  PALE_ALE = 'PALE_ALE',
  BROWN_ALE = 'BROWN_ALE',
  LARGER = 'LARGER',
  WEIZEN = 'WEIZEN',
  PILSNER = 'PILSNER',
}

export interface IBeerType {
  nameEng: EBeerType;
  nameKor: string;
  description: string;
  imageUrl: string;
}

export interface IBeer {
  id: number;
  country?: ICountry;
  type?: IBeerType;
  nameKor: string;
  nameEng: string;
  startCountry: Pick<ICountry, 'nameKor' | 'nameEng'>;
  endCountry: Pick<ICountry, 'nameKor' | 'nameEng'>;
  imageUrl: string;
  content: string;
  alcohol: number;
  price: number;
  volume: number;
  deletedAt?: Date | number;
  createdAt: Date | number;
  updatedAt: Date | number;
  feel?: number | null;
  isLiked?: boolean;
}

export interface IBeerListFilter {
  beerTypes?: EBeerType[];
  countryIds?: number[];
}

export enum EBeerSortBy {
  NAME_KOR_ASC = 'nameKor.asc',
  NAME_KOR_DESC = 'nameKor.desc',
  NAME_ENG_ASC = 'nameEng.asc',
  NAME_ENG_DESC = 'nameEng.desc',
  ALCOHOL_ASC = 'alcohol.asc',
  ALCOHOL_DESC = 'alcohol.desc',
  RECORD_ASC = 'record.asc',
  RECORD_DESC = 'record.desc',
  ID_ASC = 'createdAt.asc',
  ID_DESC = 'createdAt.desc',
  UPDATED_AT_ASC = 'updatedAt.asc',
  UPDATED_AT_DESC = 'updatedAt.desc',
}

export interface IGetBeersPayload {
  query?: string;
  cursor?: number;
  limit?: number;
  filter?: IBeerListFilter;
  sortBy?: EBeerSortBy[];
}

export interface IGetBeersResponseData extends IBaseResponse<IBeer[]> {
  hasNext: boolean;
  nextCursor: number;
  resultCount: number;
}

/**
 * 맥주 목록 조회
 */
export const getBeers = async (payload: IGetBeersPayload, auth: boolean) => {
  const res = await axios.post<IGetBeersResponseData>(
    auth ? '/api/v3/beers' : '/guest/api/v1/beers',
    payload,
  );
  return res.data;
};

export interface IGetBeersCountResponseData extends IBaseResponse<{ totalCount: number }> {}

/**
 * 맥주 개수 조회
 */
export const getBeersCount = async (auth: boolean) => {
  const res = await axios.post<IGetBeersCountResponseData>(
    auth ? '/api/v2/beers/count' : '/guest/api/v1/beers/count',
  );
  return res.data;
};

export interface IGetBeersRecommendResponseData extends IBaseResponse<{ beers: IBeer[] }> {}

/**
 * 추천 맥주 목록 조회
 */
export const getBeersRecommend = async () => {
  const res = await axios.get<IGetBeersRecommendResponseData>('/api/v1/beers/recommend');
  return res.data;
};

export interface IGetBeersLikedResponseData extends IBaseResponse<{ beers: IBeer[] }> {}

/**
 * 찜한 맥주 목록 조회
 */
export const getBeersLiked = async () => {
  const res = await axios.get<IGetBeersLikedResponseData>('/api/v1/beers/liked');
  return res.data;
};

export interface IGetBeerResponseData extends IBaseResponse<IBeer> {}

/**
 * 맥주 상세정보 조회
 */
export const getBeer = async (beerId: number) => {
  const res = await axios.get<IGetBeerResponseData>(`/api/v1/beers/${beerId}`);
  return res.data.contents;
};

export interface IGetBeerTypesResponseData extends IBaseResponse<IBeerType[]> {}

/**
 * 맥주 종류 목록 조회
 */
export const getBeerTypes = async (auth: boolean) => {
  const res = await axios.get<IGetBeerTypesResponseData>(
    auth ? '/api/v1/beers/types' : '/guest/api/v1/beers/types',
  );
  return res.data;
};

export interface IGetTop3BeerFlavor {
  content: string;
  count: number;
}

export interface IGetTop3BeerFlavorResponseData extends IBaseResponse<IGetTop3BeerFlavor[]> {}

/**
 * 맥주 맛 TOP3 조회
 */
export const getTop3BeerFlavor = async (beerId: number) => {
  const res = await axios.get<IGetTop3BeerFlavorResponseData>(`/api/v1/flavors/${beerId}`);
  return res.data;
};
