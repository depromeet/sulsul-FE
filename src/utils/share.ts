import isServer from './isServer';
import { getOS } from './getOS';

import { openSuccessToast } from '@/utils/toast';

interface Params {
  title?: string;
  text?: string;
  url?: string;
}

let isOpen = false;
const DURATION = 2000;

export async function share({ title, text, url = '' }: Params) {
  if (isServer()) {
    return;
  }

  const messageToCopy = `${title}\n${text}\n${url}`.trim();

  // NOTE: 안드로이드 카카오톡에서는 window.navigator.share가 안됨
  if (window.navigator.userAgent.toLowerCase().includes('kakao') && getOS() === 'android') {
    await window.navigator.clipboard.writeText(messageToCopy);
    openSuccessToast({ message: '공유 링크가 복사 되었습니다.' });
    return;
  }

  if (getOS() === 'web') {
    try {
      if (isOpen) {
        return;
      }
      await window.navigator.clipboard.writeText(messageToCopy);
      openSuccessToast({ message: '공유 링크가 복사 되었습니다.' });
      isOpen = true;
      setTimeout(() => {
        isOpen = false;
      }, DURATION);
      return;
    } catch (e) {
      return await window.navigator.share({ title, text, url });
    }
  }

  return await window.navigator.share({ title, text, url });
}
