import { MouseEvent } from 'react';

import BaseHeaderIconButton from './BaseIconButton';

import { XIcon } from '@/assets/icon';

interface CloseButtonProps {
  onClick?: (e?: MouseEvent) => void;
}

const CloseButton = ({ onClick }: CloseButtonProps) => {
  return (
    <BaseHeaderIconButton aria-label="닫기" iconColor="white" iconSize={24} onClick={onClick}>
      <XIcon />
    </BaseHeaderIconButton>
  );
};

export default CloseButton;
