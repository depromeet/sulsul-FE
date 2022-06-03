import { atom } from 'recoil';

import { EBeerSortBy } from '@/apis';
import { queryParamsRecoilEffect } from '@/recoil/effects';

export const BEER_LIST_SORT_BY_ATOM_KEY = 'beer-list-sort-by';

export type BeerListSortType =
  | EBeerSortBy.NAME_KOR_ASC
  | EBeerSortBy.RECORD_DESC
  | EBeerSortBy.ALCOHOL_ASC
  | EBeerSortBy.ALCOHOL_DESC;

export const beerListSortTypeTextAlias: Record<BeerListSortType, string> = {
  [EBeerSortBy.NAME_KOR_ASC]: '맥주 이름 순',
  [EBeerSortBy.RECORD_DESC]: '리뷰 많은 순',
  [EBeerSortBy.ALCOHOL_DESC]: '높은 도수 순',
  [EBeerSortBy.ALCOHOL_ASC]: '낮은 도수 순',
};

export const $beerListSortBy = atom<BeerListSortType>({
  key: BEER_LIST_SORT_BY_ATOM_KEY,
  default: EBeerSortBy.RECORD_DESC,
  effects: [queryParamsRecoilEffect(BEER_LIST_SORT_BY_ATOM_KEY)],
});
