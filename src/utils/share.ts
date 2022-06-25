import isServer from './isServer';

import { openFailToast, openSuccessToast } from '@/utils/toast';

interface Params {
  title?: string;
  text?: string;
  url?: string;
}

export async function share({ title, text, url = '' }: Params) {
  const messageToCopy = `[${title}]\n${text}\n${url}`.trim();
  if (isServer()) {
    return false;
  }

  try {
    await window.navigator.share({ title, text, url });
  } catch (e) {
    // 아래로 이동
  }
  copyLink(messageToCopy);
  return;
}

// NOTE: share API 미지원 브라우저에 대한 fallback
export async function copyLink(link: string) {
  if (isServer()) {
    return false;
  }

  try {
    navigator.clipboard.writeText(link);
    openSuccessToast({ message: '링크를 복사했어요.' });

  } catch (e) {
    openFailToast({ message: '링크를 복사하지 못했어요.' });
    console.log(e);
  }

  return false;
}
