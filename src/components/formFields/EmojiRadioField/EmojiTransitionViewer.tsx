import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

import { EmojiValue } from './EmojiRadioGroup';

import Emoji from '@/components/Emoji';

interface EmojiTransitionViewerProps {
  value: EmojiValue;
}

const EMOJI_DISPLAY_SIZE = 140;

const FadeIn = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const StyledEmojiTransitionViewer = styled(TransitionGroup)`
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
    transition: opacity 1.2s;
    animation: ${FadeIn} 0.6s forwards;
  }
  & .displayed-emoji-exit {
    opacity: 1;
  }
  & .displayed-emoji-exit-active {
    transition: opacity 0.4s, transform 0.4s;
    transform: scale(0);
    opacity: 0;
  }
`;

const EmojiTransitionViewer: React.FC<EmojiTransitionViewerProps> = ({ value }) => {
  return (
    <StyledEmojiTransitionViewer>
      <CSSTransition key={value} timeout={1200} classNames={`displayed-emoji`}>
        <Emoji feel={value} size={EMOJI_DISPLAY_SIZE} className="displayed-emoji" />
      </CSSTransition>
    </StyledEmojiTransitionViewer>
  );
};

export default EmojiTransitionViewer;
