import React from 'react';
import styled from '@emotion/styled';
import type { HTMLAttributes } from 'react';

import ThumbUpBadge from '@/components/commons/Badge/ThumbUpBadge';
import TasteBox from '@/components/commons/TasteBox';

interface Props extends HTMLAttributes<HTMLDivElement> {
  text?: string;
  likeCount?: number;
}

const TasteBoxAndBadge = (props: Props) => {
  const { text, likeCount, ...attrs } = props;
  return (
    <StyledTasteBoxAndBadge type="default" size="long" {...attrs}>
      {text}
      <ThumbUpBadge likeCount={likeCount} />
    </StyledTasteBoxAndBadge>
  );
};

export default TasteBoxAndBadge;

const StyledTasteBoxAndBadge = styled(TasteBox)`
  justify-content: space-between;
`;
