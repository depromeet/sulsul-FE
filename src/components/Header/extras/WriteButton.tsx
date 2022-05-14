import { MouseEvent } from 'react';

import BaseHeaderIconButton from './BaseIconButton';

import { WriteIcon } from '@/assets/icon';

interface WriteButtonProps {
  onClick?: (e?: MouseEvent) => void;
}

const WriteButton = ({ onClick }: WriteButtonProps) => {
  return (
    <BaseHeaderIconButton aria-label="작성하기" iconColor="white" onClick={onClick}>
      <WriteIcon />
    </BaseHeaderIconButton>
  );
};

export default WriteButton;
