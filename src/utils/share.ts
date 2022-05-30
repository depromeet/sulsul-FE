import { toast } from 'react-toastify';

interface Params {
  title?: string;
  text?: string;
  url?: string;
}

export async function share({ title, text, url = '' }: Params) {
  if (typeof window === 'undefined') {
    return;
  }

  const messageToCopy = `[${title}]\n${text}\n${url}`.trim();

  try {
    if (navigator.share) {
      navigator
        .share({ title, text, url })
        .then(() => openSuccessToast())
        .catch((error) => {
          openFailToast();
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
  if (typeof window === 'undefined') {
    return false;
  }
  try {
    navigator.clipboard.writeText(link);
    openSuccessToast();
    throw new Error();
  } catch (e) {
    openFailToast();
  }

  return false;
}

function openSuccessToast() {
  toast.success('링크를 복사했어요', {
    position: 'top-center',
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
  });
}

function openFailToast() {
  toast.error('링크를 복사하지 못했어요. 주소창의 링크를 복사해주세요.', {
    position: 'top-center',
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
  });
}
