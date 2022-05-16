import { MouseEvent } from 'react';

import BaseHeaderIconButton from './BaseIconButton';

import Icon from '@/components/commons/Icon';

interface CloseButtonProps {
  onClick?: (e?: MouseEvent) => void;
}

const CloseButton = ({ onClick }: CloseButtonProps) => {
  return (
    <BaseHeaderIconButton aria-label="닫기" iconColor="white" iconSize={24} onClick={onClick}>
      <Icon name="X" />
    </BaseHeaderIconButton>
  );
};

export default CloseButton;
