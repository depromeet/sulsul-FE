import { QueryFunctionContext } from 'react-query';
import axios from 'axios';

import { IBeer } from '../beer';
import { IBasePaginationResponse } from '..';

export interface IFlavor {
  id: number;
  content: string;
}

export interface IRecord {
  id: number;
  content: string;
  feel: 1 | 2 | 3 | 4 | 5;
  imageUrl: string;
  memberRecordDto: any;
  createdAt: string;
  updatedAt: string;
  startCountryKor: string;
  startCountryEng: string;
  endCountryKor: string;
  endCountryEng: string;
  flavorDtos: IFlavor[];
  beerResponseDto: IBeer;
  recordCount: number;
}

export type IRecordsByBeer = Pick<
  IRecord,
  'id' | 'content' | 'feel' | 'memberRecordDto' | 'createdAt' | 'updatedAt' | 'flavorDtos'
>;

export interface IGetRecordsByBeerPayload {
  beerId: number;
  recordId?: number;
}

export interface IGetRecordsByBeer extends IBasePaginationResponse<IRecordsByBeer[]> {}

/**
 * 맥주별 record 조회
 */

export const getRecordsByBeer = async (context?: QueryFunctionContext) => {
  const { pageParam } = context || {};
  const { payload, auth } = pageParam;
  const res = await axios.post<IGetRecordsByBeer>(
    auth ? '/api/v1/records/find' : '/guest/api/v1/records/find',
    payload,
  );
  return res.data;
};
