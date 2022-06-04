import { atom } from 'recoil';

import { ListViewType } from '@/components/Header/extras/ListViewToggleButton';
import { urlSyncRecoilEffect } from '@/recoil/effects';

export const BEER_LIST_VIEW_ATOM_KEY = 'beer-list-view-type';

export const $beerListViewType = atom<ListViewType>({
  key: BEER_LIST_VIEW_ATOM_KEY,
  default: 'grid',
  effects: [urlSyncRecoilEffect(BEER_LIST_VIEW_ATOM_KEY)],
});
