import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from '@emotion/styled';

import { EmojiValue } from './EmojiRadioGroup';

import Emoji from '@/components/Emoji';

interface EmojiTransitionViewerProps {
  value: EmojiValue;
}

const EMOJI_DISPLAY_SIZE = 140;

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
  }
  & .displayed-emoji-exit {
    opacity: 1;
  }
  & .displayed-emoji-exit-active {
    opacity: 0;
    transition: opacity 1.2s;
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
