import { MouseEvent } from 'react';

import Icon from '@/components/commons/Icon';

interface DeleteButtonProps {
  onClick?: (e?: MouseEvent) => void;
}

const DeleteButton = ({ onClick }: DeleteButtonProps) => {
  return (
    <button type="button" aria-label="삭제하기" onClick={onClick}>
      <Icon name="Delete" color="white" />
    </button>
  );
};

export default DeleteButton;
