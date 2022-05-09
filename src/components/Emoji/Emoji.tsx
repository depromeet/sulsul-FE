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
}

const Emoji = (props: EmojiProps) => {
  const { feel } = props;

  return <>{feel !== null ? <Icon name={getEmoji(feel)} size={36} /> : <EmptyEmoji />}</>;
};

export default Emoji;

const EmptyEmoji = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.3) 6.25%,
    rgba(255, 255, 255, 0.1) 87.5%,
    rgba(255, 255, 255, 0.05) 100%
  );
`;
