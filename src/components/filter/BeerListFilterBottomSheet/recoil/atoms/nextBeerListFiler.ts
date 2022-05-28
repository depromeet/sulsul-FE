import { atom } from 'recoil';

import { IBeerListFilter } from '@/apis';
import { BeerListFilterChipType } from '@/components/filter/BeerListFilterChipList/BeerListFilterChipList';

export const $nextBeerListFilter = atom<IBeerListFilter>({
  key: 'next-beer-list-filter',
  default: {},
});

export const $nextBeerListFilterChips = atom<BeerListFilterChipType[]>({
  key: 'next-beer-list-filter-chips',
  default: [],
});
