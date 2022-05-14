import { MouseEvent } from 'react';

import BaseHeaderIconButton from './BaseIconButton';

import { SaveIcon } from '@/assets/icon';

interface SaveButtonProps {
  onClick?: (e?: MouseEvent) => void;
}

const SaveButton = ({ onClick }: SaveButtonProps) => {
  return (
    <BaseHeaderIconButton aria-label="저장하기" iconColor="white" onClick={onClick}>
      <SaveIcon />
    </BaseHeaderIconButton>
  );
};

export default SaveButton;
