import { MouseEvent } from 'react';

import Icon from '@/components/commons/Icon';

interface CloseButtonProps {
  onClick?: (e?: MouseEvent) => void;
}

const CloseButton = ({ onClick }: CloseButtonProps) => {
  return (
    <button type="button" aria-label="닫기" onClick={onClick}>
      <Icon name="X" color="white" size={24} />
    </button>
  );
};

export default CloseButton;
