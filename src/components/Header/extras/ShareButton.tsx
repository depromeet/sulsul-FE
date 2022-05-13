import { MouseEvent } from 'react';

import BaseHeaderIconButton from './BaseIconButton';

import { ShareIcon } from '@/assets/icon';

interface ShareButtonProps {
  onClick?: (e?: MouseEvent) => void;
}

const ShareButton = ({ onClick }: ShareButtonProps) => {
  return (
    <BaseHeaderIconButton aria-label="공유하기" iconColor="white" onClick={onClick}>
      <ShareIcon />
    </BaseHeaderIconButton>
  );
};

export default ShareButton;
