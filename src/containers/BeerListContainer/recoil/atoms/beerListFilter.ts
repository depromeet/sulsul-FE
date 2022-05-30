import { atom } from 'recoil';

import { IBeerListFilter } from '@/apis';
import { BeerListFilterChipType } from '@/components/filter/BeerListFilterChipList';

/** @TODO url 파라미터 값으로 필터 초기값 설정 */
export const $beerListFilter = atom<IBeerListFilter>({
  key: 'beer-list-filter',
  default: {},
});

export const $beerListFilterChips = atom<BeerListFilterChipType[]>({
  key: 'beer-list-filter-chips',
  default: [],
});
