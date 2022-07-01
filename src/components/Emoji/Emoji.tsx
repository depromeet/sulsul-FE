import styled from '@emotion/styled';

import Icon from '@/components/commons/Icon';

const getEmoji = (feel?: number) => {
  switch (feel) {
    case 1:
      return 'Chaos';
    case 2:
      return 'Bad';
    case 3:
      return 'Soso';
    case 4:
      return 'Good';
    default:
      return 'Best';
  }
};

interface EmojiProps {
  feel?: number | null;
  className?: string;
  size?: number;
}

const Emoji = (props: EmojiProps) => {
  const { feel, className, size = 36 } = props;

  return <>{feel !== null && <Icon name={getEmoji(feel)} size={size} className={className} />}</>;
};

export default Emoji;
