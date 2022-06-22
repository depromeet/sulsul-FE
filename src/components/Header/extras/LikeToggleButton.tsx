import { MouseEvent, useState } from 'react';

import Icon from '@/components/commons/Icon';

interface LikeToggleButtonProps {
  isLiked?: boolean;
  onLike: (e?: MouseEvent) => Promise<void>;
  onUnLike: (e?: MouseEvent) => Promise<void>;
}

const LikeToggleButton = ({ isLiked, onLike, onUnLike }: LikeToggleButtonProps) => {
  const [isLiking, setIsLiking] = useState(isLiked);

  const handleLike = async (e: MouseEvent) => {
    e?.stopPropagation();
    await onLike();
    setIsLiking(true);
  };

  const handleUnLike = async (e: MouseEvent) => {
    e?.stopPropagation();
    await onUnLike();
    setIsLiking(false);
  };

  return (
    <button
      type="button"
      aria-label={isLiking ? '좋아요 해제' : '좋아요'}
      onClick={(e) => (isLiking ? handleUnLike(e) : handleLike(e))}
    >
      {isLiking ? <Icon name="Heart" color="white" /> : <Icon name="HeartOutlined" color="white" />}
    </button>
  );
};

export default LikeToggleButton;
