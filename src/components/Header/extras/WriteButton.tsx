import { MouseEvent } from 'react';

import Icon from '@/components/commons/Icon';

interface WriteButtonProps {
  onClick?: (e?: MouseEvent) => void;
}

const WriteButton = ({ onClick }: WriteButtonProps) => {
  return (
    <button type="button" aria-label="작성하기" onClick={onClick}>
      <Icon name="Write" color="white" />
    </button>
  );
};

export default WriteButton;
