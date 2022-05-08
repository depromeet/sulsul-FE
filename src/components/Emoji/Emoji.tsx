import styled from '@emotion/styled';

import { getEmoji } from '@/utils';

interface EmojiProps {
  feel?: number | null;
}

const Emoji = (props: EmojiProps) => {
  const { feel, ...attrs } = props;
  return (
    <StyledEmoji feel={feel} {...attrs}>
      {feel && getEmoji(feel)}
    </StyledEmoji>
  );
};

export default Emoji;

const StyledEmoji = styled.div<EmojiProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  > svg {
    width: 36px;
    height: 36px;
  }

  border-radius: ${({ feel }) => !feel && '50%'};
  background: ${({ feel }) =>
    !feel &&
    'linear-gradient(180deg, rgba(255, 255, 255, 0.3) 6.25%, rgba(255, 255, 255, 0.1) 87.5%, rgba(255, 255, 255, 0.05) 100%);'};
`;
