import React from 'react';
import styled from '@emotion/styled';
import type { HTMLAttributes } from 'react';

import LikeBadge from '@/components/commons/LikeBadge';
import TasteBox from '@/components/commons/TasteBox';

export interface TasteBoxAndBadgeProps extends HTMLAttributes<HTMLDivElement> {
  content?: string;
  count?: number;
  className?: string;
}

const TasteBoxAndBadge = (props: TasteBoxAndBadgeProps) => {
  const { content, count, className, ...rest } = props;
  return (
    <StyledTasteBoxAndBadge type="default" className={className} {...rest}>
      {content}
      <LikeBadge count={count} />
    </StyledTasteBoxAndBadge>
  );
};

export default TasteBoxAndBadge;

const StyledTasteBoxAndBadge = styled(TasteBox)`
  justify-content: space-between;
  box-sizing: border-box;
`;
