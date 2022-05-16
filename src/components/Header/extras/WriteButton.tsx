import { MouseEvent } from 'react';

import BaseHeaderIconButton from './BaseIconButton';

import Icon from '@/components/commons/Icon';

interface WriteButtonProps {
  onClick?: (e?: MouseEvent) => void;
}

const WriteButton = ({ onClick }: WriteButtonProps) => {
  return (
    <BaseHeaderIconButton aria-label="작성하기" iconColor="white" onClick={onClick}>
      <Icon name="Write" />
    </BaseHeaderIconButton>
  );
};

export default WriteButton;
