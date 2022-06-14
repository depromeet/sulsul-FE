import { IBeer } from '../beer';
import { IBaseResponse } from '..';

import axios from '@/configs/axios';

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

export interface IGetRecordsByBeer extends IBaseResponse<IRecordsByBeer[]> {}

/**
 * 맥주별 record 조회
 */

export const getRecordsByBeer = async (payload: IGetRecordsByBeerPayload) => {
  const res = await axios.post<IGetRecordsByBeer>('/api/v1/records/find', payload);
  return res.data;
};
