import { atom } from 'recoil';

import { IUser } from '@/apis/user';

const ATOM_KEY = 'user-session';

const $userSession = atom<IUser | undefined>({
  key: ATOM_KEY,
  default: undefined,
});

export default $userSession;
