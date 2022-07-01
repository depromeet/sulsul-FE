import { MouseEvent, useState } from 'react';

import Icon from '@/components/commons/Icon';
import { useToggleLikeBeer } from '@/queries';

interface LikeBeerToggleButtonProps {
  isLiked: boolean;
  id: number;
}

const LikeBeerToggleButton = ({ id, isLiked: defaultIsLiked }: LikeBeerToggleButtonProps) => {
  const [isLiked, setIsLiked] = useState(defaultIsLiked);

  const { likeBeer, unLikeBeer } = useToggleLikeBeer();

  const handleLike = async (e: MouseEvent) => {
    e.stopPropagation();
    await likeBeer(id);
    setIsLiked(true);
  };

  const handleUnLike = async (e: MouseEvent) => {
    e.stopPropagation();
    await unLikeBeer(id);
    setIsLiked(false);
  };

  const [label, onClick, icon] = isLiked
    ? ['좋아요 해제', handleUnLike, <Icon key="unliked" name="Heart" color="white" />]
    : ['좋아요', handleLike, <Icon key="like" name="HeartOutlined" color="white" />];

  return (
    <button type="button" aria-label={label} onClick={onClick}>
      {icon}
    </button>
  );
};

export default LikeBeerToggleButton;
