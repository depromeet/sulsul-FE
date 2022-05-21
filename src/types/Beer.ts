export interface CountryType {
  id?: number;
  name?: string;
  nameEng?: string;
  continent?: {
    id: number;
    name: string;
  };
}

export interface Beer {
  id?: number;
  country?: CountryType;
  type?: string;
  name?: string;
  nameEng?: string;
  imageUrl?: string;
  content?: string;
  alcohol?: number;
  price?: number;
  volume?: number;
  feel?: number | null;
  isLiked?: boolean;
}

export type BeerListSortType = 'ALCOHOL_ASC' | 'ALCOHOL_DESC' | 'NAME' | 'REVIEW';

export const beerListSortTextAlias: Record<BeerListSortType, string> = {
  NAME: '맥주 이름 순',
  REVIEW: '리뷰 많은 순',
  ALCOHOL_DESC: '높은 도수 순',
  ALCOHOL_ASC: '낮은 도수 순',
};
