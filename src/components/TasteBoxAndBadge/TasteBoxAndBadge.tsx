import React from 'react';
import styled from '@emotion/styled';
import type { HTMLAttributes } from 'react';

import LikeBadge from '@/components/commons/LikeBadge';
import TasteBox from '@/components/commons/TasteBox';

export interface TasteBoxAndBadgeProps extends HTMLAttributes<HTMLDivElement> {
  text?: string;
  likeCount?: number;
  className?: string;
}

const TasteBoxAndBadge = (props: TasteBoxAndBadgeProps) => {
  const { text, likeCount, className, ...rest } = props;
  return (
    <StyledTasteBoxAndBadge type="default" className={className} {...rest}>
      {text}
      <LikeBadge likeCount={likeCount} />
    </StyledTasteBoxAndBadge>
  );
};

export default TasteBoxAndBadge;

const StyledTasteBoxAndBadge = styled(TasteBox)`
  justify-content: space-between;
  box-sizing: border-box;
`;
