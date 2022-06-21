import { atom } from 'recoil';

import { urlSyncRecoilEffect } from '@/recoil/effects';

export const IS_LIKE_BEER = 'is-like-beer';

const $isLikeBeer = atom<boolean>({
  key: IS_LIKE_BEER,
  default: false,
  effects: [urlSyncRecoilEffect(IS_LIKE_BEER)],
});

export default $isLikeBeer;
