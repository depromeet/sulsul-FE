import { MouseEvent, useState } from 'react';

import Icon from '@/components/commons/Icon';
import { useLikeBeer, useUnLikeBeer } from '@/queries';

interface LikeBeerToggleButtonProps {
  isLiked: boolean;
  id: number;
}

const LikeBeerToggleButton = ({ id, isLiked }: LikeBeerToggleButtonProps) => {
  const [isLiking, setIsLiking] = useState(isLiked);

  const { mutateAsync: likeBeerMutation } = useLikeBeer(id, isLiked);
  const { mutateAsync: UnLikeBeerMutation } = useUnLikeBeer(id, isLiked);

  const handleLike = async (e: MouseEvent) => {
    e.stopPropagation();
    await likeBeerMutation(id);
    setIsLiking(true);
  };

  const handleUnLike = async (e: MouseEvent) => {
    e.stopPropagation();
    await UnLikeBeerMutation(id);
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

export default LikeBeerToggleButton;
