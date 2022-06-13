import { IContinent } from '../continent';

export interface ICountry {
  id: number;
  nameKor: string;
  nameEng: string;
  imageUrl: string;
  continent?: IContinent;
}
