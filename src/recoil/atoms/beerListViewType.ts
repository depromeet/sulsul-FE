import { atom } from 'recoil';

import { urlSyncRecoilEffect } from '@/recoil/effects';

export const BEER_LIST_VIEW_ATOM_KEY = 'beer-list-view-type';

export type BeerListViewType = 'grid' | 'list';

export const $beerListViewType = atom<BeerListViewType>({
  key: BEER_LIST_VIEW_ATOM_KEY,
  default: 'grid',
  effects: [urlSyncRecoilEffect(BEER_LIST_VIEW_ATOM_KEY)],
});
