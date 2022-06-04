import { IBeer } from '../beer';
import { IMemberRecord } from '../user';
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
  createdAt: Date;
  updatedAt: Date;
  startCountryKor: string;
  startCountryEng: string;
  endCountryKor: string;
  endCountryEng: string;
  flavorDtos: IFlavor[];
  beerResponseDto: IBeer;
  recordCount: number;
}

export interface IRecordByBeer {
  content: string;
  feel: 1 | 2 | 3 | 4 | 5;
  memberRecordDto: IMemberRecord;
  createdAt: Date;
  updatedAt: Date;
  flavorDtos: IFlavor[];
}

export interface IGetRecordByBeerPayload {
  beerId: number;
  recordId: number;
}

export interface IGetRecordByBeer extends IBaseResponse<IRecordByBeer[]> {}

export const getRecordByBeer = async (payload: IGetRecordByBeerPayload) => {
  const res = await axios.post<IGetRecordByBeer>('/api/v1/records/find', payload);
  return res.data.contents;
};
