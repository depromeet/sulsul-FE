import axios from 'axios';

import { IBasePaginationResponse } from '..';
import { IRequestBeer } from './request-beer';

export interface IGetRequestBeersPayload {
  cursor: number;
  limit: number;
}

export interface IGetRequestBeersResponse extends IBasePaginationResponse<IRequestBeer[]> {}

export const getRequestBeers = async (payload: IGetRequestBeersPayload) => {
  const res = await axios.post<IGetRequestBeersResponse>('/api/v1/request-beers/list', payload);
  return res.data;
};
