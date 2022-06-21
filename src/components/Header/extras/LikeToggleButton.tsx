import { MouseEvent } from 'react';

import Icon from '@/components/commons/Icon';

interface LikeToggleButtonProps {
  isLiked?: boolean;
  onLike: (e?: MouseEvent) => Promise<void>;
  onUnLike: (e?: MouseEvent) => Promise<void>;
}

const LikeToggleButton = ({ isLiked, onLike, onUnLike }: LikeToggleButtonProps) => {
  const handleLike = async () => {
    await onLike();
  };

  const handleUnLike = async () => {
    await onUnLike();
  };

  return (
    <button
      type="button"
      aria-label={isLiked ? '좋아요 해제' : '좋아요'}
      onClick={isLiked ? handleUnLike : handleLike}
    >
      {isLiked ? <Icon name="Heart" color="white" /> : <Icon name="HeartOutlined" color="white" />}
    </button>
  );
};

export default LikeToggleButton;
