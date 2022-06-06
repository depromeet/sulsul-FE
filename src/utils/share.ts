import { openFailToast, openSuccessToast } from '@/utils/toast';

interface Params {
  title?: string;
  text?: string;
  url?: string;
}

export async function share({ title, text, url = '' }: Params) {
  const messageToCopy = `[${title}]\n${text}\n${url}`.trim();
  if (typeof window === 'undefined') {
    return;
  }

  try {
    if (navigator.share) {
      navigator
        .share({ title, text, url })
        .then(() => openSuccessToast({ message: '링크를 복사했어요.' }))
        .catch((error) => {
          openFailToast({ message: '링크를 복사하지 못했어요.' });
          console.log(error);
        });
      return true;
    }

    throw new Error();
  } catch (e) {
    copyLink(messageToCopy);
  }
  return;
}

// NOTE: share API 미지원 브라우저에 대한 fallback
export async function copyLink(link: string) {
  try {
    navigator.clipboard.writeText(link);
    openSuccessToast({ message: '링크를 복사했어요.' });
    throw new Error();
  } catch (e) {
    openFailToast({ message: '링크를 복사하지 못했어요.' });
  }

  return false;
}
