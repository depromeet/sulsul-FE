import { atom } from 'recoil';

import { ListViewType } from '@/components/Header/extras/ListViewToggleButton';

const ATOM_KEY = 'beer-list-view-type';

export const $beerListViewType = atom<ListViewType>({
  key: ATOM_KEY,
  default: 'grid',
});
