import { MouseEvent } from 'react';

import Icon from '@/components/commons/Icon';

interface SaveButtonProps {
  onClick?: (e?: MouseEvent) => void;
}

const SaveButton = ({ onClick }: SaveButtonProps) => {
  return (
    <button type="button" aria-label="저장하기" onClick={onClick}>
      <Icon name="Save" color="white" />
    </button>
  );
};

export default SaveButton;
