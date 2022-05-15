import { MouseEvent, useState } from 'react';

import BaseHeaderIconButton from './BaseIconButton';

import Icon from '@/components/commons/Icon';

interface LikeToggleButtonProps {
  defaultIsLiking: boolean;
  onLike: (e?: MouseEvent) => Promise<void>;
  onUnLike: (e?: MouseEvent) => Promise<void>;
}

const LikeToggleButton = ({ defaultIsLiking, onLike, onUnLike }: LikeToggleButtonProps) => {
  const [isLiking, setIsLiking] = useState(defaultIsLiking);

  const handleLike = async () => {
    await onLike();
    setIsLiking(true);
  };

  const handleUnLike = async () => {
    await onUnLike();
    setIsLiking(false);
  };

  return (
    <BaseHeaderIconButton
      aria-label={isLiking ? '좋아요 해제' : '좋아요'}
      iconColor="white"
      onClick={isLiking ? handleUnLike : handleLike}
    >
      {isLiking ? <Icon name="Heart" /> : <Icon name="HeartOutlined" />}
    </BaseHeaderIconButton>
  );
};

export default LikeToggleButton;
