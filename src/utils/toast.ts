import { toast } from 'react-toastify';

interface Props {
  message: string;
}

export function openSuccessToast({ message = '' }: Props) {
  toast.success(message, {
    position: 'top-center',
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: 'dark',
  });
}

export function openFailToast({ message = '' }: Props) {
  toast.error(message, {
    position: 'top-center',
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: 'dark',
  });
}
