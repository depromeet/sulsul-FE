import { MouseEvent } from 'react';

import BaseHeaderIconButton from './BaseIconButton';

import Icon from '@/components/commons/Icon';

interface ShareButtonProps {
  onClick?: (e?: MouseEvent) => void;
}

const ShareButton = ({ onClick }: ShareButtonProps) => {
  return (
    <BaseHeaderIconButton aria-label="공유하기" iconColor="white" onClick={onClick}>
      <Icon name="Share" />
    </BaseHeaderIconButton>
  );
};

export default ShareButton;
