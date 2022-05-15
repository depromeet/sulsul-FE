import { MouseEvent } from 'react';
import { useRouter } from 'next/router';

import BaseHeaderIconButton from './BaseIconButton';

import Icon from '@/components/commons/Icon';

interface BackButtonProps {
  onClick?: (e?: MouseEvent) => void;
  className?: string;
}

const BackButton = ({ className, onClick }: BackButtonProps) => {
  const router = useRouter();

  return (
    <BaseHeaderIconButton
      className={className}
      aria-label="뒤로가기"
      iconColor="whiteOpacity50"
      onClick={onClick ?? router.back}
    >
      <Icon name="Back" />
    </BaseHeaderIconButton>
  );
};

export default BackButton;
