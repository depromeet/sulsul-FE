import axios from 'axios';

import { IBaseResponse } from '..';
import { IRequestBeer } from './request-beer';

export interface ICreateRequestBeerResponseData extends IBaseResponse<IRequestBeer> {}

export interface ICreateRequestBeerPayload
  extends Pick<IRequestBeer, 'beerImageUrls' | 'beerName'> {}

export const createRequestBeer = async (payload: ICreateRequestBeerPayload) => {
  const res = await axios.post<ICreateRequestBeerResponseData>('/api/v1/request-beers', payload);
  return res.data.contents;
};
