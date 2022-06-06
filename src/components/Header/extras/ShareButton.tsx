import { MouseEvent } from 'react';

import Icon from '@/components/commons/Icon';

interface ShareButtonProps {
  onClick?: (e?: MouseEvent) => void;
}

const ShareButton = ({ onClick }: ShareButtonProps) => {
  return (
    <button type="button" aria-label="공유하기" onClick={onClick}>
      <Icon name="Share" color="white" />
    </button>
  );
};

export default ShareButton;
