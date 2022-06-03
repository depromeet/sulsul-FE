import { IBeer } from '../beer';

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
