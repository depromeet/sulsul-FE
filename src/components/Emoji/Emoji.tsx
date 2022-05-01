import styled from '@emotion/styled';

import { getEmoji } from '@/utils';

interface EmojiProps {
  feel?: number;
}

const Emoji = ({ feel }: EmojiProps) => {
  return <StyledEmoji feel={feel}>{feel && getEmoji(feel)}</StyledEmoji>;
};

export default Emoji;

const StyledEmoji = styled.div<{ feel?: number }>`
  width: 2.7rem;
  height: 2.7rem;
  border-radius: ${({ feel }) => !feel && '50%'};
  background: ${({ feel }) =>
    !feel &&
    'linear-gradient(180deg, rgba(255, 255, 255, 0.3) 6.25%, rgba(255, 255, 255, 0.1) 87.5%, rgba(255, 255, 255, 0) 87.5%)'};
`;
