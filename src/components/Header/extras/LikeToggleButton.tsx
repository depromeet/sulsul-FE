import { MouseEvent, useState } from 'react';

import Icon from '@/components/commons/Icon';
import { $isLikeBeer } from '@/recoil/atoms';

interface LikeToggleButtonProps {
  defaultIsLiking?: boolean;
  onLike: (e?: MouseEvent) => Promise<void>;
  onUnLike: (e?: MouseEvent) => Promise<void>;
}

const LikeToggleButton = ({ defaultIsLiking, onLike, onUnLike }: LikeToggleButtonProps) => {
  const [isLiking, setIsLiking] = useState($isLikeBeer);

  const handleLike = async () => {
    await onLike();
    setIsLiking(true);
  };

  const handleUnLike = async () => {
    await onUnLike();
    setIsLiking(false);
  };

  return (
    <button
      type="button"
      aria-label={isLiking ? '좋아요 해제' : '좋아요'}
      onClick={isLiking ? handleUnLike : handleLike}
    >
      {isLiking ? <Icon name="Heart" color="white" /> : <Icon name="HeartOutlined" color="white" />}
    </button>
  );
};

export default LikeToggleButton;
