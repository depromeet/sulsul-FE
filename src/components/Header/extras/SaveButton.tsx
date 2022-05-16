import { MouseEvent } from 'react';

import BaseHeaderIconButton from './BaseIconButton';

import Icon from '@/components/commons/Icon';

interface SaveButtonProps {
  onClick?: (e?: MouseEvent) => void;
}

const SaveButton = ({ onClick }: SaveButtonProps) => {
  return (
    <BaseHeaderIconButton aria-label="저장하기" iconColor="white" onClick={onClick}>
      <Icon name="Save" />
    </BaseHeaderIconButton>
  );
};

export default SaveButton;
