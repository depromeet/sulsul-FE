import { QueryFunctionContext } from 'react-query';

import { ICountry } from './country';

import { IBasePageNationResponse, IBaseResponse } from '.';

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

export interface IGetBeersResponseData extends IBasePageNationResponse<IBeer[]> {}

/**
 * 맥주 목록 조회
 */
export const getBeers = async (context?: QueryFunctionContext) => {
  const { pageParam } = context || {};
  const { payload, auth } = pageParam;
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
export const getBeersCount = async (auth?: boolean) => {
  const res = await axios.get<IGetBeersCountResponseData>(
    auth ? '/api/v2/beers/count' : '/guest/api/v1/beers/count',
  );
  return res.data;
};

export interface IGetBeersRecommendResponseData extends IBaseResponse<IBeer[]> {}

/**
 * 추천 맥주 목록 조회
 */
export const getBeersRecommend = async (auth: boolean) => {
  const res = await axios.get<IGetBeersRecommendResponseData>(
    auth ? '/api/v2/beers/recommend' : '/guest/api/v1/beers/recommend',
  );
  return res.data.contents;
};

export interface IGetBeersLikedPayload extends IGetBeersPayload {}

export interface IGetBeersLikedResponseData extends IBaseResponse<IBeer[]> {}

/**
 * 찜한 맥주 목록 조회
 */
export const getBeersLiked = async (payload: IGetBeersLikedPayload) => {
  const res = await axios.post<IGetBeersLikedResponseData>('/api/v2/beers/liked', payload);
  return res.data.contents;
};

export interface IGetBeerResponseData extends IBaseResponse<IBeer> {}

/**
 * 맥주 상세정보 조회
 */
export const getBeer = async (beerId: number, auth?: boolean) => {
  const res = await axios.get<IGetBeerResponseData>(
    auth ? `/api/v1/beers/${beerId}` : `/guest/api/v1/beers/${beerId}`,
  );
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

export interface ITop3BeerFlavor {
  content: string;
  count: number;
}

export interface ITop3BeerFlavorResponseData extends IBaseResponse<ITop3BeerFlavor[]> {}

/**
 * 맥주 맛 TOP3 조회
 */
export const getTop3BeerFlavor = async (beerId: number, auth?: boolean) => {
  const res = await axios.get<ITop3BeerFlavorResponseData>(
    auth ? `/api/v1/flavors/${beerId}` : `/guest/api/v1/flavors/${beerId}`,
  );
  return res.data.contents;
};
