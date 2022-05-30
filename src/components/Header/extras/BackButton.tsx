import { MouseEvent } from 'react';
import { useRouter } from 'next/router';

import Icon from '@/components/commons/Icon';

interface BackButtonProps {
  onClick?: (e?: MouseEvent) => void;
  className?: string;
}

const BackButton = ({ className, onClick }: BackButtonProps) => {
  const router = useRouter();

  return (
    <button
      className={className}
      type="button"
      aria-label="뒤로가기"
      onClick={onClick ?? router.back}
    >
      <Icon name="Back" color="whiteOpacity50" />
    </button>
  );
};

export default BackButton;
