import { ICountry } from './country';

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
  imageUrl: string;
  content: string;
  alcohol: number;
  price: number;
  volume: number;
  deletedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
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

export interface IGetBeersResponseData {
  contents: IBeer[];
  hasNext: boolean;
  nextCursor: number;
}

/**
 * 맥주 목록 조회
 */
export const getBeers = async (payload: IGetBeersPayload) =>
  await axios.post<IGetBeersResponseData>('/api/v2/beers', payload);

/**
 * 맥주 상세정보 조회
 */
export const getBeer = async (beerId: number) => await axios.get<IBeer>(`/api/v2/beers/${beerId}`);

/**
 * 맥주 종류 목록 조회
 */
export const getBeerTypes = async () => await axios.get<IBeerType[]>('/api/v2/beers/types');
