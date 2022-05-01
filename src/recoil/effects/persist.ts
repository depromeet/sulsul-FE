import { AtomEffect } from 'recoil';

interface PersistRecoilEffectArgs {
  recoilAtomKey: string;
}

const persistRecoilEffect =
  <RecoilState = any>({ recoilAtomKey }: PersistRecoilEffectArgs): AtomEffect<RecoilState> =>
  ({ setSelf, onSet }) => {
    if (typeof window === 'undefined') {
      return;
    }

    const persistRecoilKey = `persist:recoil@${recoilAtomKey}`;

    const savedValue = localStorage.getItem(persistRecoilKey);

    if (savedValue) {
      const parsedValue = JSON.parse(savedValue);
      setSelf(parsedValue);
    }

    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem(persistRecoilKey)
        : localStorage.setItem(persistRecoilKey, JSON.stringify(newValue));
    });
  };

export default persistRecoilEffect;
