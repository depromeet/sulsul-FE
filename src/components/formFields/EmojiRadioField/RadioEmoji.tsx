import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from '@emotion/styled';

import Emoji from '@/components/Emoji';

interface RadioEmojiProps {
  value: 1 | 2 | 3 | 4 | 5;
}

const EMOJI_DISPLAY_SIZE = 140;

const StyledRadioEmoji = styled(TransitionGroup)`
  position: relative;
  width: ${EMOJI_DISPLAY_SIZE}px;
  height: ${EMOJI_DISPLAY_SIZE}px;

  & .displayed-emoji {
    position: absolute;
  }

  & .displayed-emoji-enter {
    opacity: 0;
  }
  & .displayed-emoji-enter-active {
    opacity: 1;
    transition: transform 0.8s, opacity 0.8s;
  }
  & .displayed-emoji-exit {
    opacity: 1;
  }
  & .displayed-emoji-exit-active {
    opacity: 0;
    transition: transform 0.8s, opacity 0.8s;
  }
`;

const RadioEmoji: React.FC<RadioEmojiProps> = ({ value }) => {
  return (
    <StyledRadioEmoji>
      <CSSTransition key={value} timeout={800} classNames={`displayed-emoji`}>
        <Emoji feel={value} size={EMOJI_DISPLAY_SIZE} className="displayed-emoji" />
      </CSSTransition>
    </StyledRadioEmoji>
  );
};

export default RadioEmoji;
